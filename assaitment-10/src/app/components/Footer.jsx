export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-10 pb-6 mt-10">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-extrabold text-indigo-400">MyShop</h2>
          <p className="mt-2 text-sm text-gray-400">
            Your trusted destination for quality products.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="/"
                className="hover:text-indigo-400 transition-colors"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/products"
                className="hover:text-indigo-400 transition-colors"
              >
                Products
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="hover:text-indigo-400 transition-colors"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:text-indigo-400 transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
          <div className="flex justify-center md:justify-start gap-4">
            <a
              href="#"
              className="hover:text-indigo-400 transition-colors"
            >
              Facebook
            </a>
            <a
              href="#"
              className="hover:text-indigo-400 transition-colors"
            >
              Twitter
            </a>
            <a
              href="#"
              className="hover:text-indigo-400 transition-colors"
            >
              GitHub
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
