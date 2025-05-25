import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Search, Menu, X } from "lucide-react";
const Navbar = () => {
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
    return (_jsxs("div", { className: "w-full z-50 fixed top-0", children: [_jsx("div", { className: "bg-green-700 text-white text-sm", children: _jsx("div", { className: "max-w-7xl mx-auto px-4 flex justify-end space-x-6 py-2", children: topLinks.map((label) => (_jsx(Link, { to: "#", className: "hover:underline", children: label }, label))) }) }), _jsxs("nav", { className: "bg-white border-b border-gray-200 shadow", children: [_jsxs("div", { className: "max-w-7xl mx-auto px-4 h-16 flex justify-between items-center", children: [_jsx(Link, { to: "/", className: "text-2xl font-bold text-green-700", children: "GaliniShop Indonesia" }), _jsx("div", { className: "hidden md:flex space-x-6 font-medium text-gray-800", children: mainLinks.map(({ to, label }) => (_jsx(Link, { to: to, className: "hover:text-green-700 transition", children: label }, to))) }), _jsxs("div", { className: "hidden md:flex items-center space-x-4", children: [_jsx(Link, { to: "/cart", "aria-label": "Cart", className: "hover:text-green-700 transition", children: _jsx(ShoppingCart, { className: "w-5 h-5" }) }), _jsx(Link, { to: "/search", "aria-label": "Search", className: "hover:text-green-700 transition", children: _jsx(Search, { className: "w-5 h-5" }) })] }), _jsx("button", { onClick: () => setIsOpen(!isOpen), className: "md:hidden p-2 text-gray-700 hover:text-green-700", children: isOpen ? _jsx(X, { className: "w-6 h-6" }) : _jsx(Menu, { className: "w-6 h-6" }) })] }), isOpen && (_jsxs("div", { className: "md:hidden px-4 pb-4 pt-2 space-y-3 border-t", children: [mainLinks.map(({ to, label }) => (_jsx(Link, { to: to, onClick: () => setIsOpen(false), className: "block text-gray-800 hover:text-green-700", children: label }, to))), _jsxs("div", { className: "flex space-x-4 pt-2 border-t mt-2", children: [_jsx(Link, { to: "/cart", "aria-label": "Cart", className: "text-gray-700 hover:text-green-700", children: _jsx(ShoppingCart, { className: "w-5 h-5" }) }), _jsx(Link, { to: "/search", "aria-label": "Search", className: "text-gray-700 hover:text-green-700", children: _jsx(Search, { className: "w-5 h-5" }) })] })] }))] })] }));
};
export default Navbar;
