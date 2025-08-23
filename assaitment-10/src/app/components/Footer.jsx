import { FaFacebookF, FaTwitter, FaGithub, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-10 pb-6 mt-10">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-extrabold text-indigo-400 flex items-center gap-2">
            <FaGithub className="text-white" /> MyShop
          </h2>
          <p className="mt-2 text-sm text-gray-400">
            Your trusted destination for quality products.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:text-indigo-400 transition-colors flex items-center gap-2">
                🏠 Home
              </a>
            </li>
            <li>
              <a href="/products" className="hover:text-indigo-400 transition-colors flex items-center gap-2">
                🛒 Products
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-indigo-400 transition-colors flex items-center gap-2">
                ℹ️ About
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-indigo-400 transition-colors flex items-center gap-2">
                ✉️ Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
          <div className="flex justify-center md:justify-start gap-4 text-xl">
            <a href="#" className="hover:text-indigo-400 transition-colors">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-indigo-400 transition-colors">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-indigo-400 transition-colors">
              <FaGithub />
            </a>
            <a href="#" className="hover:text-indigo-400 transition-colors">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-500">
        © 2025 MyShop. All rights reserved.
      </div>
    </footer>
  );
}
