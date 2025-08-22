"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("http://localhost:5000/products");
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error("Fetch failed:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  // Get unique categories
  const categories = ["All", ...new Set(products.map((p) => p.category))];

  // Filter products based on selected category
  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  if (loading)
    return (
      <p className="text-center py-20 text-gray-500 text-lg animate-pulse">
        Loading products...
      </p>
    );

  return (
    <div className="max-w-10/12 mx-auto py-16 px-6">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-900">
        Our Products
      </h1>

      {/* Category Filter */}
      <div className="flex justify-center mb-12">
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {filteredProducts.map((product) => (
          <div
            key={product._id}
            className="border rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            {/* Product Image */}
            {product.image && (
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-56 object-cover rounded-t-xl transition-transform duration-300 hover:scale-105"
              />
            )}

            <div className="p-6 text-center">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                {product.name}
              </h2>
              {/* Price */}
              <p className="text-blue-600 font-bold text-lg mb-4">
                ${product.price}
              </p>
              <Link
                href={`/products/${product._id}`}
                className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 font-medium transition-colors duration-300"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
