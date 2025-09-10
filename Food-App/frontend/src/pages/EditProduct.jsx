import React, { useState } from "react";
import axios from "axios";

export default function EditProduct({ food, onClose, onUpdate }) {
    const [name, setName] = useState(food.name);
    const [price, setPrice] = useState(food.price);
    const [description, setDescription] = useState(food.description);
    const [image, setImage] = useState(null); // new image file

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("name", name);
        formData.append("price", price);
        formData.append("description", description);
        if (image) formData.append("image", image);

        try {
            // 🔹 Move token inside the function to get fresh value
            const token = localStorage.getItem("token");

            await axios.put(
                `http://localhost:5000/api/foods/${food._id}`,
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                        Authorization: `Bearer ${token}` // ✅ latest token
                    },
                }
            );
            onUpdate(); // refresh product list
            onClose();  // close modal
        } catch (err) {
            console.error("Error updating food:", err);
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg w-96 relative">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-red-500 font-bold"
                >
                    X
                </button>
                <h2 className="text-xl font-bold mb-4">Edit Product</h2>
                <form onSubmit={handleSubmit} className="flex flex-col space-y-3">
                    <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="border p-2 rounded"
                    />
                    <input
                        type="number"
                        placeholder="Price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        className="border p-2 rounded"
                    />
                    <textarea
                        placeholder="Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="border p-2 rounded"
                    />
                    <input
                        type="file"
                        onChange={(e) => setImage(e.target.files[0])}
                        className="border p-2 rounded"
                    />
                    <button
                        type="submit"
                        className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
                    >
                        Update
                    </button>
                </form>
            </div>
        </div>
    );
}
