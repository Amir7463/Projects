const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");

// ✅ Place new order
router.post("/", orderController.placeOrder);

// ✅ Get all orders
router.get("/", orderController.getOrders);

// Update order status
router.put("/:id/status", orderController.updateStatus);


// Delete an order
router.delete("/:id", async (req, res) => {
  const Order = require("../models/Order");
  try {
    const order = await Order.findByIdAndDelete(req.params.id);
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }
    res.json({ message: "Order deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error deleting order" });
  }
});



module.exports = router;
