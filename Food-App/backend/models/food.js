const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String },
  image: { type: String }
}, { timestamps: true });

// Pehle se model hai to wahi use karo, otherwise naya banao
module.exports = mongoose.models.Food || mongoose.model("Food", foodSchema);
