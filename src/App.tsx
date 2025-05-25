import React from "react";
import { AuthProvider } from "./contexts/AuthContext";
import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";
import HomePage from "./pages/Home";
import MyAccount from "./pages/MyAccount";
import Blog from "./pages/Blog"; // Pastikan import Blog sesuai dengan path yang benar
import { Routes, Route } from "react-router-dom"; // Pastikan juga Route di-import
import Shop from './pages/Shop';

const App: React.FC = () => {
  return (
    <AuthProvider>
      {/* Test Tailwind section */}
      <div className="bg-blue-500 text-white p-4 text-xl">
        Tailwind Test
      </div>

      {/* Layout wrapper */}
      <div className="bg-gray-50 min-h-screen flex flex-col">
        {/* Navbar */}
        <Navbar />

        {/* Routing */}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blog" element={<Blog/>} />
               <Route path="/shop" element={<Shop/>} />
            <Route path="/myaccount" element={<MyAccount />} />
            {/* Tambahkan route lain di sini kalau ada */}
          </Routes>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </AuthProvider>
  );
};

export default App;
