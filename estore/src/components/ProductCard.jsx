import { Link } from "react-router-dom";

export default function ProductCard({ item }) {
  return (
    <div className="border rounded-2xl shadow-md p-4 bg-white hover:shadow-xl transition">
      <img
        src={item.image}
        alt={item.title}
        className="h-48 w-full object-contain"
      />

      <h2 className="font-semibold mt-4 min-h-[48px]">
        {item.title}
      </h2>

      <p className="text-green-600 text-xl font-bold mt-2">
        ${item.price}
      </p>

      <Link
        to={`/products/${item.id}`}
        className="block text-center w-full mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
      >
        View Details
      </Link>
    </div>
  );
}