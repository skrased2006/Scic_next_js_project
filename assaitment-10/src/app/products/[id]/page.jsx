"use client";

import { use, useEffect, useState } from "react";
import Link from "next/link";

export default function ProductDetailsPage({ params }) {
  const { id } =use (params);

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://server-black-gamma-21.vercel.app/products/${id}`);
        if (!res.ok) throw new Error("Failed to fetch product");
        const data = await res.json();
        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

 if (loading) {
    return (
      <div className="max-w-6xl mx-auto py-16 px-6 animate-pulse">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2 bg-gray-300 h-96 rounded-lg"></div>
          <div className="md:w-1/2 flex flex-col gap-4">
            <div className="h-8 bg-gray-300 rounded w-3/4"></div>
            <div className="h-4 bg-gray-300 rounded w-full"></div>
            <div className="h-4 bg-gray-300 rounded w-full"></div>
            <div className="h-6 bg-gray-300 rounded w-1/2 mt-4"></div>
            <div className="h-10 bg-gray-300 rounded w-1/2 mt-6"></div>
          </div>
        </div>
      </div>
    );
  }
  if (error || !product)
    return (
      <div className="text-center py-20">
        <h1 className="text-3xl font-bold">Product Not Found</h1>
        <Link
          href="/products"
          className="mt-4 inline-block text-blue-600 hover:underline"
        >
          Back to Products
        </Link>
      </div>
    );

  return (
    <div className="max-w-6xl mx-auto py-16 px-6">
      <div className="flex flex-col md:flex-row gap-12">
        {/* Image Section */}
        {product.image && (
          <div className="md:w-1/2">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-96 object-cover rounded-lg shadow-md"
            />
          </div>
        )}

        {/* Details Section */}
        <div className="md:w-1/2 flex flex-col justify-between">
          <div>
            <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
            <p className="text-lg text-gray-700 mb-4">{product.description}</p>
            <p className="text-xl font-semibold mb-2">Price: ${product.price}</p>
            <p className="text-lg mb-2">Category: {product.category}</p>
            <p className="text-lg mb-6">Stock: {product.stock}</p>
          </div>

          <Link
            href="/products"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 font-medium text-center transition-colors duration-300"
          >
            Back to Products
          </Link>
        </div>
      </div>
    </div>
  );
}
