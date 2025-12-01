export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-emerald-500/20 text-slate-400 mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Shopziee</h3>
            <p className="text-sm">
              Your one-stop shop for quality products at great prices.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="hover:text-emerald-400 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-emerald-400 transition">
                  Products
                </a>
              </li>
              <li>
                <a href="/cart" className="hover:text-emerald-400 transition">
                  Cart
                </a>
              </li>
              <li>
                <a
                  href="/favorites"
                  className="hover:text-emerald-400 transition"
                >
                  Favorites
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-emerald-400 transition">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-400 transition">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-400 transition">
                  Shipping Info
                </a>
              </li>
              {/* \n{" "} */}
              <li>
                <a href="#" className="hover:text-emerald-400 transition">
                  Returns
                </a>
              </li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Info</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-emerald-400 transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-400 transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-400 transition">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-400 transition">
                  Blog
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-emerald-500/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">&copy; 2024 Shopziee. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0 text-sm">
              <a href="#" className="hover:text-emerald-400 transition">
                Facebook
              </a>
              <a href="#" className="hover:text-emerald-400 transition">
                Twitter
              </a>
              <a href="#" className="hover:text-emerald-400 transition">
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
