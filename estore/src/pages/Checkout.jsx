import { useState } from "react";
import { useCart } from "../context/CartContext";
import { useOrders } from "../context/OrderContext";
import { useNavigate } from "react-router-dom";
import { useToast } from "../context/ToastContext";

export default function Checkout() {
  const { cart, total } = useCart();
  const { placeOrder } = useOrders();
  const { showToast } = useToast();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    placeOrder(cart, total);

    showToast("✅ Order placed successfully!", "success");

    setTimeout(() => {
      navigate("/orders");
    }, 1600);
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-950 py-10 px-4">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8">
        {/* Left Side Form */}
        <div className="lg:col-span-2 bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8">
          <h1 className="text-4xl font-bold mb-2 text-black dark:text-white">
            Checkout 💳
          </h1>

          <p className="text-gray-500 dark:text-gray-400 mb-8">
            Complete your shipping details to place the order.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid md:grid-cols-2 gap-5">
              <input
                name="name"
                placeholder="Full Name"
                onChange={handleChange}
                className="border dark:border-gray-700 bg-white dark:bg-gray-800 text-black dark:text-white p-4 rounded-xl outline-none"
                required
              />

              <input
                name="email"
                type="email"
                placeholder="Email Address"
                onChange={handleChange}
                className="border dark:border-gray-700 bg-white dark:bg-gray-800 text-black dark:text-white p-4 rounded-xl outline-none"
                required
              />
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              <input
                name="phone"
                placeholder="Phone Number"
                onChange={handleChange}
                className="border dark:border-gray-700 bg-white dark:bg-gray-800 text-black dark:text-white p-4 rounded-xl outline-none"
                required
              />

              <input
                name="city"
                placeholder="City"
                onChange={handleChange}
                className="border dark:border-gray-700 bg-white dark:bg-gray-800 text-black dark:text-white p-4 rounded-xl outline-none"
                required
              />
            </div>

            <input
              name="address"
              placeholder="Full Address"
              onChange={handleChange}
              className="w-full border dark:border-gray-700 bg-white dark:bg-gray-800 text-black dark:text-white p-4 rounded-xl outline-none"
              required
            />

            <input
              name="pincode"
              placeholder="Pincode"
              onChange={handleChange}
              className="w-full border dark:border-gray-700 bg-white dark:bg-gray-800 text-black dark:text-white p-4 rounded-xl outline-none"
              required
            />

            <button className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl font-bold text-lg transition">
              Place Order
            </button>
          </form>
        </div>

        {/* Right Side Summary */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 h-fit">
          <h2 className="text-2xl font-bold mb-6 text-black dark:text-white">
            Order Summary
          </h2>

          <div className="space-y-4 max-h-[350px] overflow-y-auto pr-2">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 border-b dark:border-gray-800 pb-4"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-16 w-16 object-contain bg-white rounded"
                />

                <div className="flex-1">
                  <h3 className="text-sm font-semibold text-black dark:text-white line-clamp-2">
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-500">
                    Qty: {item.qty}
                  </p>
                </div>

                <p className="font-bold text-green-600">
                  ${(item.price * item.qty).toFixed(2)}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 space-y-3 text-sm">
            <div className="flex justify-between text-gray-500">
              <span>Subtotal</span>
              <span>${total.toFixed(2)}</span>
            </div>

            <div className="flex justify-between text-gray-500">
              <span>Shipping</span>
              <span>Free</span>
            </div>

            <div className="border-t dark:border-gray-800 pt-4 flex justify-between text-xl font-bold text-black dark:text-white">
              <span>Total</span>
              <span className="text-green-600">
                ${total.toFixed(2)}
              </span>
            </div>
          </div>

          <div className="mt-6 bg-blue-50 dark:bg-gray-800 p-4 rounded-xl text-sm text-gray-600 dark:text-gray-300">
            🔒 Secure Checkout • 100% Safe Payment
          </div>
        </div>
      </div>
    </div>
  );
}