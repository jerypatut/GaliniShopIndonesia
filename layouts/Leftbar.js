import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const MainLayout = ({ children, sidebar }) => {
    return (_jsx("div", { className: "min-h-screen flex flex-col bg-gray-50", children: _jsxs("div", { className: "flex flex-1", children: [_jsx("main", { className: "flex-1 p-6 overflow-auto", children: children }), _jsx("aside", { className: "w-full md:w-80 bg-white border-t md:border-t-0 md:border-l border-gray-200 p-4 overflow-auto", children: sidebar })] }) }));
};
export default MainLayout;
