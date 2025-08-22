"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const { data: session } = useSession();
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/products", label: "Products" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-gray-900 text-white shadow-md">
      <div className="max-w-10/12 mx-auto flex justify-between items-center px-8 py-4">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-extrabold tracking-wide text-indigo-400 hover:text-indigo-300 transition-colors"
        >
          MyShop
        </Link>

        {/* Links */}
        <div className="flex gap-8 items-center">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative font-medium hover:text-indigo-400 transition-colors
                ${pathname === link.href ? "text-indigo-400" : "text-gray-300"}
              `}
            >
              {link.label}
            </Link>
          ))}

          {session ? (
            <>
              <Link
                href="/dashboard/add-product"
                className={`font-medium hover:text-indigo-400 transition-colors ${
                  pathname.startsWith("/dashboard")
                    ? "text-indigo-400"
                    : "text-gray-300"
                }`}
              >
                Dashboard
              </Link>
              <button
                onClick={() => signOut()}
                className="bg-red-500 hover:bg-red-600 px-4 py-1.5 rounded-lg font-medium transition-colors"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              href="/login"
              className="bg-indigo-500 hover:bg-indigo-600 px-4 py-1.5 rounded-lg font-medium transition-colors"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
