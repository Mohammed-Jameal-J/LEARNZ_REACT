import { useDispatch, useSelector } from "react-redux";
import { useGetCategoriesQuery } from "../store/api/productsApi";
import { setFilter } from "../store/slices/productsSlice";
import { ChevronDown } from "lucide-react";

export default function FilterSidebar() {
  const dispatch = useDispatch();
  const { data: categories } = useGetCategoriesQuery();
  const filter = useSelector((state) => state.products.filter);

  const handleCategoryChange = (category) => {
    dispatch(
      setFilter({ category: category === filter.category ? "" : category })
    );
  };

  const handlePriceChange = (range) => {
    dispatch(setFilter({ priceRange: range }));
  };

  const priceRanges = [
    { label: "Under $50", range: [0, 50] },
    { label: "$50 - $100", range: [50, 100] },
    { label: "$100 - $200", range: [100, 200] },
    { label: "Over $200", range: [200, 1000] },
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6 h-fit sticky top-24">
      {/* Category Filter */}
      <div className="mb-8">
        <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
          Categories
          <ChevronDown size={20} className="ml-auto" />
        </h3>
        <div className="space-y-3">
          <button
            onClick={() => handleCategoryChange("")}
            className={`w-full text-left px-3 py-2 rounded-lg transition ${
              filter.category === ""
                ? "bg-blue-100 text-blue-600 font-semibold"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            All Categories
          </button>
          {categories?.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`w-full text-left px-3 py-2 rounded-lg transition capitalize ${
                filter.category === category
                  ? "bg-blue-100 text-blue-600 font-semibold"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Price Filter */}
      <div>
        <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
          Price
          <ChevronDown size={20} className="ml-auto" />
        </h3>
        <div className="space-y-3">
          {priceRanges.map((item) => (
            <button
              key={item.label}
              onClick={() => handlePriceChange(item.range)}
              className={`w-full text-left px-3 py-2 rounded-lg transition ${
                filter.priceRange[0] === item.range[0] &&
                filter.priceRange[1] === item.range[1]
                  ? "bg-blue-100 text-blue-600 font-semibold"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* Clear Filters */}
      {(filter.category !== "" ||
        filter.priceRange[0] !== 0 ||
        filter.priceRange[1] !== 1000) && (
        <button
          onClick={() =>
            dispatch(setFilter({ category: "", priceRange: [0, 1000] }))
          }
          className="w-full mt-8 py-2 px-4 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition"
        >
          Clear Filters
        </button>
      )}
    </div>
  );
}
