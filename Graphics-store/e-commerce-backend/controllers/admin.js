const User = require('../models/user');
const bcrypt = require('bcryptjs');

/**
 * @desc    Create a default admin user if it does not already exist
 * @route   POST /api/admin/create-admin
 * @access  Public or protected (depending on your use case)
 */
exports.createAdmin = async (req, res) => {
    // Default admin credentials
    const DEFAULT_ADMIN = {
        name: "Moaz",
        email: "moazahmad866@gmail.com",
        password: "123456",
    };

    try {
        // Check if the admin already exists
        const existingAdmin = await User.findOne({ email: DEFAULT_ADMIN.email });

        if (existingAdmin) {
            return res.status(200).json({ message: "Default admin already exist" });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(DEFAULT_ADMIN.password, 10);

        // Create and save the admin user
        const newAdmin = new User({
            name: DEFAULT_ADMIN.name,
            email: DEFAULT_ADMIN.email,
            password: hashedPassword,
            isAdmin: true,
        });

        await newAdmin.save();

        // Respond with success
        return res.status(201).json({
            message: "Default admin created successfully",
            admin: {
                name: newAdmin.name,
                email: newAdmin.email,
                isAdmin: newAdmin.isAdmin,
            },
        });
    } catch (error) {
        console.error("Error creating admin:", error);
        return res.status(500).json({
            message: "Failed to create default admin",
            error: error.message,
        });
    }
};
