import FilterSidebar from "../components/FilterSidebar";
import ProductGrid from "../components/ProductGrid";
import HeroSlider from "../components/HeroSlider";
import Layout from "../components/layout/Layout";

export default function ProductsPage() {
  return (
    <Layout>
      {/* Hero Slider Section */}
      <HeroSlider />

      {/* Products Section */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
            Our Products
          </h2>
          <p className="text-gray-600">
            Browse our collection of quality products
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <FilterSidebar />
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <ProductGrid />
          </div>
        </div>
      </div>
    </Layout>
  );
}
