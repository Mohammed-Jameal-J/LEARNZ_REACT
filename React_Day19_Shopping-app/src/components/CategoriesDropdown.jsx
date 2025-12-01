import { useState } from "react";
import { Link } from "react-router-dom";
import { useGetCategoriesQuery } from "../store/api/productsApi";
import { ChevronDown } from "lucide-react";

export default function CategoriesDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const { data: categories, isLoading } = useGetCategoriesQuery();

  return (
    <div className="relative group">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-gray-700 font-semibold flex items-center space-x-1 hover:text-emerald-600 transition"
      >
        <span>Categories</span>
        <ChevronDown
          size={18}
          className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-lg border border-gray-200 py-2 z-50">
          {isLoading ? (
            <div className="px-4 py-3 text-gray-500 text-sm">
              Loading categories...
            </div>
          ) : categories && categories.length > 0 ? (
            <>
              <Link
                to="/categories"
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 font-semibold transition"
              >
                All Categories
              </Link>
              <div className="border-t border-gray-200 my-2" />
              {categories.map((category) => (
                <Link
                  key={category}
                  to={`/categories?cat=${encodeURIComponent(category)}`}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-2 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 capitalize transition"
                >
                  {category}
                </Link>
              ))}
            </>
          ) : (
            <div className="px-4 py-3 text-gray-500 text-sm">
              No categories available
            </div>
          )}
        </div>
      )}

      {/* Close dropdown when clicking outside */}
      {isOpen && (
        <div className="fixed inset-0" onClick={() => setIsOpen(false)} />
      )}
    </div>
  );
}
