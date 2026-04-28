import { Link } from "react-router-dom";
import { useWishlist } from "../context/WishlistContext";

export default function ProductCard({ item }) {
  const { toggleWishlist, isWishlisted } = useWishlist();

  const stars = Math.round(item.rating?.rate || 0);

  return (
    <div className="border rounded-2xl shadow-md p-4 bg-white dark:bg-gray-800">
      <img
        src={item.image}
        className="h-48 w-full object-contain"
      />

      <h2 className="font-semibold mt-4 min-h-[48px]">
        {item.title}
      </h2>

      <div className="mt-2">
        {"⭐".repeat(stars)}
      </div>

      <p className="text-green-600 text-xl font-bold mt-2">
        ${item.price}
      </p>

      <div className="grid grid-cols-2 gap-2 mt-4">
        <Link
          to={`/products/${item.id}`}
          className="text-center bg-blue-600 text-white py-2 rounded"
        >
          Details
        </Link>

        <button
          onClick={() => toggleWishlist(item)}
          className="bg-pink-500 text-white py-2 rounded"
        >
          {isWishlisted(item.id) ? "♥ Added" : "♡ Wish"}
        </button>
      </div>
    </div>
  );
}