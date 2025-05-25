import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { FaShoppingCart, FaShoppingBag } from "react-icons/fa";
import img1 from "../assets/images/images6.jpg";
import img2 from "../assets/images/images2.jpg";
import img3 from "../assets/images/images3.jpg";
import img4 from "../assets/images/images4.jpg";
import img5 from "../assets/images/images5.jpg";
import img6 from "../assets/images/images3.jpg";
import img7 from "../assets/images/images4.jpg";
import img8 from "../assets/images/images3.jpg";
import img9 from "../assets/images/images4.jpg";
const HomePage = () => {
    return (_jsx(_Fragment, { children: _jsxs("div", { className: "p-6 space-y-12 max-w-screen-xl mx-auto", children: [_jsxs("section", { className: "bg-green-50 p-6 sm:p-12 rounded-xl shadow-md", children: [_jsxs("div", { className: "flex flex-col items-center text-center space-y-4 sm:hidden", children: [_jsx("h1", { className: "text-3xl sm:text-4xl font-bold text-green-600", children: "Pt. GaliniShop Indonesia" }), _jsx("p", { className: "text-sm text-gray-700 font-medium px-2", children: "Jangan lewatkan kesempatan untuk menemukan pusat laptop dengan harga termurah di seluruh Indonesia, hanya di gsi!" }), _jsxs("div", { className: "w-full space-y-2", children: [_jsxs("button", { className: "bg-green-500 text-white py-2 rounded-lg text-lg font-semibold flex items-center justify-center w-full", children: [_jsx(FaShoppingCart, { className: "mr-2" }), " Belanja"] }), _jsx("button", { className: "border border-green-500 text-green-700 py-2 rounded-lg text-lg font-semibold w-full", children: "Lihat Lainnya" })] }), _jsx("img", { src: img1, alt: "Hero Product", className: "w-full max-h-[300px] object-contain mx-auto rounded-xl" })] }), _jsxs("div", { className: "hidden sm:flex items-center justify-between space-x-6", children: [_jsxs("div", { className: "flex-1 space-y-4", children: [_jsx("h1", { className: "text-4xl font-bold text-green-600", children: "Pt.GaliniShop Indonesia" }), _jsx("p", { className: "text-base text-gray-700 font-medium", children: "Jangan lewatkan kesempatan untuk menemukan pusat laptop dengan harga termurah di seluruh Indonesia, hanya di GSI!" }), _jsxs("div", { className: "space-x-4 mt-4", children: [_jsxs("button", { className: "bg-green-500 text-white py-2 px-6 rounded-lg text-lg font-semibold inline-flex items-center", children: [_jsx(FaShoppingCart, { className: "mr-2" }), " Belanja"] }), _jsx("button", { className: "border border-green-500 text-green-700 py-2 px-6 rounded-lg text-lg font-semibold", children: "Lihat Lainnya" })] })] }), _jsx("div", { className: "flex-1", children: _jsx("img", { src: img1, alt: "Hero Product", className: "w-full max-h-[300px] object-contain mx-auto rounded-xl" }) })] })] }), _jsxs("section", { className: "space-y-8", children: [_jsx("h2", { className: "text-2xl font-bold text-green-600 text-center", children: "Produk Pilihan" }), _jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8", children: [
                                { img: img7, name: "Produk 1" },
                                { img: img2, name: "Produk 2" },
                                { img: img3, name: "Produk 3" },
                                { img: img4, name: "Produk 4" },
                                { img: img5, name: "Produk 5" },
                                { img: img6, name: "Produk 6" },
                                { img: img7, name: "Produk 7" },
                                { img: img8, name: "Produk 8" },
                                { img: img9, name: "Produk 9" },
                            ].map((product, idx) => (_jsxs("div", { className: "bg-white shadow-lg rounded-xl overflow-hidden flex flex-col", children: [_jsx("div", { className: "w-full h-48 flex-shrink-0 overflow-hidden", children: _jsx("img", { src: product.img, alt: product.name, className: "w-full h-full object-contain mx-auto" }) }), _jsxs("div", { className: "p-4 flex flex-col flex-grow justify-between space-y-4", children: [_jsx("h3", { className: "text-xl font-semibold", children: product.name }), _jsxs("p", { className: "text-gray-600 flex-grow", children: ["Deskripsi ", product.name.toLowerCase(), " yang menarik dan detail."] }), _jsxs("div", { className: "flex flex-col space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0", children: [_jsxs("button", { className: "flex items-center justify-center bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 w-full", children: [_jsx(FaShoppingBag, { className: "mr-2" }), " Masukkan Keranjang"] }), _jsxs("button", { className: "flex items-center justify-center bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 w-full", children: [_jsx(FaShoppingCart, { className: "mr-2" }), " Beli"] })] })] })] }, idx))) })] })] }) }));
};
export default HomePage;
