const User = require('../models/user');
const bcrypt = require('bcryptjs');

exports.registerUser = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        // Check if the user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create new user
        const user = new User({
            name,
            email,
            password: hashedPassword,
            isAdmin: false, // Default to false for regular users
        });
        await user.save();
        return res.status(201).json({ message: 'User registered successfully', user: { name, email } });
    } catch (err) {
        console.error('Error registering user:', err);
        return res.status(500).json({ message: 'Server error', error: err.message });
    }
};

exports.loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Find user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Check password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Respond with user data (excluding password)
        return res.status(200).json({
            message: 'Login successful',
            user: { name: user.name, email: user.email, isAdmin: user.isAdmin }
        });
    } catch (err) {
        console.error('Error logging in:', err);
        return res.status(500).json({ message: 'Server error', error: err.message });
    }
}
