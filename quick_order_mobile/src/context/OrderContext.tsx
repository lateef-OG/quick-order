import { createContext, useEffect, useState } from "react";
import { OrderItem } from "../types/order.types";

export const OrderContext = createContext(null);

export const OrderProvider = ({ children }) => {
  const [orderItems, setOrderItems] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const [serviceFee, setServiceFee] = useState(0);
  const [tax, setTax] = useState(0);
  const [total, setTotal] = useState(0);
  const [orderItemCount, setOrderItemCount] = useState(0);
  const [restaurantId, setRestaurantId] = useState("");

  const resetOrderValues = () => {
    setOrderItems([]);
    setSubtotal(0);
    setServiceFee(0);
    setTax(0);
    setTotal(0);
    setOrderItemCount(0);
    setRestaurantId("");
  };

  const addItem = (item: OrderItem) => {
    setOrderItems([...orderItems, item]);
    setOrderItemCount(orderItems.length + 1);
  };

  const removeItem = (id: string) => {
    const newItems = orderItems.filter((item) => item.menuItemId !== id);
    setOrderItems(newItems);
    setOrderItemCount(orderItems.length - 1);
  };

  useEffect(() => {
    const newSubtotal = orderItems.reduce((acc, obj) => {
      return acc + Number(obj.price);
    }, 0);
    const newTax = +Number(newSubtotal * 0.1).toFixed(2);
    const newServiceFee = +Number(newSubtotal * 0.03).toFixed(2);
    const newTotal = +Number(newSubtotal + newTax + newServiceFee).toFixed(2);

    setSubtotal(newSubtotal);
    setServiceFee(newServiceFee);
    setTax(newTax);
    setTotal(newTotal);
  }, [orderItems]);

  return (
    <OrderContext.Provider
      value={{
        orderItems,
        serviceFee,
        tax,
        total,
        subtotal,
        orderItemCount,
        restaurantId,
        addItem,
        removeItem,
        setRestaurantId,
        resetOrderValues,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};
