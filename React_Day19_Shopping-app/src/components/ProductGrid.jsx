import { useMemo } from "react";
import { useGetProductsQuery } from "../store/api/productsApi";
import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import { Loader } from "lucide-react";

export default function ProductGrid() {
  const { data: products, isLoading, error } = useGetProductsQuery();
  const filter = useSelector((state) => state.products.filter);

  const filteredProducts = useMemo(() => {
    if (!products) return [];

    return products.filter((product) => {
      const categoryMatch =
        !filter.category || product.category === filter.category;
      const priceMatch =
        product.price >= filter.priceRange[0] &&
        product.price <= filter.priceRange[1];
      return categoryMatch && priceMatch;
    });
  }, [products, filter]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="flex flex-col items-center space-y-4">
          <Loader className="animate-spin text-blue-600" size={48} />
          <p className="text-gray-600 text-lg">Loading products...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="text-center">
          <p className="text-red-600 text-lg font-semibold mb-2">
            Failed to load products
          </p>
          <p className="text-gray-600">Please try again later</p>
        </div>
      </div>
    );
  }

  if (filteredProducts.length === 0) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="text-center">
          <p className="text-gray-600 text-lg">No products found</p>
          <p className="text-gray-500 text-sm">Try adjusting your filters</p>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
