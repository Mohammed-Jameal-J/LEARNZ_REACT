import { useMemo } from "react";
import { useGetProductsQuery } from "../store/api/productsApi";
import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import { Loader } from "lucide-react";

const customProducts = [
  {
    id: 1001,
    title: "Labubu Toy - Angry Edition",
    price: 45.99,
    description:
      "Cute Labubu collectible toy in vibrant red color. Perfect for collectors and fans.",
    category: "labubu",
    image: "/download.jpg",
    rating: 4.8,
    reviews: 234,
  },
  {
    id: 1002,
    title: "Labubu Toy - Couple Edition",
    price: 45.99,
    description:
      "Adorable Labubu collectible toy in cool blue color. Great gift for toy enthusiasts.",
    category: "labubu",
    image: "/download (1).jpg",
    rating: 4.7,
    reviews: 189,
  },
  {
    id: 1003,
    title: "Labubu Toy - Pink Edition",
    price: 45.99,
    description:
      "Sweet Labubu collectible toy in lovely pink color. Perfect for collectors.",
    category: "labubu",
    image: "/pink.jpg",
    rating: 4.9,
    reviews: 312,
  },
  {
    id: 1004,
    title: "Labubu Toy - Tiny Edition",
    price: 45.99,
    description:
      "Cheerful Labubu collectible toy in bright yellow color. Fun and collectible.",
    category: "labubu",
    image: "/toy.jpg",
    rating: 4.6,
    reviews: 156,
  },
];

export default function ProductGrid() {
  const { data: products, isLoading, error } = useGetProductsQuery();
  const filter = useSelector((state) => state.products.filter);

  const filteredProducts = useMemo(() => {
    if (!products) return [];

    const allProducts = [...products, ...customProducts];

    return allProducts.filter((product) => {
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
