import React, { useState } from "react";
import AddProduct from "./AddProduct";
import ProductList from "./ProductList";
import Orders from "./Orders"; // ✅ Import Orders component

export default function AdminDashboard({ onLogout }) {
  const [activeTab, setActiveTab] = useState("products"); // default page

  return (
    <div className="h-screen w-screen bg-gray-100 flex flex-col">
      {/* Navbar */}
      <nav className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center shadow">
        <h1 className="text-xl font-bold">Admin Dashboard</h1>
        <div className="space-x-6">
          <button
            onClick={() => setActiveTab("products")}
            className={`hover:underline ${activeTab === "products" ? "font-bold underline" : ""}`}
          >
            Products
          </button>
          <button
            onClick={() => setActiveTab("add")}
            className={`hover:underline ${activeTab === "add" ? "font-bold underline" : ""}`}
          >
            Add Product
          </button>
          <button
            onClick={() => setActiveTab("orders")} // Orders tab
            className={`hover:underline ${activeTab === "orders" ? "font-bold underline" : ""}`}
          >
            Orders
          </button>
          <button
            onClick={onLogout}
            className="bg-red-500 px-4 py-1 rounded hover:bg-red-600 transition"
          >
            Logout
          </button>
        </div>
      </nav>

      {/* Page Content */}
      <main className="flex-1 p-6 overflow-y-auto">
        {activeTab === "products" && <ProductList />}
        {activeTab === "add" && <AddProduct />}
        {activeTab === "orders" && (
          <Orders
            isAdmin={true}
            onCloseAdmin={() => setActiveTab("products")} // ✅ Close Orders tab
          />
        )}
      </main>
    </div>
  );
}
