import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import BlogCard from "../components/BlogCard";
import { blogData } from "../data/ProductHome";
const Blog = () => {
    return (_jsx("div", { className: "max-w-6xl mx-auto px-4 py-8", children: _jsxs("div", { className: "grid md:grid-cols-4 gap-8", children: [_jsx("div", { className: "md:col-span-3", children: blogData.map((item, index) => (_jsx(BlogCard, { ...item }, index))) }), _jsx("div", { className: "md:col-span-1", children: _jsxs("div", { className: "bg-white p-4 rounded-lg shadow-md", children: [_jsx("h2", { className: "text-xl font-semibold mb-4", children: "Recent Posts" }), _jsx("ul", { className: "space-y-4", children: blogData.slice(0, 5).map((item, index) => (_jsx("li", { children: _jsx("a", { href: `/blog/${item.slug}`, className: "text-blue-600 hover:underline", children: item.title }) }, index))) })] }) })] }) }));
};
export default Blog;
