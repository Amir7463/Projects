import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-600 text-white mt-10">
      <div className="max-w-screen-xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* About Section */}
        <div>
          <h3 className="text-xl font-bold mb-2">Foodie's Heaven</h3>
          <p className="text-gray-400">
            Delicious food delivered to your doorstep. Fresh ingredients, 
            quality meals, and happy customers.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-2">Quick Links</h3>
          <ul className="text-gray-400 space-y-1">
            <li><a href="/" className="hover:text-orange-400">Home</a></li>
            <li><a href="/orders" className="hover:text-orange-400">Orders</a></li>
            <li><a href="/admin" className="hover:text-orange-400">Admin</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-bold mb-2">Contact Us</h3>
          <p className="text-gray-400">📞 +91 9876543210</p>
          <p className="text-gray-400">📧 info@foodiesheaven.com</p>
          <p className="text-gray-400">📍 123 Food Street, City, India</p>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-900 text-orange-400 text-center py-3 mt-6">
        &copy; {new Date().getFullYear()} Foodie's Heaven. All rights reserved.
      </div>
    </footer>
  );
}
