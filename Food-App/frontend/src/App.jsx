import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Orders from "./pages/Orders";
import HeroSection from "./components/heroSection";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import Footer from "./pages/Footer";
import Cart from "./pages/Cart";
import { CartProvider } from "./context/CartContext";

function App() {
  const [showAdminLogin, setShowAdminLogin] = useState(false);
  const [isAdmin, setIsAdmin] = useState(localStorage.getItem("isAdmin") === "true");

  const [showCart, setShowCart] = useState(false);
  const [showOrders, setShowOrders] = useState(false); // ✅ Orders modal state

  const handleLogout = () => {
    setIsAdmin(false);
    localStorage.removeItem("isAdmin");
  };

  if (isAdmin) {
    return (
      <BrowserRouter>
        <AdminDashboard onLogout={handleLogout} />
      </BrowserRouter>
    );
  }

  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar 
          toggleAdmin={() => setShowAdminLogin(true)} 
          openCart={() => setShowCart(true)}
          openOrders={() => setShowOrders(true)} // ✅ pass to Navbar
        />
        <HeroSection />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>

        <Cart isOpen={showCart} onClose={() => setShowCart(false)} />

        {showOrders && (
          <div className="fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-50 backdrop-blur-sm">
            <Orders isAdmin={false} isOpen={showOrders} onClose={() => setShowOrders(false)} />
          </div>
        )}

        {showAdminLogin && !isAdmin && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <AdminLogin
              onClose={() => setShowAdminLogin(false)}
              onLogin={() => {
                setIsAdmin(true);
                setShowAdminLogin(false);
                localStorage.setItem("isAdmin", "true");
              }}
            />
          </div>
        )}

        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
