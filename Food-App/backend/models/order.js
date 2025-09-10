const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  customerName: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  items: [{
    food: { type: mongoose.Schema.Types.ObjectId, ref: "Food" },
    quantity: { type: Number, required: true }
  }],
  totalPrice: { type: Number },
  status: { type: String, default: "pending" }
}, { timestamps: true });

module.exports = mongoose.models.Order || mongoose.model("Order", orderSchema);

