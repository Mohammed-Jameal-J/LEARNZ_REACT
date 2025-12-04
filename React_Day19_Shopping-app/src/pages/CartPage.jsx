import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import {
  removeFromCart,
  updateCartQuantity,
  clearCart,
} from "../store/slices/productsSlice";
import Layout from "../components/layout/Layout";
import { Trash2, Plus, Minus, ShoppingCart, ArrowRight } from "lucide-react";

export default function CartPage() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.products.cart);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = total * 0.1;
  const grandTotal = total + tax;

  const handleRemoveItem = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleQuantityChange = (id, quantity) => {
    if (quantity > 0) {
      dispatch(updateCartQuantity({ id, quantity }));
    }
  };

  const handleClearCart = () => {
    if (window.confirm(t("cartPage.confirmClearCart"))) {
      dispatch(clearCart());
    }
  };

  if (cart.length === 0) {
    return (
      <Layout>
        <div className="max-w-7xl mx-auto px-4 py-16 text-center">
          <ShoppingCart size={64} className="mx-auto text-gray-300 mb-4" />
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {t("pages.yourCartEmpty")}
          </h1>
          <p className="text-gray-600 mb-8">{t("pages.addProductsToCart")}</p>
          <Link
            to="/"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            <span>{t("pages.continueShopping")}</span>
            <ArrowRight size={20} />
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          {t("pages.cart")}
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              {/* Table Header */}
              <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-4 bg-gray-50 border-b border-gray-200">
                <div className="col-span-4 font-semibold text-gray-900">
                  Product
                </div>
                <div className="col-span-2 font-semibold text-gray-900 text-center">
                  {t("cartPage.subtotal")}
                </div>
                <div className="col-span-3 font-semibold text-gray-900 text-center">
                  {t("cartPage.quantity")}
                </div>
                <div className="col-span-2 font-semibold text-gray-900 text-center">
                  Total
                </div>
                <div className="col-span-1"></div>
              </div>

              {/* Cart Items List */}
              <div className="divide-y divide-gray-200">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="p-6 hover:bg-gray-50 transition"
                  >
                    <div className="flex gap-4">
                      {/* Product Image */}
                      <div className="w-24 h-24 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-contain p-2"
                        />
                      </div>

                      {/* Product Details */}
                      <div className="flex-grow">
                        <Link
                          to={`/product/${item.id}`}
                          className="text-lg font-semibold text-gray-900 hover:text-blue-600 line-clamp-2"
                        >
                          {item.title}
                        </Link>
                        <p className="text-gray-500 text-sm mt-1">
                          {item.category}
                        </p>
                        <p className="text-blue-600 font-semibold text-lg mt-2">
                          ${item.price.toFixed(2)}
                        </p>

                        {/* Mobile: Quantity and Total */}
                        <div className="md:hidden mt-3 space-y-2">
                          <div className="flex items-center space-x-2">
                            <span className="text-sm text-gray-600">
                              {t("cartPage.quantity")}:
                            </span>
                            <div className="flex items-center border border-gray-300 rounded">
                              <button
                                onClick={() =>
                                  handleQuantityChange(
                                    item.id,
                                    item.quantity - 1
                                  )
                                }
                                className="px-2 py-1 text-gray-600 hover:bg-gray-100"
                              >
                                <Minus size={16} />
                              </button>
                              <span className="px-3 py-1 text-sm font-semibold">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() =>
                                  handleQuantityChange(
                                    item.id,
                                    item.quantity + 1
                                  )
                                }
                                className="px-2 py-1 text-gray-600 hover:bg-gray-100"
                              >
                                <Plus size={16} />
                              </button>
                            </div>
                          </div>
                          <div className="text-sm">
                            <span className="text-gray-600">Total: </span>
                            <span className="font-semibold">
                              ${(item.price * item.quantity).toFixed(2)}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Desktop: Quantity Control */}
                      <div className="hidden md:flex items-center space-x-2 border border-gray-300 rounded-lg h-fit">
                        <button
                          onClick={() =>
                            handleQuantityChange(item.id, item.quantity - 1)
                          }
                          className="px-3 py-2 text-gray-600 hover:bg-gray-100"
                        >
                          <Minus size={16} />
                        </button>
                        <span className="px-4 py-2 text-center font-semibold min-w-12">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            handleQuantityChange(item.id, item.quantity + 1)
                          }
                          className="px-3 py-2 text-gray-600 hover:bg-gray-100"
                        >
                          <Plus size={16} />
                        </button>
                      </div>

                      {/* Remove Button */}
                      <button
                        onClick={() => handleRemoveItem(item.id)}
                        className="text-red-600 hover:text-red-700 hover:bg-red-50 p-2 rounded-lg transition"
                      >
                        <Trash2 size={20} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Continue Shopping */}
            <Link
              to="/"
              className="inline-block mt-6 px-6 py-2 text-blue-600 font-semibold hover:text-blue-700"
            >
              ← {t("pages.continueShopping")}
            </Link>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 h-fit sticky top-24">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {t("cartPage.cartSummary")}
              </h2>

              <div className="space-y-4 mb-6 pb-6 border-b border-gray-200">
                <div className="flex justify-between text-gray-700">
                  <span>
                    {t("cartPage.subtotal")} ({cart.length} items)
                  </span>
                  <span className="font-semibold">${total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>{t("cartPage.tax")}</span>
                  <span className="font-semibold">${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>Shipping</span>
                  <span className="font-semibold text-green-600">Free</span>
                </div>
              </div>

              <div className="flex justify-between mb-6">
                <span className="text-lg font-bold text-gray-900">Total</span>
                <span className="text-2xl font-bold text-blue-600">
                  ${grandTotal.toFixed(2)}
                </span>
              </div>

              <button className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition mb-3">
                {t("cartPage.proceedToCheckout")}
              </button>

              <button
                onClick={handleClearCart}
                className="w-full py-2 border border-red-300 text-red-600 rounded-lg font-semibold hover:bg-red-50 transition"
              >
                {t("cartPage.clearCart")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
