import { useGetProductsQuery } from "../store/api/productsApi";
import ProductCard from "../components/ProductCard";
import Layout from "../components/layout/Layout";
import { Zap } from "lucide-react";

export default function DealsPage() {
  const { data, isLoading, error } = useGetProductsQuery();
  const dealsProducts = data?.slice(0, 8) || [];

  return (
    <Layout>
      <div className="min-h-screen bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 mb-12">
          <div className="bg-gradient-to-r from-emerald-600 to-emerald-500 border border-emerald-200 rounded-2xl p-8 sm:p-12 text-center">
            <div className="flex items-center justify-center mb-4">
              <Zap className="text-yellow-300 mr-3" size={40} />
              <h1 className="text-4xl sm:text-5xl font-bold text-white">
                Hot Deals
              </h1>
            </div>
            <p className="text-white text-lg max-w-2xl mx-auto">
              Discover amazing discounts on your favorite products. Limited time
              offers that you won't want to miss!
            </p>
            <p className="text-yellow-200 font-semibold mt-4">
              Save up to 50% on selected items
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-gradient-to-r from-emerald-600 to-emerald-500 rounded-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-2">Flash Sale</h3>
              <p className="text-emerald-100 mb-4">
                Ends in 2 hours - 30% Off Everything
              </p>
              <button className="bg-white text-emerald-600 px-6 py-2 rounded-lg font-semibold hover:bg-emerald-50 transition">
                Shop Now
              </button>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-blue-500 rounded-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-2">Weekend Special</h3>
              <p className="text-blue-100 mb-4">
                Free Shipping on Orders Over $50
              </p>
              <button className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-blue-50 transition">
                Explore Deals
              </button>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Featured Deals
          </h2>
          {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="bg-gray-200 rounded-lg h-80 animate-pulse"
                />
              ))}
            </div>
          ) : error ? (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700">
              Error loading deals
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {dealsProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
