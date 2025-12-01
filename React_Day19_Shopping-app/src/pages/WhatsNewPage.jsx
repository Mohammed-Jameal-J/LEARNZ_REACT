import { useGetProductsQuery } from "../store/api/productsApi";
import ProductCard from "../components/ProductCard";
import Layout from "../components/layout/Layout";
import { Sparkles } from "lucide-react";

export default function WhatsNewPage() {
  const { data, isLoading, error } = useGetProductsQuery();
  const newProducts = data?.slice(0, 12) || [];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-12">
        {/* Page Hero Section */}
        <div className="max-w-7xl mx-auto px-4 mb-12">
          <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-8 sm:p-12 text-center">
            <div className="flex items-center justify-center mb-4">
              <Sparkles className="text-purple-300 mr-3" size={40} />
              <h1 className="text-4xl sm:text-5xl font-bold text-white">
                What's New
              </h1>
            </div>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Check out our latest arrivals and trending products. Fresh
              inventory added daily to bring you the best selection.
            </p>
            <p className="text-purple-300 font-semibold mt-4">
              Updated Every Week with New Collections
            </p>
          </div>
        </div>

        {/* New Products Content */}
        <div className="max-w-7xl mx-auto px-4">
          {/* Category Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-xl p-6 text-white hover:bg-white/30 transition">
              <h3 className="text-xl font-bold mb-2">👔 Fashion</h3>
              <p className="text-white/70">
                Trendy clothing and accessories just in
              </p>
            </div>

            <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-xl p-6 text-white hover:bg-white/30 transition">
              <h3 className="text-xl font-bold mb-2">💻 Electronics</h3>
              <p className="text-white/70">
                Latest gadgets and tech innovations
              </p>
            </div>

            <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-xl p-6 text-white hover:bg-white/30 transition">
              <h3 className="text-xl font-bold mb-2">💍 Accessories</h3>
              <p className="text-white/70">
                New jewelry and lifestyle essentials
              </p>
            </div>
          </div>

          {/* Products Grid */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-8">
              Latest Arrivals
            </h2>
            {isLoading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[...Array(12)].map((_, i) => (
                  <div
                    key={i}
                    className="bg-white/10 backdrop-blur-md rounded-lg h-80 animate-pulse"
                  />
                ))}
              </div>
            ) : error ? (
              <div className="bg-red-500/20 backdrop-blur-md border border-red-300/50 rounded-lg p-4 text-red-200">
                Error loading new products
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {newProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}
