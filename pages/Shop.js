'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import ProductCard from '@/components/ProductCard';
import ProductFilter from '@/components/ProductFilter';
import { products } from '@/data/Productprice';
export default function ShopPage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [sortOrder, setSortOrder] = useState('default');
    const filteredProducts = products
        .filter((product) => product.name.toLowerCase().includes(searchTerm.toLowerCase()))
        .sort((a, b) => {
        if (sortOrder === 'price_asc')
            return a.price - b.price;
        if (sortOrder === 'price_desc')
            return b.price - a.price;
        return 0;
    });
    return (_jsxs("div", { className: "container mx-auto px-4", children: [_jsx(ProductFilter, { searchTerm: searchTerm, onSearchChange: setSearchTerm, sortOrder: sortOrder, onSortChange: setSortOrder }), _jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6", children: filteredProducts.map((product) => (_jsx(ProductCard, { name: product.name, description: product.description, price: product.price, imageUrl: product.imageUrl, tokopediaUrl: product.tokopediaUrl, whatsappNumber: product.whatsappNumber }))) })] }));
}
