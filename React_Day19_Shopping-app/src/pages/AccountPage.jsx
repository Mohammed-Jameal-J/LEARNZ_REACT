import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import LoginForm from "../components/auth/LoginForm";
import SignupForm from "../components/auth/SignupForm";
import Layout from "../components/layout/Layout";
import { User, LogOut } from "lucide-react";

export default function AccountPage() {
  const [isLogin, setIsLogin] = useState(true);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user?.currentUser);

  const handleLogout = () => {
    localStorage.removeItem("user");
    dispatch({ type: "user/logout" });
  };

  if (user) {
    return (
      <Layout>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 py-12">
          <div className="max-w-7xl mx-auto px-4">
            {/* Welcome Section */}
            <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-8 sm:p-12 text-center mb-12">
              <div className="flex items-center justify-center mb-4">
                <User className="text-indigo-300 mr-3" size={40} />
                <h1 className="text-4xl sm:text-5xl font-bold text-white">
                  My Account
                </h1>
              </div>
              <p className="text-white/80 text-lg">
                Welcome back,{" "}
                <span className="font-bold text-indigo-300">{user.name}</span>!
              </p>
            </div>

            {/* Account Dashboard */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {/* Profile Card */}
              <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">Profile</h3>
                <div className="space-y-3 text-white/80">
                  <p>
                    <span className="font-semibold text-white">Name:</span>{" "}
                    {user.name}
                  </p>
                  <p>
                    <span className="font-semibold text-white">Email:</span>{" "}
                    {user.email}
                  </p>
                  <button className="mt-4 w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-lg transition">
                    Edit Profile
                  </button>
                </div>
              </div>

              {/* Orders Card */}
              <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">Orders</h3>
                <div className="space-y-3">
                  <p className="text-4xl font-bold text-indigo-300">0</p>
                  <p className="text-white/70">Total Orders</p>
                  <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 rounded-lg transition">
                    View Orders
                  </button>
                </div>
              </div>

              {/* Addresses Card */}
              <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">Addresses</h3>
                <div className="space-y-3">
                  <p className="text-4xl font-bold text-indigo-300">0</p>
                  <p className="text-white/70">Saved Addresses</p>
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition">
                    Manage Addresses
                  </button>
                </div>
              </div>
            </div>

            {/* Logout Button */}
            <div className="max-w-md mx-auto">
              <button
                onClick={handleLogout}
                className="w-full bg-red-600/80 hover:bg-red-700 text-white font-semibold py-3 rounded-lg transition flex items-center justify-center space-x-2"
              >
                <LogOut size={20} />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 py-12">
        <div className="max-w-7xl mx-auto px-4">
          {/* Page Header */}
          <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-8 sm:p-12 text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-3">
              Your Account
            </h1>
            <p className="text-white/80 text-lg">
              Create an account or login to manage your profile and orders
            </p>
          </div>

          {/* Forms Container */}
          <div className="max-w-2xl mx-auto">
            {/* Toggle Buttons */}
            <div className="flex gap-4 mb-8 justify-center">
              <button
                onClick={() => setIsLogin(true)}
                className={`px-6 py-3 rounded-lg font-semibold transition ${
                  isLogin
                    ? "bg-indigo-600 text-white"
                    : "bg-white/10 text-white/70 hover:bg-white/20"
                }`}
              >
                Login
              </button>
              <button
                onClick={() => setIsLogin(false)}
                className={`px-6 py-3 rounded-lg font-semibold transition ${
                  !isLogin
                    ? "bg-indigo-600 text-white"
                    : "bg-white/10 text-white/70 hover:bg-white/20"
                }`}
              >
                Sign Up
              </button>
            </div>

            {/* Forms */}
            <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-8">
              {isLogin ? <LoginForm /> : <SignupForm />}
            </div>

            {/* Continue Shopping Link */}
            <div className="text-center mt-6">
              <Link
                to="/"
                className="text-indigo-300 hover:text-indigo-200 font-semibold"
              >
                Continue Shopping →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
