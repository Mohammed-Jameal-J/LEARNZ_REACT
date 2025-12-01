import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../store/slices/userSlice";
import { User, Mail, Lock, UserPlus } from "lucide-react";

export default function SignupForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    else if (formData.name.length < 2)
      newErrors.name = "Name must be at least 2 characters";
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid";
    if (!formData.password) newErrors.password = "Password is required";
    else if (formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";
    if (!formData.confirmPassword)
      newErrors.confirmPassword = "Please confirm your password";
    else if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) setErrors({ ...errors, [name]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length === 0) {
      setIsLoading(true);
      try {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 500));
        const userData = {
          id: Date.now(),
          name: formData.name,
          email: formData.email,
        };
        dispatch(login(userData));
        localStorage.setItem("user", JSON.stringify(userData));
        setFormData({ name: "", email: "", password: "", confirmPassword: "" });
      } catch (error) {
        setErrors({ submit: "Signup failed. Please try again." });
      } finally {
        setIsLoading(false);
      }
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <h2 className="text-2xl font-bold text-white mb-6">Create Account</h2>

      {errors.submit && (
        <div className="bg-red-500/20 border border-red-300/50 rounded-lg p-3 text-red-200 text-sm">
          {errors.submit}
        </div>
      )}

      {/* Name Field */}
      <div>
        <label className="block text-white/80 font-medium mb-2">
          Full Name
        </label>
        <div className="relative">
          <User
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50"
            size={20}
          />
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
            className="w-full pl-10 pr-4 py-2 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-indigo-400 transition"
          />
        </div>
        {errors.name && (
          <p className="text-red-300 text-sm mt-1">{errors.name}</p>
        )}
      </div>

      {/* Email Field */}
      <div>
        <label className="block text-white/80 font-medium mb-2">Email</label>
        <div className="relative">
          <Mail
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50"
            size={20}
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your@email.com"
            className="w-full pl-10 pr-4 py-2 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-indigo-400 transition"
          />
        </div>
        {errors.email && (
          <p className="text-red-300 text-sm mt-1">{errors.email}</p>
        )}
      </div>

      {/* Password Field */}
      <div>
        <label className="block text-white/80 font-medium mb-2">Password</label>
        <div className="relative">
          <Lock
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50"
            size={20}
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="••••••"
            className="w-full pl-10 pr-4 py-2 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-indigo-400 transition"
          />
        </div>
        {errors.password && (
          <p className="text-red-300 text-sm mt-1">{errors.password}</p>
        )}
      </div>

      {/* Confirm Password Field */}
      <div>
        <label className="block text-white/80 font-medium mb-2">
          Confirm Password
        </label>
        <div className="relative">
          <Lock
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50"
            size={20}
          />
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="••••••"
            className="w-full pl-10 pr-4 py-2 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-indigo-400 transition"
          />
        </div>
        {errors.confirmPassword && (
          <p className="text-red-300 text-sm mt-1">{errors.confirmPassword}</p>
        )}
      </div>

      {/* Terms Checkbox */}
      <label className="flex items-center text-white/70 cursor-pointer">
        <input
          type="checkbox"
          className="w-4 h-4 rounded border-white/30 bg-white/10 cursor-pointer"
          required
        />
        <span className="ml-2 text-sm">
          I agree to the Terms and Conditions
        </span>
      </label>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-700/50 text-white font-semibold py-2 rounded-lg transition flex items-center justify-center space-x-2"
      >
        <UserPlus size={20} />
        <span>{isLoading ? "Creating Account..." : "Sign Up"}</span>
      </button>
    </form>
  );
}
