import { jsx as _jsx } from "react/jsx-runtime";
import React, { useState, cloneElement } from 'react';
export function Select({ onValueChange, children }) {
    const [open, setOpen] = useState(false);
    const childrenWithProps = React.Children.map(children, (child) => {
        if (!React.isValidElement(child))
            return child;
        const childElement = child;
        if (childElement.type === SelectTrigger) {
            // Sekarang TypeScript tahu props ada onClick & children
            return cloneElement(childElement, {
                onClick: () => setOpen(!open),
                children: childElement.props.children,
            });
        }
        if (childElement.type === SelectContent) {
            if (!open)
                return null;
            // Isi SelectContent biasanya SelectItem
            const itemsWithOnSelect = React.Children.map(childElement.props.children, (item) => {
                if (!React.isValidElement(item))
                    return item;
                const itemElement = item;
                if (itemElement.type === SelectItem) {
                    return cloneElement(itemElement, {
                        onSelect: (val) => {
                            onValueChange(val);
                            setOpen(false);
                        },
                    });
                }
                return item;
            });
            return cloneElement(childElement, {}, itemsWithOnSelect);
        }
        return child;
    });
    return _jsx("div", { className: "relative inline-block w-full", children: childrenWithProps });
}
export function SelectTrigger({ className = '', children, onClick }) {
    return (_jsx("button", { type: "button", className: `w-full border rounded px-3 py-2 text-left ${className}`, onClick: onClick, children: children }));
}
export function SelectContent({ children }) {
    return (_jsx("div", { className: "absolute z-10 mt-1 w-full bg-white border rounded shadow-md", children: children }));
}
export function SelectItem({ value, children, onSelect }) {
    return (_jsx("div", { className: "cursor-pointer px-4 py-2 hover:bg-gray-100", onClick: () => onSelect?.(value), role: "option", tabIndex: 0, onKeyDown: (e) => {
            if (e.key === 'Enter' || e.key === ' ')
                onSelect?.(value);
        }, children: children }));
}
export function SelectValue({ placeholder, value }) {
    return (_jsx("span", { className: `block ${value ? 'text-black' : 'text-gray-500'}`, children: value || placeholder }));
}
