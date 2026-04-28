import { createContext, useContext, useState } from "react";

const OrderContext = createContext();

export function OrderProvider({ children }) {
  const [orders, setOrders] = useState([]);

  function placeOrder(items, total) {
    const order = {
      id: Date.now(),
      items,
      total,
      date: new Date().toLocaleString(),
    };

    setOrders((prev) => [order, ...prev]);
  }

  return (
    <OrderContext.Provider value={{ orders, placeOrder }}>
      {children}
    </OrderContext.Provider>
  );
}

export function useOrders() {
  return useContext(OrderContext);
}