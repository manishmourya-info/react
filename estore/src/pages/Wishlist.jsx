import { useWishlist } from "../context/WishlistContext";

export default function Wishlist() {
  const { wishlist, toggleWishlist } = useWishlist();

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold mb-8">
        Wishlist ❤️
      </h1>

      {wishlist.length === 0 ? (
        <p>No wishlist items yet.</p>
      ) : (
        <div className="grid md:grid-cols-4 gap-6">
          {wishlist.map((item) => (
            <div
              key={item.id}
              className="border p-4 rounded-xl"
            >
              <img
                src={item.image}
                className="h-40 w-full object-contain"
              />

              <h2 className="mt-3 font-semibold">
                {item.title}
              </h2>

              <button
                onClick={() => toggleWishlist(item)}
                className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}