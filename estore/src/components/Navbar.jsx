import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Navbar() {

  const { cart } = useCart();

  return (
    <nav className="bg-blue-600 text-white px-8 py-4 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold">
        eStore
      </Link>

      <div className="space-x-6 text-lg">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart ({cart.length})</Link>
      </div>
    </nav>
  );
}