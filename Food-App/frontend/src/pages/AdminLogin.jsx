import React, { useState } from "react";
import axios from "axios";

export default function AdminLogin({ onClose, onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/admin/login", {
        username,
        password,
      });

      // Agar backend successful, token milega
      const { token } = res.data;
      localStorage.setItem("token", token); // JWT store

      alert("Login successful!");
      if (onLogin) onLogin(); // open admin dashboard
      if (onClose) onClose(); // close modal
    } catch (err) {
      console.error(err);
      alert("Invalid credentials!"); // agar backend 401 return kare
    }
  };

  return (
    <div className="flex justify-center items-center">
      <form
        onSubmit={handleLogin}
        className="bg-white shadow-lg rounded-lg p-6 w-96 relative"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-2 right-2 text-red-500 font-bold"
        >
          X
        </button>
        <h2 className="text-2xl font-bold mb-4 text-center">Admin Login</h2>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full border px-3 py-2 mb-3 rounded"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border px-3 py-2 mb-3 rounded"
        />

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Login
        </button>
      </form>
    </div>
  );
}
