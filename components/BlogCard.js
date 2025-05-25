import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const BlogCard = ({ title, date, author, image, excerpt }) => {
    return (_jsxs("div", { className: "mb-12 border-b pb-6", children: [_jsx("img", { src: image, alt: title, className: "w-full max-w-md mx-auto rounded shadow mb-4" }), _jsx("h2", { className: "text-xl font-semibold", children: title }), _jsxs("div", { className: "text-sm text-gray-500 mb-2", children: [author, " | ", date] }), _jsx("p", { className: "text-gray-700", children: excerpt }), _jsx("button", { className: "mt-4 text-blue-600 hover:underline", children: "Continue Reading \u2192" })] }));
};
export default BlogCard;
