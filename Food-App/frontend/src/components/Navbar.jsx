import React, { useContext } from "react";
import { ShoppingCart } from "lucide-react";
import { CartContext } from "../context/cartcontext";
import logo from "../assets/logo.jpg";

function Navbar({ toggleAdmin, openCart, openOrders }) { // ✅ added openOrders
  const { cart } = useContext(CartContext);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-0">
        
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img src={logo} className="h-24" alt="Food App Logo" />
        </div>

        {/* Menu */}
        <div className="w-full md:w-auto">
          <ul className="font-medium flex flex-col md:flex-row md:items-center md:space-x-8 p-4 md:p-0 mt-4 md:mt-0">
            <li>
              <button onClick={() => window.location.href="/"} className="py-2 px-3 hover:text-orange-500">Home</button>
            </li>
            <li>
              <button onClick={openOrders} className="py-2 px-3 hover:text-orange-500">Orders</button>
            </li>
            <li>
              <button onClick={toggleAdmin} className="py-2 px-3 hover:text-orange-500">Admin-Login</button>
            </li>
            <li className="relative">
              <button
                onClick={openCart}
                className="py-2 px-3 hover:text-orange-500 flex items-center"
              >
                <ShoppingCart size={22} />
                {cart.length > 0 && (
                  <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs font-bold rounded-full px-1">
                    {cart.length}
                  </span>
                )}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
