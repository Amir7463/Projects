const Admin = require("./models/admin");
const bcrypt = require("bcryptjs");

async function seedAdmin() {
  try {
    const existingAdmin = await Admin.findOne({ username: "admin" });
    if (!existingAdmin) {
      const hashedPassword = await bcrypt.hash("1234", 10); // plain password: 1234
      await Admin.create({ username: "admin", password: hashedPassword });
      console.log("✅ Admin seeded successfully");
    } else {
      console.log("✅ Admin already exists");
    }
  } catch (err) {
    console.error("❌ Error seeding admin", err);
  }
}

module.exports = seedAdmin;
