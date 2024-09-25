import { StyleSheet, Text, View } from "react-native";
import { Navigation } from "./src/navigation/Navigation";
import { OrderProvider } from "./src/context/OrderContext";

export default function App() {
  return (
    <OrderProvider>
      <Navigation />
    </OrderProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
