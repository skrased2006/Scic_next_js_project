"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function RecentProduct() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://server-black-gamma-21.vercel.app/recentProduct");
        const data = await res.json();
        // latest first
        const sorted = data.sort(
          (a, b) => new Date(b.createdAt || b._id) - new Date(a.createdAt || a._id)
        );
        setProducts(sorted);
      } catch (err) {
        console.error("Failed to fetch products:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading)
    return (
      <p className="text-center py-32 text-gray-500 text-lg animate-pulse">
        Loading recent products...
      </p>
    );

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <h2 className="text-5xl font-bold mb-16 text-center text-gray-900">
        Recent Products
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10">
        {products.slice(0, 9).map((product) => (
          <div
            key={product._id}
            className="border rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white"
          >
            <div className="relative group">
              {product.image && (
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105"
                />
              )}
              {/* Price Badge */}
              <div className="absolute top-4 right-4 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-md">
                ${product.price}
              </div>
            </div>

            <div className="p-8 text-center">
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">
                {product.name}
              </h3>
              <Link
                href={`/products/${product._id}`}
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 font-medium transition-colors duration-300"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
