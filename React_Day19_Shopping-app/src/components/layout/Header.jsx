import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  ShoppingCart,
  Heart,
  Search,
  Menu,
  X,
  Phone,
  Globe,
  MapPin,
} from "lucide-react";
import CategoriesDropdown from "../CategoriesDropdown";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { cart, favorites } = useSelector((state) => state.products);

  const cartCount = cart.length;
  const favoritesCount = favorites.length;

  return (
    <header className="sticky top-0 z-50">
      {/* Top Promotion Bar */}
      <div className="bg-gradient-to-r from-emerald-700 to-emerald-600 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Phone size={16} />
              <span>+91</span>
            </div>
            <span className="hidden sm:inline">
              Get 50% Off on Selected Items
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <button className="hover:underline">Shop Now</button>
            <select className="bg-transparent text-white text-sm border border-white/30 rounded px-2 py-1 hover:border-white">
              <option>Eng</option>
              <option>Ar</option>
            </select>
            <select className="bg-transparent text-white text-sm border border-white/30 rounded px-2 py-1 hover:border-white">
              <option>Location</option>
              <option>Cairo</option>
              <option>Giza</option>
            </select>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white shadow-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between gap-4">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 shrink-0">
              <div className="flex items-center space-x-1">
                {/* <div className="w-8 h-8 bg-emerald-600 rounded flex items-center justify-center">
                  <span className="text-white font-bold text-lg">🛒</span>
                </div> */}
                <div className="text-xl font-bold text-emerald-700">
                  Shopziee
                </div>
              </div>
            </Link>

            {/* Desktop Navigation Menu */}
            <nav className="hidden lg:flex items-center space-x-8 flex-1 ml-8">
              <CategoriesDropdown />
              <Link
                to="/deals"
                className="text-gray-700 font-semibold hover:text-emerald-600"
              >
                Deals
              </Link>
              <Link
                to="/what-new"
                className="text-gray-700 font-semibold hover:text-emerald-600"
              >
                What's New
              </Link>
              <Link
                to="/delivery"
                className="text-gray-700 font-semibold hover:text-emerald-600"
              >
                Delivery
              </Link>
            </nav>

            {/* Search Bar - Hidden on small screens */}
            <div className="hidden md:flex flex-1 max-w-md">
              <div className="w-full relative">
                <input
                  type="text"
                  placeholder="Search Product"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-gray-700"
                />
                <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-emerald-600">
                  <Search size={20} />
                </button>
              </div>
            </div>

            {/* Right Icons */}
            <div className="flex items-center space-x-4 shrink-0">
              {/* Search Icon Mobile */}
              <button className="md:hidden text-gray-700 hover:text-emerald-600">
                <Search size={20} />
              </button>

              {/* Account */}
              <Link
                to="/account"
                className="hidden sm:flex items-center space-x-1 text-gray-700 hover:text-emerald-600 font-semibold"
              >
                <span>👤</span>
                <span className="hidden md:inline">Account</span>
              </Link>

              {/* Cart */}
              <Link
                to="/cart"
                className="relative flex items-center text-gray-700 hover:text-emerald-600 font-semibold"
              >
                <ShoppingCart size={20} />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-emerald-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                    {cartCount}
                  </span>
                )}
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden text-gray-700 hover:text-emerald-600"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Search */}
          <div className="md:hidden mt-3">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search Product"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-gray-700"
              />
              <Search
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <nav className="lg:hidden mt-4 pb-4 border-t border-gray-200 pt-4 space-y-3">
              <Link
                to="/categories"
                className="block text-gray-700 font-semibold hover:text-emerald-600 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Categories
              </Link>
              <Link
                to="/deals"
                className="block text-gray-700 font-semibold hover:text-emerald-600 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Deals
              </Link>
              <Link
                to="/what-new"
                className="block text-gray-700 font-semibold hover:text-emerald-600 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                What's New
              </Link>
              <Link
                to="/delivery"
                className="block text-gray-700 font-semibold hover:text-emerald-600 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Delivery
              </Link>
              <hr className="my-3" />
              <Link
                to="/account"
                className="flex items-center space-x-2 text-gray-700 hover:text-emerald-600 font-semibold py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <span>👤</span>
                <span>Account</span>
              </Link>
              <Link
                to="/favorites"
                className="flex items-center space-x-2 text-gray-700 hover:text-emerald-600 font-semibold py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <Heart size={20} />
                <span>Favorites ({favoritesCount})</span>
              </Link>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}
