const express = require("express");
const router = express.Router();
const foodController = require("../controllers/foodController");
const authMiddleware = require("../middleware/authMiddleware");
const uploads = require("../middleware/uploads");

// Public route: get all foods
router.get("/", foodController.getFoods);

// Protected route: add food (admin) + image
router.post("/", authMiddleware, uploads.single("image"), foodController.addFood);

// Protected route: update food
router.put("/:id", authMiddleware, uploads.single("image"), foodController.updateFood);

// Protected route: delete food
router.delete("/:id", authMiddleware, foodController.deleteFood);

module.exports = router;
