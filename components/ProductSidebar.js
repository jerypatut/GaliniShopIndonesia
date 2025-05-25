import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { products } from "../data/Product";
import { useState } from "react";
const ProductSidebar = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);
    return (_jsxs("div", { children: [_jsx("h2", { className: "text-xl font-bold mb-4", children: "Produk" }), _jsx("ul", { children: products.map((product) => (_jsx("li", { className: `mb-2 p-2 rounded cursor-pointer hover:bg-gray-100 ${selectedProduct?.id === product.id ? "bg-blue-100" : ""}`, onClick: () => setSelectedProduct(product), children: _jsx("img", { src: product.image, alt: product.name, className: "w-full h-auto" }) }, product.id))) }), selectedProduct && (_jsxs("div", { className: "mt-6 p-4 border rounded bg-white shadow", children: [_jsx("h3", { className: "text-lg font-semibold mb-2", children: selectedProduct.name }), _jsx("img", { src: selectedProduct.image, alt: selectedProduct.name, className: "w-full h-auto mb-2" }), _jsx("p", { children: selectedProduct.description })] }))] }));
};
export default ProductSidebar;
