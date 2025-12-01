import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  addToFavorites,
  removeFromFavorites,
} from "../store/slices/productsSlice";
import { Heart, ShoppingCart, Star } from "lucide-react";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.products.favorites);
  const isFavorited = favorites.some((item) => item.id === product.id);
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = (e) => {
    e.preventDefault();
    setIsAdding(true);
    dispatch(addToCart(product));
    setTimeout(() => setIsAdding(false), 500);
  };

  const handleToggleFavorite = (e) => {
    e.preventDefault();
    if (isFavorited) {
      dispatch(removeFromFavorites(product.id));
    } else {
      dispatch(addToFavorites(product));
    }
  };

  return (
    <Link to={`/product/${product.id}`}>
      <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-lg shadow-lg hover:shadow-2xl hover:border-white/50 transition-all duration-300 overflow-hidden h-full flex flex-col">
        {/* Image Container */}
        <div className="relative w-full h-48 bg-linear-to-br from-white/20 to-white/10 flex items-center justify-center overflow-hidden group">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300 p-4"
          />
          {/* Favorite Button */}
          <button
            onClick={handleToggleFavorite}
            className="absolute top-3 right-3 bg-white/80 backdrop-blur-md border border-white/50 rounded-full p-2 shadow-lg hover:bg-white hover:shadow-xl transition z-10"
          >
            <Heart
              size={20}
              className={
                isFavorited ? "fill-red-500 text-red-500" : "text-gray-600"
              }
            />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 flex flex-col flex-grow">
          {/* Category */}
          <p className="text-xs text-white/70 uppercase tracking-wider mb-2">
            {product.category}
          </p>

          {/* Title */}
          <h3 className="text-sm font-semibold text-white mb-2 line-clamp-2 min-h-10">
            {product.title}
          </h3>

          {/* Description */}
          <p className="text-xs text-white/60 mb-3 line-clamp-2 flex-grow">
            {product.description}
          </p>

          {/* Rating */}
          <div className="flex items-center mb-3">
            <Star size={16} className="text-yellow-300 fill-yellow-300" />
            <span className="ml-1 text-xs text-white/70">4.5</span>
          </div>

          {/* Price */}
          <p className="text-lg font-bold text-emerald-300 mb-3">
            ${product.price.toFixed(2)}
          </p>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className={`w-full py-2 px-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all backdrop-blur-sm border ${
              isAdding
                ? "bg-green-500/80 text-white border-green-300/50"
                : "bg-emerald-600/80 text-white border-emerald-300/50 hover:bg-emerald-600 hover:border-emerald-300"
            }`}
          >
            <ShoppingCart size={18} />
            <span>{isAdding ? "Added!" : "Add to Cart"}</span>
          </button>
        </div>
      </div>
    </Link>
  );
}
