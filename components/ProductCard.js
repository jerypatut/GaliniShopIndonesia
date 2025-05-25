import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function ProductCard({ name, description, price, imageUrl, tokopediaUrl, whatsappNumber, className = '', }) {
    const handleImageError = (e) => {
        e.currentTarget.src = '/fallback.png';
    };
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Halo, saya ingin memesan produk *${name}* seharga Rp${price.toLocaleString('id-ID')}.`)}`;
    return (_jsx("div", { className: `shadow-md rounded-md border ${className}`, children: _jsxs("div", { className: "p-4", children: [_jsx("img", { src: imageUrl, alt: name, className: "w-full h-48 object-cover mb-4", onError: handleImageError }), _jsx("h2", { className: "text-lg font-semibold", children: name }), _jsx("p", { className: "text-sm text-gray-600", children: description }), _jsxs("p", { className: "text-green-600 font-bold mt-2", children: ["Rp", price.toLocaleString('id-ID')] }), _jsxs("div", { className: "mt-4 flex gap-3", children: [_jsx("a", { href: tokopediaUrl, target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center px-3 py-1 rounded bg-green-600 text-white hover:bg-green-700 transition", children: "Checkout Tokopedia" }), _jsx("a", { href: whatsappLink, target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center px-3 py-1 rounded bg-green-500 text-white hover:bg-green-600 transition", children: "Checkout WhatsApp" })] })] }) }));
}
