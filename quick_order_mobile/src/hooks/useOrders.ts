import { useContext, useEffect, useState } from "react";
import { BASE_URL } from "../constants/config";
import { OrderContext } from "../context/OrderContext";
import { OrderItem } from "../types/order.types";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../types/navigation.types";

export const useOrders = () => {
  const { navigate } = useNavigation<StackNavigationProp<RootStackParamList>>();
  const {
    orderItems,
    addItem,
    removeItem,
    serviceFee,
    tax,
    total,
    subtotal,
    orderItemCount,
    restaurantId,
    setRestaurantId,
    resetOrderValues,
  } = useContext(OrderContext);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const placeOrder = () => {
    const payload = {
      items: orderItems.map((item: OrderItem) => ({
        menuItemId: item.menuItemId,
      })),
      restaurantId,
      total,
    };

    setIsLoading(true);
    axios
      .post(
        `${BASE_URL}/order`,
        {
          ...payload,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        navigate("OrderConfirmation");
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return {
    orderItems,
    addItem,
    removeItem,
    serviceFee,
    tax,
    total,
    subtotal,
    orderItemCount,
    setRestaurantId,
    isLoading,
    resetOrderValues,
    placeOrder,
  };
};
