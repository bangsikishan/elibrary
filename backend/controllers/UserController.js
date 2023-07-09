const bcrypt = require('bcrypt');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const createToken = (_id) => {
    return jwt.sign({ _id }, process.env.JWT_SECRET, { expiresIn: '3d' });
}

const loginUser = async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ error: 'Please enter all fields!' });
    }

    if (username.length < 3) {
        return res.status(400).json({ error: 'Username must be at least 3 characters!' });
    }

    const userExists = await User.findOne({ username });

    if (!userExists) {
        return res.status(400).json({ error: 'User does not exist!' });
    }

    const hashedPassword = await bcrypt.compare(password, userExists.password);

    if (!hashedPassword) {
        return res.status(400).json({ error: 'Incorrect password!' });
    }

    const token = createToken(userExists._id);

    res.status(201).json({ username: userExists.username, token });
}

const signupUser = async (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({ error: 'Please enter all fields!' });
    }

    if (username.length < 3) {
        return res.status(400).json({ error: 'Username must be at least 3 characters!' });
    }

    if (!validator.isEmail(email)) {
        return res.status(400).json({ error: 'Please enter a valid email address!' });
    }

    if (!validator.isStrongPassword(password)) {
        return res.status(400).json({ error: 'Please enter a strong password!' });
    }

    const userExists = await User.findOne({ $or: [{ username: username }, { email: email }] });

    if (userExists) {
        return res.status(400).json({ error: 'User already exists!' });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({ username, email, password: hashedPassword });

    res.status(201).json({ id: user._id, username: user.username });
}

module.exports = {
    loginUser, 
    signupUser
}