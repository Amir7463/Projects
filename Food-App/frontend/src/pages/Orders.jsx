import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function Orders({ isAdmin = false, isOpen = false, onClose, onCloseAdmin }) {
  const [orders, setOrders] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetchOrders();
  }, [location.state?.refresh]);

  const fetchOrders = () => {
    fetch("http://localhost:5000/api/orders")
      .then(res => res.json())
      .then(data => setOrders(data))
      .catch(err => console.error("Error fetching orders:", err));
  };

  const cancelOrder = async (id) => {
    try {
      const res = await fetch(`http://localhost:5000/api/orders/${id}`, { method: "DELETE" });
      if (res.ok) {
        alert("Order deleted successfully!");
        fetchOrders();
      } else alert("Failed to delete order");
    } catch (err) {
      console.error(err);
      alert("Something went wrong!");
    }
  };

  const updateStatus = async (id, status) => {
    try {
      const res = await fetch(`http://localhost:5000/api/orders/${id}/status`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      });
      if (res.ok) fetchOrders();
      else alert("Failed to update status");
    } catch (err) {
      console.error(err);
      alert("Something went wrong!");
    }
  };

  // Admin full-page view
  if (isAdmin) {
    return (
      <div className="max-w-5xl mx-auto p-6 relative">
        <button
          onClick={onCloseAdmin}
          className="absolute top-4 right-4 text-red-600 font-bold text-xl"
        >
          ×
        </button>

        <h1 className="text-3xl font-bold mb-6">All Orders</h1>
        {orders.length === 0 ? (
          <p>No orders yet.</p>
        ) : (
          <div className="space-y-4">
            {orders.map(order => (
              <div key={order._id} className="border p-4 rounded-lg shadow-md bg-white">
                <h2 className="font-semibold text-lg">{order.customerName} ({order.phone})</h2>
                <p className="text-gray-600">📍 {order.address}</p>
                <p className="mt-2 font-medium">Total: ₹{order.totalPrice}</p>
                <h3 className="mt-3 font-semibold">Items:</h3>
                <ul className="list-disc ml-6">
                  {order.items.map((item, idx) => <li key={idx}>{item.food?.name} × {item.quantity}</li>)}
                </ul>

                <div className="mt-3 flex items-center gap-3">
                  <span className={`px-3 py-1 rounded text-white ${
                    order.status === "pending" ? "bg-yellow-500" :
                    order.status === "preparing" ? "bg-blue-500" :
                    order.status === "delivered" ? "bg-green-500" :
                    order.status === "cancelled" ? "bg-red-500" : "bg-gray-500"
                  }`}>{order.status}</span>

                  {/* Admin can update status */}
                  {order.status !== "cancelled" && (
                    <select
                      value={order.status}
                      onChange={e => updateStatus(order._id, e.target.value)}
                      className="border px-2 py-1 rounded"
                    >
                      <option value="pending">Pending</option>
                      <option value="preparing">Preparing</option>
                      <option value="delivered">Delivered</option>
                      <option value="cancelled">Cancelled</option>
                    </select>
                  )}

                  {/* Admin can cancel any order */}
                  {order.status !== "cancelled" && (
                    <button
                      onClick={() => cancelOrder(order._id)}
                      className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 cursor-pointer"
                    >
                      Cancel
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }

  // User modal view
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="bg-white w-full max-w-3xl rounded-xl shadow-lg p-6 relative max-h-[90vh] overflow-y-auto">
        <button onClick={onClose} className="absolute top-4 right-4 text-red-600 font-bold text-xl">×</button>
        <h1 className="text-2xl font-bold mb-4">All Orders</h1>
        {orders.length === 0 ? <p>No orders yet.</p> : (
          <div className="space-y-4">
            {orders.map(order => (
              <div key={order._id} className="border p-4 rounded-lg shadow-md bg-white">
                <h2 className="font-semibold text-lg">{order.customerName} ({order.phone})</h2>
                <p className="text-gray-600">📍 {order.address}</p>
                <p className="mt-2 font-medium">Total: ₹{order.totalPrice}</p>
                <h3 className="mt-3 font-semibold">Items:</h3>
                <ul className="list-disc ml-6">
                  {order.items.map((item, idx) => <li key={idx}>{item.food?.name} × {item.quantity}</li>)}
                </ul>

                <div className="mt-3 flex items-center gap-3">
                  <span className={`px-3 py-1 rounded text-white ${
                    order.status === "pending" ? "bg-yellow-500" :
                    order.status === "preparing" ? "bg-blue-500" :
                    order.status === "delivered" ? "bg-green-500" :
                    order.status === "cancelled" ? "bg-red-500" : "bg-gray-500"
                  }`}>{order.status}</span>

                  {/* User can cancel only if order not delivered */}
                  {order.status !== "cancelled" && order.status !== "delivered" && (
                    <button
                      onClick={() => cancelOrder(order._id)}
                      className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 cursor-pointer"
                    >
                      Cancel
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
