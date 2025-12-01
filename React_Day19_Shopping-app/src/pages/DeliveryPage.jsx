import { Truck, Package, MapPin, Clock, Shield } from "lucide-react";
import Layout from "../components/layout/Layout";

export default function DeliveryPage() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-900 py-12">
        {/* Page Hero Section */}
        <div className="max-w-7xl mx-auto px-4 mb-12">
          <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-8 sm:p-12 text-center">
            <div className="flex items-center justify-center mb-4">
              <Truck className="text-cyan-300 mr-3" size={40} />
              <h1 className="text-4xl sm:text-5xl font-bold text-white">
                Delivery & Returns
              </h1>
            </div>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Fast, reliable shipping with real-time tracking. Easy returns and
              hassle-free exchanges.
            </p>
            <p className="text-cyan-300 font-semibold mt-4">
              Free Shipping on Orders Over $50
            </p>
          </div>
        </div>

        {/* Delivery Info */}
        <div className="max-w-7xl mx-auto px-4">
          {/* Delivery Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-xl p-6">
              <Package className="text-emerald-300 mb-4" size={32} />
              <h3 className="text-xl font-bold text-white mb-2">
                Standard Delivery
              </h3>
              <p className="text-white/70 mb-4">3-5 business days</p>
              <p className="text-white font-semibold">$4.99</p>
            </div>

            <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-xl p-6">
              <Truck className="text-blue-300 mb-4" size={32} />
              <h3 className="text-xl font-bold text-white mb-2">
                Express Delivery
              </h3>
              <p className="text-white/70 mb-4">1-2 business days</p>
              <p className="text-white font-semibold">$9.99</p>
            </div>

            <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-xl p-6">
              <Clock className="text-purple-300 mb-4" size={32} />
              <h3 className="text-xl font-bold text-white mb-2">
                Same Day Delivery
              </h3>
              <p className="text-white/70 mb-4">
                Within 24 hours (Select areas)
              </p>
              <p className="text-white font-semibold">$19.99</p>
            </div>
          </div>

          {/* Return Policy */}
          <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-white mb-8">
              Return Policy
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-emerald-300 mb-4 flex items-center">
                  <Shield className="mr-2" size={24} />
                  Easy Returns
                </h3>
                <ul className="space-y-3 text-white/80">
                  <li>✓ 30-day return window</li>
                  <li>✓ Free return shipping</li>
                  <li>✓ Full refund guaranteed</li>
                  <li>✓ No questions asked</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-cyan-300 mb-4 flex items-center">
                  <MapPin className="mr-2" size={24} />
                  Return Process
                </h3>
                <ol className="space-y-3 text-white/80">
                  <li>1. Request return in account</li>
                  <li>2. Print shipping label</li>
                  <li>3. Pack and ship item</li>
                  <li>4. Receive refund</li>
                </ol>
              </div>
            </div>
          </div>

          {/* Tracking Section */}
          <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-6">
              Track Your Order
            </h2>
            <div className="max-w-md">
              <input
                type="text"
                placeholder="Enter tracking number"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:border-white/50 mb-4"
              />
              <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 rounded-lg transition">
                Track Now
              </button>
            </div>
            <p className="text-white/60 mt-4 text-sm">
              Enter your order number to check delivery status and real-time
              tracking
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
