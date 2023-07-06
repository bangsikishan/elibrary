const User = require('../models/User');

const loginUser = async (req, res) => {
    const { username, password } = req.body;

    res.json({ message: 'Login User', username, password });
}

const signupUser = async (req, res) => {
    const { username, email, password } = req.body;

    res.json({ message: 'Register User', username, email, password });
}

module.exports = {
    loginUser, 
    signupUser
}