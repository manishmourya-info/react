import { Link, NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useTheme } from "../context/ThemeContext";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { count } = useCart();
  const { dark, toggleTheme } = useTheme();
  const { user, logout } = useAuth();

  const navStyle = ({ isActive }) =>
    `px-4 py-2 rounded-full transition-all duration-300 font-medium ${
      isActive
        ? "bg-white/20 text-white"
        : "text-white/90 hover:bg-white/10 hover:text-white"
    }`;

  return (
    <header className="sticky top-0 z-50">
      <nav className="w-full border-b border-gray-200 dark:border-gray-800 bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 dark:from-gray-950 dark:via-gray-900 dark:to-black text-white shadow-xl transition duration-300">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10 py-4">
          {/* Logo */}
          <Link
            to="/"
            className="text-3xl font-black tracking-wide hover:scale-105 transition duration-300"
          >
            <span className="text-yellow-300">e</span>Store
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-2 bg-white/10 dark:bg-white/5 rounded-full px-2 py-1">
            <NavLink to="/" className={navStyle}>
              Home
            </NavLink>

            <NavLink to="/products" className={navStyle}>
              Products
            </NavLink>

            <NavLink to="/wishlist" className={navStyle}>
              Wishlist
            </NavLink>

            <NavLink to="/cart" className={navStyle}>
              <span className="flex items-center gap-2">
                Cart
                <span className="bg-yellow-300 text-black text-xs font-bold px-2 py-0.5 rounded-full min-w-[22px] text-center">
                  {count}
                </span>
              </span>
            </NavLink>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="h-11 w-11 rounded-full bg-white/15 dark:bg-white/10 hover:bg-white/25 text-xl flex items-center justify-center transition duration-300"
            >
              {dark ? "☀️" : "🌙"}
            </button>

            {/* User Section */}
            {user ? (
              <div className="flex items-center gap-3">
                <div className="hidden lg:flex items-center gap-2 bg-white/10 dark:bg-white/5 px-4 py-2 rounded-full">
                  <div className="h-8 w-8 rounded-full bg-yellow-300 text-black flex items-center justify-center font-bold">
                    {user.email?.charAt(0).toUpperCase()}
                  </div>

                  <span className="text-sm max-w-[150px] truncate">
                    {user.email}
                  </span>
                </div>

                <button
                  onClick={logout}
                  className="bg-red-500 hover:bg-red-600 px-5 py-2 rounded-full font-semibold transition duration-300"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className="bg-white text-indigo-700 hover:bg-yellow-300 px-5 py-2 rounded-full font-bold transition duration-300"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}