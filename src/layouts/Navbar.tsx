import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Search, Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const topLinks = ["Wishlist", "About", "Contact", "FAQ"];
  const mainLinks = [
    { to: "/", label: "Home" },
    { to: "/blog", label: "Blog" },
    { to: "/shop", label: "Shop" },
    { to: "/payment-confirmation", label: "Konfirmasi Pembayaran" },
    { to: "/order-tracking", label: "Lacak Pesanan" },
    { to: "/myaccount", label: "MyAccount" },
  ];

  return (
    <div className="w-full z-50 fixed top-0">
      {/* Top bar */}
      <div className="bg-green-700 text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 flex justify-end space-x-6 py-2">
          {topLinks.map((label) => (
            <Link key={label} to="#" className="hover:underline">
              {label}
            </Link>
          ))}
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white border-b border-gray-200 shadow">
        <div className="max-w-7xl mx-auto px-4 h-16 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-green-700">
            GaliniShop Indonesia
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 font-medium text-gray-800">
            {mainLinks.map(({ to, label }) => (
              <Link key={to} to={to} className="hover:text-green-700 transition">
                {label}
              </Link>
            ))}
          </div>

          {/* Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/cart" aria-label="Cart" className="hover:text-green-700 transition">
              <ShoppingCart className="w-5 h-5" />
            </Link>
            <Link to="/search" aria-label="Search" className="hover:text-green-700 transition">
              <Search className="w-5 h-5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-green-700"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden px-4 pb-4 pt-2 space-y-3 border-t">
            {mainLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                onClick={() => setIsOpen(false)}
                className="block text-gray-800 hover:text-green-700"
              >
                {label}
              </Link>
            ))}
            <div className="flex space-x-4 pt-2 border-t mt-2">
              <Link to="/cart" aria-label="Cart" className="text-gray-700 hover:text-green-700">
                <ShoppingCart className="w-5 h-5" />
              </Link>
              <Link to="/search" aria-label="Search" className="text-gray-700 hover:text-green-700">
                <Search className="w-5 h-5" />
              </Link>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
