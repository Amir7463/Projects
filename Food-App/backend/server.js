const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./db");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Admin = require("./models/admin");
const foodRoutes = require("./routes/foodRoute");
const orderRoutes = require("./routes/orderRoute");
const seedAdmin = require("./seedAdmin"); // ensure this file exists

const app = express();
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

// ✅ Connect to MongoDB + Seed Admin
const startServer = async () => {
  try {
    await connectDB();
    await seedAdmin(); // create default admin if not exists

    // ✅ Admin login endpoint
    app.post("/admin/login", async (req, res) => {
      const { username, password } = req.body;
      try {
        const admin = await Admin.findOne({ username });
        if (!admin) return res.status(401).json({ error: "Invalid credentials" });

        const isMatch = await bcrypt.compare(password, admin.password);
        if (!isMatch) return res.status(401).json({ error: "Invalid credentials" });

        const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
        res.json({ token });
      } catch (err) {
        res.status(500).json({ error: "Server error" });
      }
    });

    // ✅ Routes
    app.use("/api/foods", foodRoutes);
    app.use("/api/orders", orderRoutes);

    // ✅ Test route
    app.get("/", (req, res) => {
      res.send("Food App Backend Running 🚀");
    });

    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));

  } catch (err) {
    console.error("❌ MongoDB connection failed", err);
    process.exit(1);
  }
};

// Start the server
startServer();
