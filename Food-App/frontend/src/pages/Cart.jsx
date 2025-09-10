import { useContext, useState } from "react";
import { CartContext } from "../context/cartcontext";
import { X } from "lucide-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Cart({ isOpen, onClose }) {
  const { cart, removeFromCart } = useContext(CartContext);
  const [showForm, setShowForm] = useState(false);
  const navigate = useNavigate();

  const totalPrice = cart.reduce((acc, item) => acc + Number(item.price), 0);

  const [form, setForm] = useState({
    customerName: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const placeOrder = async (e) => {
    e.preventDefault();
    try {
      const items = cart.map((item) => ({
        food: item._id,
        quantity: 1, // agar tum qty add karna chaho to context me store karo
      }));

      await axios.post("http://localhost:5000/api/orders", {
        ...form,
        items,
        totalPrice,
      });

      alert("✅ Order placed successfully!");
      setShowForm(false);
      onClose();
      
      // ✅ Navigate to orders page with refresh flag
      navigate("/orders", { state: { refresh: true } });
    } catch (error) {
      console.error(error);
      alert("❌ Failed to place order");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center z-50 bg-gray-200 bg-opacity-60">
      <div className="bg-white w-full max-w-md rounded-xl shadow-lg p-6 relative max-h-[90vh] flex flex-col overflow-hidden">
        <button onClick={onClose} className="absolute top-4 right-4 text-red-600">
          <X size={20} />
        </button>

        <h2 className="text-2xl font-bold mb-4">Your Cart</h2>

        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto pr-2">
              {cart.map((item, index) => (
                <div key={index} className="flex items-center justify-between border-b py-3 gap-4">
                  {item.image && (
                    <img src={`http://localhost:5000${item.image}`} alt={item.name} className="w-16 h-16 object-cover rounded" />
                  )}
                  <div className="flex-1 flex justify-between items-center">
                    <span className="block font-medium">{item.name}</span>
                    <span className="font-semibold text-gray-800">₹{item.price}</span>
                  </div>
                  <button
                    onClick={() => removeFromCart(index)}
                    className="ml-4 bg-white text-red-500 px-3 py-1 rounded-lg border border-red-500"
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-4 flex justify-between items-center border-t pt-4">
              <button
                onClick={() => setShowForm(true)}
                className="bg-white text-green-500 px-4 py-2 rounded-lg border border-green-500"
              >
                Buy Now
              </button>
              <span className="text-lg font-bold">Total: ₹{totalPrice}</span>
            </div>
          </>
        )}
      </div>

      {showForm && (
        <div className="fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg max-w-md w-full relative">
            <button onClick={() => setShowForm(false)} className="absolute top-2 right-2 text-red-500">
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
              ></textarea>

              <h3 className="font-semibold mt-3">Order Summary:</h3>
              <ul className="list-disc ml-6">
                {cart.map((item, idx) => (
                  <li key={idx}>
                    {item.name} - ₹{item.price}
                  </li>
                ))}
              </ul>
              <p className="font-bold">Total: ₹{totalPrice}</p>

              <button type="submit" className="w-full bg-green-500 text-white py-2 rounded-lg mt-3">
                Place Order
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
