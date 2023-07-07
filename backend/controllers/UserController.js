const bcrypt = require('bcrypt');
const validator = require('validator');
const User = require('../models/User');

const loginUser = async (req, res) => {
    const { username, password } = req.body;

    res.json({ message: 'Login User', username, password });
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