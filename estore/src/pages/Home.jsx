import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="text-center mt-20 px-6">
      <h1 className="text-5xl font-bold mb-4">
        Welcome to eStore 🛍️
      </h1>

      <p className="text-gray-600 text-lg mb-8">
        Best Products. Best Prices.
      </p>

      <Link
        to="/products"
        className="bg-blue-600 text-white px-6 py-3 rounded-lg"
      >
        Shop Now
      </Link>
    </div>
  );
}