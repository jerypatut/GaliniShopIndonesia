import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { AuthProvider } from "./contexts/AuthContext";
import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";
import HomePage from "./pages/Home";
import MyAccount from "./pages/MyAccount";
import Blog from "./pages/Blog"; // Pastikan import Blog sesuai dengan path yang benar
import { Routes, Route } from "react-router-dom"; // Pastikan juga Route di-import
import Shop from './pages/Shop';
const App = () => {
    return (_jsxs(AuthProvider, { children: [_jsx("div", { className: "bg-blue-500 text-white p-4 text-xl", children: "Tailwind Test" }), _jsxs("div", { className: "bg-gray-50 min-h-screen flex flex-col", children: [_jsx(Navbar, {}), _jsx("div", { className: "flex-grow", children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(HomePage, {}) }), _jsx(Route, { path: "/blog", element: _jsx(Blog, {}) }), _jsx(Route, { path: "/shop", element: _jsx(Shop, {}) }), _jsx(Route, { path: "/myaccount", element: _jsx(MyAccount, {}) })] }) }), _jsx(Footer, {})] })] }));
};
export default App;
