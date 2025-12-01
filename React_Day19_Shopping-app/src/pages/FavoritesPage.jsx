import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removeFromFavorites } from "../store/slices/productsSlice";
import Layout from "../components/layout/Layout";
import { Heart, ArrowRight, Trash2 } from "lucide-react";
import ProductCard from "../components/ProductCard";

export default function FavoritesPage() {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.products.favorites);

  const handleRemoveFavorite = (id) => {
    dispatch(removeFromFavorites(id));
  };

  if (favorites.length === 0) {
    return (
      <Layout>
        <div className="max-w-7xl mx-auto px-4 py-16 text-center">
          <Heart size={64} className="mx-auto text-gray-300 mb-4" />
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            No favorites yet
          </h1>
          <p className="text-gray-600 mb-8">
            Start adding products to your favorites!
          </p>
          <Link
            to="/"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            <span>Browse Products</span>
            <ArrowRight size={20} />
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">My Favorites</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {favorites.map((product) => (
            <div key={product.id} className="relative">
              <ProductCard product={product} />
              <button
                onClick={() => handleRemoveFavorite(product.id)}
                className="absolute top-2 left-2 bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition shadow-md z-10"
              >
                <Trash2 size={18} />
              </button>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <Link
            to="/"
            className="text-blue-600 hover:text-blue-700 font-semibold"
          >
            ← Continue Shopping
          </Link>
        </div>
      </div>
    </Layout>
  );
}
