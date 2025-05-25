import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// components/ProductFilter.tsx
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, } from '@/components/ui/select';
export default function ProductFilter({ searchTerm, onSearchChange, sortOrder, onSortChange, }) {
    return (_jsxs("div", { className: "container mx-auto px-4 mt-24", children: [_jsxs("div", { className: "mb-12", children: [_jsx("h1", { className: "text-3xl font-semibold mb-2", children: "Shop" }), _jsx("p", { className: "text-muted-foreground", children: "Ini adalah tempat Anda bisa menjelajahi produk toko." })] }), _jsxs("div", { className: "flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6", children: [_jsx(Input, { placeholder: "Cari produk...", value: searchTerm, onChange: (e) => onSearchChange(e.target.value), className: "md:w-1/3" }), _jsxs(Select, { value: sortOrder, onValueChange: onSortChange, children: [_jsx(SelectTrigger, { className: "md:w-1/4", children: _jsx(SelectValue, { placeholder: "Pengurutan standar" }) }), _jsxs(SelectContent, { children: [_jsx(SelectItem, { value: "default", children: "Pengurutan standar" }), _jsx(SelectItem, { value: "price_asc", children: "Harga naik" }), _jsx(SelectItem, { value: "price_desc", children: "Harga turun" })] })] })] })] }));
}
