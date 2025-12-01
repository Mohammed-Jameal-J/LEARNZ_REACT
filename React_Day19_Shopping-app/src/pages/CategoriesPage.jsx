import { useState } from "react";
import { useGetCategoriesQuery } from "../store/api/productsApi";
import { useGetProductsQuery } from "../store/api/productsApi";
import ProductCard from "../components/ProductCard";
import Layout from "../components/layout/Layout";
import { Grid3x3, Filter } from "lucide-react";

export default function CategoriesPage() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const { data: categories, isLoading: categoriesLoading } =
    useGetCategoriesQuery();
  const { data: allProducts, isLoading: productsLoading } =
    useGetProductsQuery();

  const displayProducts = selectedCategory
    ? allProducts?.filter((p) => p.category === selectedCategory) || []
    : allProducts || [];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900 py-12">
        {/* Page Hero Section */}
        <div className="max-w-7xl mx-auto px-4 mb-12">
          <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-8 sm:p-12 text-center">
            <div className="flex items-center justify-center mb-4">
              <Grid3x3 className="text-orange-300 mr-3" size={40} />
              <h1 className="text-4xl sm:text-5xl font-bold text-white">
                All Categories
              </h1>
            </div>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Browse through our extensive collection of products organized by
              category. Find exactly what you're looking for.
            </p>
            <p className="text-orange-300 font-semibold mt-4">
              {selectedCategory
                ? `Showing ${displayProducts.length} products in ${selectedCategory}`
                : `Total ${allProducts?.length || 0} products available`}
            </p>
          </div>
        </div>

        {/* Categories & Products */}
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Category Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-xl p-6 sticky top-24">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  <Filter className="mr-2" size={24} />
                  Categories
                </h3>

                <button
                  onClick={() => setSelectedCategory(null)}
                  className={`w-full text-left px-4 py-3 rounded-lg mb-2 transition font-medium ${
                    selectedCategory === null
                      ? "bg-orange-600 text-white"
                      : "bg-white/10 text-white/80 hover:bg-white/20"
                  }`}
                >
                  All Products
                </button>

                {categoriesLoading ? (
                  <div className="space-y-2">
                    {[...Array(4)].map((_, i) => (
                      <div
                        key={i}
                        className="bg-white/10 h-10 rounded-lg animate-pulse"
                      />
                    ))}
                  </div>
                ) : (
                  <div className="space-y-2">
                    {categories?.map((category) => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`w-full text-left px-4 py-3 rounded-lg capitalize transition font-medium ${
                          selectedCategory === category
                            ? "bg-orange-600 text-white"
                            : "bg-white/10 text-white/80 hover:bg-white/20"
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Products Grid */}
            <div className="lg:col-span-3">
              <h2 className="text-3xl font-bold text-white mb-8">
                {selectedCategory ? `${selectedCategory}` : "All Products"}
              </h2>

              {productsLoading ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[...Array(9)].map((_, i) => (
                    <div
                      key={i}
                      className="bg-white/10 backdrop-blur-md rounded-lg h-80 animate-pulse"
                    />
                  ))}
                </div>
              ) : displayProducts.length === 0 ? (
                <div className="bg-white/10 backdrop-blur-md border border-white/30 rounded-lg p-8 text-center">
                  <p className="text-white/70 text-lg">
                    No products found in this category
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {displayProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
