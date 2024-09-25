import { useEffect, useLayoutEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Header } from "../../components/Header/Header";
import { colors } from "../../constants/colors";
import { Body, Caption } from "../../components/Typography/Typography";
import Feather from "@expo/vector-icons/Feather";
import { PrimaryButton } from "../../components/Buttons/Buttons";
import { useOrders } from "../../hooks/useOrders";
import { OrderItem } from "../../types/order.types";
import { LoadingScreen } from "../../components/LoadingScreen/LoadingScreen";

export const Checkout = ({ navigation }) => {
  const {
    orderItems,
    orderItemCount,
    subtotal,
    tax,
    serviceFee,
    total,
    removeItem,
    isLoading,
    placeOrder,
  } = useOrders();

  useLayoutEffect(() => {
    navigation.setOptions({
      header: () => (
        <Header text="Checkout" onPress={() => navigation.goBack()} />
      ),
    });
  }, [navigation]);

  useEffect(() => {
    if (orderItemCount === 0) {
      navigation.goBack();
    }
  }, [orderItemCount]);

  return (
    <ScrollView style={styles.container}>
      <Body style={{ fontWeight: "500", marginBottom: 20 }}>Order Summary</Body>
      <View style={{ gap: 16 }}>
        {orderItems.map((item: OrderItem) => {
          const { menuItemId, name, price } = item;
          return (
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
              key={menuItemId}
            >
              <View style={{ gap: 4 }}>
                <Body>{name}</Body>
                <Caption>${price}</Caption>
              </View>
              <TouchableOpacity
                style={{
                  height: 36,
                  width: 36,
                  borderRadius: 20,
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onPress={() => removeItem(menuItemId)}
              >
                <Feather name="trash-2" size={18} color={colors.red} />
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
      <View
        style={{
          borderTopWidth: 1,
          borderTopColor: colors.grey,
          marginTop: 30,
          paddingVertical: 30,
          gap: 8,
        }}
      >
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Body>
            Sub-total(
            {`${orderItemCount} ${orderItemCount > 1 ? "items" : "item"}`})
          </Body>
          <Body>${subtotal}</Body>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Body>Service Fee</Body>
          <Body>${serviceFee}</Body>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Body>Tax</Body>
          <Body>${tax}</Body>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Body style={{ fontWeight: "600" }}>Total</Body>
          <Body style={{ fontWeight: "600" }}>${total}</Body>
        </View>
      </View>
      <PrimaryButton label="Place Order" onPress={placeOrder} />
      {isLoading && <LoadingScreen translucent />}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 16,
    position: "relative",
  },
});
