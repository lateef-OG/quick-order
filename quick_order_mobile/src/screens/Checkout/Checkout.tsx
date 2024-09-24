import { useLayoutEffect } from "react";
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

export const Checkout = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      header: () => (
        <Header text="Checkout" onPress={() => navigation.goBack()} />
      ),
    });
  }, [navigation]);

  return (
    <ScrollView style={styles.container}>
      <Body style={{ fontWeight: "500", marginBottom: 20 }}>Order Summary</Body>
      <View style={{ gap: 16 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ gap: 4 }}>
            <Body>Rice & Beans</Body>
            <Caption>$10.00</Caption>
          </View>
          <TouchableOpacity
            style={{
              height: 36,
              width: 36,
              borderRadius: 20,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Feather name="trash-2" size={18} color={colors.red} />
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ gap: 4 }}>
            <Body>Jollof Rice</Body>
            <Caption>$9.99</Caption>
          </View>
          <TouchableOpacity
            style={{
              height: 32,
              width: 32,
              borderRadius: 16,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Feather name="trash-2" size={18} color={colors.red} />
          </TouchableOpacity>
        </View>
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
          <Body>Sub-total(1 item)</Body>
          <Body>$19.99</Body>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Body>Service Fee</Body>
          <Body>$1.99</Body>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Body>Tax</Body>
          <Body>$1.99</Body>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Body style={{ fontWeight: "600" }}>Total</Body>
          <Body style={{ fontWeight: "600" }}>$21.99</Body>
        </View>
      </View>
      <PrimaryButton
        label="Place Order"
        onPress={() => navigation.navigate("OrderConfirmation")}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 16,
  },
});
