const Order = require("../models/Order");
const Food = require("../models/Food");

// Place order
exports.placeOrder = async (req, res) => {
  try {
    const { customerName, phone, address, items } = req.body;

    let totalPrice = 0;

    // Calculate total price from DB
    for (const item of items) {
      const food = await Food.findById(item.food);
      if (!food) {
        return res.status(404).json({ message: "Food item not found" });
      }
      totalPrice += food.price * item.quantity;
    }

    const order = new Order({
      customerName,
      phone,
      address,
      items,
      totalPrice,  // ✅ always from DB
      status: "pending", // ✅ default safe value
    });

    await order.save();
    res.status(201).json(order);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error placing order" });
  }
};

// Get all orders
exports.getOrders = async (req, res) => {
  try {
    const orders = await Order.find()
      .populate("items.food")
      .sort({ createdAt: -1 });
    res.json(orders);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching orders" });
  }
};

// Update order status
exports.updateStatus = async (req, res) => {
  try {
    const { status } = req.body; // new status
    const order = await Order.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    res.json(order);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error updating order status" });
  }
};

