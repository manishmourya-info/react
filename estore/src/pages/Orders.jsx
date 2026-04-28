import { useOrders } from "../context/OrderContext";

export default function Orders() {
  const { orders } = useOrders();

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-950 px-4 py-10">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="mb-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-black dark:text-white">
            My Orders 📦
          </h1>

          <p className="text-gray-500 dark:text-gray-400 mt-3">
            Track and review all your previous purchases.
          </p>
        </div>

        {/* Empty State */}
        {orders.length === 0 ? (
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-10 text-center">
            <h2 className="text-2xl font-bold text-black dark:text-white mb-3">
              No Orders Yet
            </h2>

            <p className="text-gray-500 dark:text-gray-400">
              Start shopping and your orders will appear here.
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            {orders
              .slice()
              .reverse()
              .map((order) => (
                <div
                  key={order.id}
                  className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden"
                >
                  {/* Header */}
                  <div className="bg-blue-600 dark:bg-gray-800 text-white px-6 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <div>
                      <p className="font-bold">
                        Order #{order.id}
                      </p>

                      <p className="text-sm text-blue-100 dark:text-gray-300">
                        {order.date}
                      </p>
                    </div>

                    <div className="text-lg font-bold">
                      ${order.total.toFixed(2)}
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-6">
                    <div className="space-y-4">
                      {order.items.map((item) => (
                        <div
                          key={item.id}
                          className="flex items-center gap-4 border-b dark:border-gray-800 pb-4"
                        >
                          <img
                            src={item.image}
                            alt={item.title}
                            className="h-16 w-16 object-contain bg-white rounded-lg p-1"
                          />

                          <div className="flex-1">
                            <h3 className="font-semibold text-black dark:text-white line-clamp-2">
                              {item.title}
                            </h3>

                            <p className="text-sm text-gray-500 dark:text-gray-400">
                              Qty: {item.qty}
                            </p>
                          </div>

                          <div className="font-bold text-green-600">
                            $
                            {(item.price * item.qty).toFixed(
                              2
                            )}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Footer */}
                    <div className="mt-5 flex justify-between items-center">
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {order.items.length} item(s)
                      </span>

                      <span className="px-4 py-2 rounded-full bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 text-sm font-semibold">
                        Delivered
                      </span>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
}