import { useState } from "react";
import { BASE_URL } from "../constants/config";
import axios from "axios";

export const useMenu = () => {
  const [menu, setMenu] = useState(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const getRestaurantMenu = (id: string) => {
    setIsLoading(true);
    axios
      .get(`${BASE_URL}/menu/${id}`)
      .then((res) => {
        const { data } = res;
        setMenu(data.data);
      })
      .catch((e) => {
        console.log(e);
        const errMsg = e.message.includes("404")
          ? "Menu doesn't exist"
          : "Unable to get Menu, Try again";
        setError(errMsg);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return {
    menu,
    error,
    isLoading,
    getRestaurantMenu,
  };
};
