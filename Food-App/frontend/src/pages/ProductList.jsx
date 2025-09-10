import React, { useEffect, useState } from "react";
import axios from "axios";
import EditProduct from "./EditProduct";

export default function ProductList() {
  const [foods, setFoods] = useState([]);
  const [editingFood, setEditingFood] = useState(null); // for modal

  const fetchFoods = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/foods");
      setFoods(res.data);
    } catch (err) {
      console.error("Error fetching foods:", err);
    }
  };

  useEffect(() => {
    fetchFoods();
  }, []);

 const handleDelete = async (id) => {
  try {
    const token = localStorage.getItem("token"); // login se saved token
    await axios.delete(`http://localhost:5000/api/foods/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`, // token attach
      },
    });
    setFoods(foods.filter((food) => food._id !== id)); // list update
  } catch (err) {
    console.error("Error deleting food:", err);
  }
};


  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Product List</h2>
      <ul className="space-y-4">
        {foods.map((food) => (
          <li
            key={food._id}
            className="p-4 bg-white rounded shadow flex justify-between items-center"
          >
            {/* Left: Image + details */}
            <div className="flex space-x-4">
              {food.image && (
                <img
                  src={`http://localhost:5000${food.image}`}
                  alt={food.name}
                  className="w-32 h-32 object-cover rounded"
                />
              )}
              <div>
                <h3 className="font-semibold text-lg">{food.name}</h3>
                <p>{food.description}</p>
                <p className="text-green-600 font-bold">₹{food.price}</p>
              </div>
            </div>

            {/* Right: Buttons */}
            <div className="flex flex-col space-y-2">
              <button
                onClick={() => setEditingFood(food)}
                className="bg-yellow-400 text-white px-4 py-1 rounded hover:bg-yellow-500"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(food._id)}
                className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>

      {/* Edit modal */}
      {editingFood && (
        <EditProduct
          food={editingFood}
          onClose={() => setEditingFood(null)}
          onUpdate={fetchFoods}
        />
      )}
    </div>
  );
}
