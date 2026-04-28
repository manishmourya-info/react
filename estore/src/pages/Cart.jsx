import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Cart() {
  const {
    cart,
    increaseQty,
    decreaseQty,
    removeFromCart,
    total,
  } = useCart();

  if (cart.length === 0) {
    return (
      <div className="text-center mt-20">
        <h1 className="text-4xl font-bold mb-4">
          Cart is Empty 🛒
        </h1>

        <Link
          to="/products"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg"
        >
          Shop Now
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold mb-8">Your Cart</h1>

      {cart.map((item) => (
        <div
          key={item.id}
          className="grid md:grid-cols-4 gap-4 items-center border rounded-xl p-4 mb-4"
        >
          <img
            src={item.image}
            className="h-24 w-24 object-contain"
          />

          <div>
            <h2 className="font-semibold">{item.title}</h2>
            <p className="text-green-600 font-bold">
              ${item.price}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => decreaseQty(item.id)}
              className="px-3 py-1 bg-gray-300 rounded"
            >
              -
            </button>

            <span>{item.qty}</span>

            <button
              onClick={() => increaseQty(item.id)}
              className="px-3 py-1 bg-gray-300 rounded"
            >
              +
            </button>
          </div>

          <button
            onClick={() => removeFromCart(item.id)}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Remove
          </button>
        </div>
      ))}

      <div className="mt-8 flex justify-between items-center">
        <h2 className="text-3xl font-bold">
          Total: ${total.toFixed(2)}
        </h2>

        <Link
          to="/checkout"
          className="bg-green-600 text-white px-8 py-3 rounded-xl"
        >
          Checkout
        </Link>
      </div>
    </div>
  );
}