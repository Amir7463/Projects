const Food = require("../models/food");

// Add new food
exports.addFood = async (req, res) => {
  try {
    const { name, price, description } = req.body;
    const imageUrl = req.file ? `/uploads/${req.file.filename}` : null;

    const newFood = new Food({ 
      name, 
      price, 
      description, 
      image: imageUrl
    });

    await newFood.save();
    res.status(201).json(newFood);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error adding food" });
  }
};

// Get all foods
exports.getFoods = async (req, res) => {
  try {
    const foods = await Food.find().sort({ createdAt: -1 });
    res.json(foods);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error fetching foods" });
  }
};

// Update existing food
exports.updateFood = async (req, res) => {
  const { id } = req.params;
  const { name, price, description } = req.body;
  let updateData = { name, price, description };

  if (req.file) {
    updateData.image = `/uploads/${req.file.filename}`;
  }

  try {
    const updatedFood = await Food.findByIdAndUpdate(id, updateData, { new: true });
    if (!updatedFood) return res.status(404).json({ message: "Food not found" });
    res.json(updatedFood);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error updating food" });
  }
};

// Delete a food
exports.deleteFood = async (req, res) => {
  try {
    const food = await Food.findByIdAndDelete(req.params.id);
    if (!food) return res.status(404).json({ message: "Food not found" });
    res.json({ message: "Food deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error deleting food" });
  }
};
