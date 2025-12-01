import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useGetProductByIdQuery } from "../store/api/productsApi";
import {
  addToCart,
  addToFavorites,
  removeFromFavorites,
} from "../store/slices/productsSlice";
import Layout from "../components/layout/Layout";
import { Heart, ShoppingCart, ChevronLeft, Star, Loader } from "lucide-react";
import { useState } from "react";

export default function ProductDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { data: product, isLoading, error } = useGetProductByIdQuery(id);
  const favorites = useSelector((state) => state.products.favorites);
  const isFavorited = favorites.some((item) => item.id === parseInt(id));
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);

  if (isLoading) {
    return (
      <Layout>
        <div className="flex items-center justify-center h-96">
          <Loader className="animate-spin text-blue-600" size={48} />
        </div>
      </Layout>
    );
  }

  if (error || !product) {
    return (
      <Layout>
        <div className="max-w-7xl mx-auto px-4 py-8 text-center">
          <h1 className="text-2xl font-bold text-red-600">Product not found</h1>
          <button
            onClick={() => navigate("/")}
            className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Back to Products
          </button>
        </div>
      </Layout>
    );
  }

  const handleAddToCart = () => {
    setIsAdding(true);
    for (let i = 0; i < quantity; i++) {
      dispatch(addToCart(product));
    }
    setTimeout(() => setIsAdding(false), 500);
  };

  const handleToggleFavorite = () => {
    if (isFavorited) {
      dispatch(removeFromFavorites(product.id));
    } else {
      dispatch(addToFavorites(product));
    }
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Back Button */}
        <button
          onClick={() => navigate("/")}
          className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 mb-8"
        >
          <ChevronLeft size={20} />
          <span>Back to Products</span>
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white rounded-lg shadow-md p-8">
          {/* Product Image */}
          <div className="flex items-center justify-center bg-gray-100 rounded-lg p-8">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-96 object-contain"
            />
          </div>

          {/* Product Details */}
          <div className="flex flex-col justify-between">
            {/* Category */}
            <div>
              <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">
                {product.category}
              </p>

              {/* Title */}
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                {product.title}
              </h1>

              {/* Rating */}
              <div className="flex items-center mb-6">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className={
                        i < 4
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-gray-300"
                      }
                    />
                  ))}
                </div>
                <span className="ml-2 text-gray-600">(128 reviews)</span>
              </div>

              {/* Price */}
              <div className="mb-6">
                <p className="text-4xl font-bold text-blue-600 mb-2">
                  ${product.price.toFixed(2)}
                </p>
                <p className="text-sm text-green-600 font-semibold">In Stock</p>
              </div>

              {/* Description */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Description
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Quantity and Add to Cart */}
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-2 text-gray-600 hover:bg-gray-100"
                  >
                    −
                  </button>
                  <input
                    type="number"
                    value={quantity}
                    onChange={(e) =>
                      setQuantity(Math.max(1, parseInt(e.target.value) || 1))
                    }
                    className="w-16 text-center border-l border-r border-gray-300 py-2 focus:outline-none"
                  />
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-2 text-gray-600 hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={handleAddToCart}
                  disabled={isAdding}
                  className={`flex-1 py-3 px-6 rounded-lg font-semibold flex items-center justify-center space-x-2 transition ${
                    isAdding
                      ? "bg-green-500 text-white"
                      : "bg-blue-600 text-white hover:bg-blue-700"
                  }`}
                >
                  <ShoppingCart size={20} />
                  <span>{isAdding ? "Added to Cart!" : "Add to Cart"}</span>
                </button>

                <button
                  onClick={handleToggleFavorite}
                  className="py-3 px-6 border-2 border-gray-300 rounded-lg hover:border-red-500 transition"
                >
                  <Heart
                    size={24}
                    className={
                      isFavorited
                        ? "fill-red-500 text-red-500"
                        : "text-gray-400"
                    }
                  />
                </button>
              </div>

              {/* Additional Info */}
              <div className="bg-gray-100 rounded-lg p-4 space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">SKU:</span>
                  <span className="font-semibold">{product.id}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Category:</span>
                  <span className="font-semibold capitalize">
                    {product.category}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Availability:</span>
                  <span className="font-semibold text-green-600">In Stock</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
