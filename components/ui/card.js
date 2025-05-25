import { jsx as _jsx } from "react/jsx-runtime";
export function Card({ children, className = '', ...rest }) {
    return (_jsx("div", { className: `bg-white rounded-lg border border-gray-200 shadow-sm ${className}`, ...rest, children: children }));
}
export function CardContent({ children, className = '', ...rest }) {
    return (_jsx("div", { className: `p-4 ${className}`, ...rest, children: children }));
}
