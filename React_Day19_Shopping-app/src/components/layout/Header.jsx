import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import {
  ShoppingCart,
  Heart,
  Search,
  Menu,
  X,
  MessageCircle,
  Globe,
  MapPin,
} from "lucide-react";
import CategoriesDropdown from "../CategoriesDropdown";
import { setLanguage, setLocation } from "../../store/slices/languageSlice";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const { cart, favorites } = useSelector((state) => state.products);
  const { language, location } = useSelector((state) => state.language);

  const cartCount = cart.length;
  const favoritesCount = favorites.length;

  const handleLanguageChange = (e) => {
    const lang = e.target.value;
    dispatch(setLanguage(lang));
    i18n.changeLanguage(lang);
  };

  const handleLocationChange = (e) => {
    dispatch(setLocation(e.target.value));
  };

  const whatsappNumber = "918056411040";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  const locationOptions = [
    { code: "india", label: t("locations.india") },
    { code: "pakistan", label: t("locations.pakistan") },
    { code: "qatar", label: t("locations.qatar") },
    { code: "dubai", label: t("locations.dubai") },
    { code: "nigeria", label: t("locations.nigeria") },
    { code: "unitedStates", label: t("locations.unitedStates") },
  ];

  const languageOptions = [
    { code: "en", label: t("languages.english") },
    { code: "ta", label: t("languages.tamil") },
    { code: "ar", label: t("languages.arabic") },
    { code: "hi", label: t("languages.hindi") },
  ];

  return (
    <header className="sticky top-0 z-50">
      {/* Top Promotion Bar */}
      <div className="bg-gradient-to-r from-emerald-700 to-emerald-600 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-sm">
          <div className="flex items-center space-x-2 sm:space-x-4">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 hover:opacity-80 transition-opacity"
            >
              <MessageCircle size={16} />
              <span className="text-xs sm:text-sm">
                {t("header.connectWhatsApp")}
              </span>
            </a>
            <span className="hidden sm:inline text-xs md:text-sm">
              {t("header.promotion")}
            </span>
          </div>
          <div className="flex items-center space-x-2 sm:space-x-4">
            <button className="hidden sm:block hover:underline text-xs sm:text-sm">
              {t("header.shopNow")}
            </button>
            <select
              value={language}
              onChange={handleLanguageChange}
              className="bg-transparent text-white text-xs sm:text-sm border border-white/30 rounded px-1 sm:px-2 py-1 hover:border-white cursor-pointer"
            >
              {languageOptions.map((lang) => (
                <option
                  key={lang.code}
                  value={lang.code}
                  className="text-black"
                >
                  {lang.label}
                </option>
              ))}
            </select>
            <select
              value={location}
              onChange={handleLocationChange}
              className="bg-transparent text-white text-xs sm:text-sm border border-white/30 rounded px-1 sm:px-2 py-1 hover:border-white cursor-pointer"
            >
              <option value="" className="text-black">
                {t("locations.selectLocation")}
              </option>
              {locationOptions.map((loc) => (
                <option key={loc.code} value={loc.code} className="text-black">
                  {loc.label}
                </option>
              ))}
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
                {t("header.deals")}
              </Link>
              <Link
                to="/what-new"
                className="text-gray-700 font-semibold hover:text-emerald-600"
              >
                {t("header.whatsNew")}
              </Link>
              <Link
                to="/delivery"
                className="text-gray-700 font-semibold hover:text-emerald-600"
              >
                {t("header.delivery")}
              </Link>
            </nav>

            {/* Search Bar - Hidden on small screens */}
            <div className="hidden md:flex flex-1 max-w-md">
              <div className="w-full relative">
                <input
                  type="text"
                  placeholder={t("header.searchPlaceholder")}
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
                <span className="hidden md:inline">{t("header.account")}</span>
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
                placeholder={t("header.searchPlaceholder")}
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

          {/* Mobile Sidebar Menu */}
          {isMenuOpen && (
            <>
              {/* Backdrop */}
              <div
                className="fixed inset-0 bg-black/50 z-30 lg:hidden"
                onClick={() => setIsMenuOpen(false)}
              ></div>

              {/* Sidebar */}
              <nav className="fixed left-0 top-[120px] h-[calc(100vh-120px)] w-64 bg-white shadow-xl z-40 lg:hidden overflow-y-auto animate-in slide-in-from-left-0 duration-300">
                <div className="p-4 space-y-3">
                  <Link
                    to="/categories"
                    className="block text-gray-700 font-semibold hover:text-emerald-600 py-2 px-3 hover:bg-emerald-50 rounded transition"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t("header.categories")}
                  </Link>
                  <Link
                    to="/deals"
                    className="block text-gray-700 font-semibold hover:text-emerald-600 py-2 px-3 hover:bg-emerald-50 rounded transition"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t("header.deals")}
                  </Link>
                  <Link
                    to="/what-new"
                    className="block text-gray-700 font-semibold hover:text-emerald-600 py-2 px-3 hover:bg-emerald-50 rounded transition"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t("header.whatsNew")}
                  </Link>
                  <Link
                    to="/delivery"
                    className="block text-gray-700 font-semibold hover:text-emerald-600 py-2 px-3 hover:bg-emerald-50 rounded transition"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t("header.delivery")}
                  </Link>
                  <hr className="my-3" />
                  <Link
                    to="/account"
                    className="flex items-center space-x-2 text-gray-700 hover:text-emerald-600 font-semibold py-2 px-3 hover:bg-emerald-50 rounded transition"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span>👤</span>
                    <span>{t("header.account")}</span>
                  </Link>
                  <Link
                    to="/favorites"
                    className="flex items-center space-x-2 text-gray-700 hover:text-emerald-600 font-semibold py-2 px-3 hover:bg-emerald-50 rounded transition"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Heart size={20} />
                    <span>
                      {t("header.favorites")} ({favoritesCount})
                    </span>
                  </Link>
                </div>
              </nav>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
