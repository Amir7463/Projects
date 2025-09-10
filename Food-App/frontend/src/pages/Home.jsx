import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { CartContext } from "../context/cartcontext";
import { X } from "lucide-react";

export default function Home({ openOrdersModal }) {
  const [foods, setFoods] = useState([]);
  const { addToCart } = useContext(CartContext);
  const [showForm, setShowForm] = useState(false);
  const [selectedFood, setSelectedFood] = useState(null);
  const [form, setForm] = useState({
    customerName: "",
    phone: "",
    address: "",
  });

  // Fetch foods from backend
  useEffect(() => {
    axios.get("http://localhost:5000/api/foods")
      .then(res => setFoods(res.data))
      .catch(err => console.error(err));
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const buyNow = (food) => {
    setSelectedFood(food);
    setShowForm(true);
  };

  const placeOrder = async (e) => {
    e.preventDefault();
    if (!selectedFood) return;

    try {
      await axios.post("http://localhost:5000/api/orders", {
        customerName: form.customerName,
        phone: form.phone,
        address: form.address,
        items: [{ food: selectedFood._id, quantity: 1 }],
        totalPrice: selectedFood.price,
      });

      // Reset states before showing alerts/modal
      setShowForm(false);
      setSelectedFood(null);
      setForm({ customerName: "", phone: "", address: "" });

      // Small delay to avoid alert/modal clash
      setTimeout(() => {
        alert("✅ Order placed successfully!");
        openOrdersModal();
      }, 100);

    } catch (err) {
      console.error(err);
      alert("❌ Failed to place order");
    }
  };

  return (
    <div className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mx-16">
        {foods.map(food => (
          <div
            key={food._id}
            className="shadow p-4 transform transition-transform duration-300 hover:scale-105 shadow-lg"
          >
            {food.image && (
              <img
                src={`http://localhost:5000${food.image}`}
                alt={food.name}
                className="w-full h-48 object-cover mb-3"
              />
            )}
            <h3 className="text-lg text-orange-500">{food.name}</h3>
            <p className="text-gray-700">{food.description}</p>
            <p className="font-semibold mt-2">₹{food.price}</p>

            <div className="flex gap-2 mt-3">
              <button
                onClick={() => addToCart(food)}
                className="flex-1 bg-white text-gray-700 py-2 text-sm font-bold"
              >
                Add to Cart
              </button>
              <button
                onClick={() => buyNow(food)}
                className="flex-1 text-green-600 py-2 text-sm font-bold"
              >
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Order Form Modal */}
      {showForm && selectedFood && (
        <div className="fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg max-w-md w-full relative">
            <button
              onClick={() => {
                setShowForm(false);
                setSelectedFood(null);
              }}
              className="absolute top-2 right-2 text-red-500"
            >
              <X size={20} />
            </button>

            <h2 className="text-xl font-bold mb-4">Fill Your Details</h2>

            <form onSubmit={placeOrder} className="space-y-3">
              <input
                type="text"
                name="customerName"
                placeholder="Full Name"
                value={form.customerName}
                onChange={handleChange}
                className="w-full border p-2 rounded"
                required
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleChange}
                className="w-full border p-2 rounded"
                required
              />
              <textarea
                name="address"
                placeholder="Delivery Address"
                value={form.address}
                onChange={handleChange}
                className="w-full border p-2 rounded"
                required
              />

              <h3 className="font-semibold mt-3">Order Summary:</h3>
              <p>{selectedFood.name} - ₹{selectedFood.price}</p>
              <p className="font-bold">Total: ₹{selectedFood.price}</p>

              <button
                type="submit"
                className="w-full bg-green-500 text-white py-2 rounded-lg mt-3"
              >
                Place Order
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
