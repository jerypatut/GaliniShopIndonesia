import type { Product } from "../data/Product";
import { products } from "../data/Product";
import React, { useState } from "react";

const ProductSidebar: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Produk</h2>
      <ul>
        {products.map((product) => (
          <li
            key={product.id}
            className={`mb-2 p-2 rounded cursor-pointer hover:bg-gray-100 ${
              selectedProduct?.id === product.id ? "bg-blue-100" : ""
            }`}
            onClick={() => setSelectedProduct(product)}
          >
            <img src={product.image} alt={product.name} className="w-full h-auto" />
          </li>
        ))}
      </ul>

      {selectedProduct && (
        <div className="mt-6 p-4 border rounded bg-white shadow">
          <h3 className="text-lg font-semibold mb-2">{selectedProduct.name}</h3>
          <img
            src={selectedProduct.image}
            alt={selectedProduct.name}
            className="w-full h-auto mb-2"
          />
          <p>{selectedProduct.description}</p>
        </div>
      )}
    </div>
  );
};

export default ProductSidebar;
