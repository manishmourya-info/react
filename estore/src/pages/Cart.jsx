import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cart, removeFromCart, total } = useCart();

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold mb-8">Your Cart</h1>

      {cart.length === 0 ? (
        <p className="text-xl">Cart is empty.</p>
      ) : (
        <>
          {cart.map((item, index) => (
            <div
              key={index}
              className="flex gap-4 items-center border p-4 rounded-xl mb-4"
            >
              <img
                src={item.image}
                className="h-20 w-20 object-contain"
              />

              <div className="flex-1">
                <h2 className="font-semibold">{item.title}</h2>
                <p className="text-green-600 font-bold">
                  ${item.price}
                </p>
              </div>

              <button
                onClick={() => removeFromCart(index)}
                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                Remove
              </button>
            </div>
          ))}

          <h2 className="text-3xl font-bold mt-8">
            Total: ${total.toFixed(2)}
          </h2>
        </>
      )}
    </div>
  );
}