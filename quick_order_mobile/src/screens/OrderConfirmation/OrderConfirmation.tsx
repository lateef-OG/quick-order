import { StyleSheet, View } from "react-native";
import { colors } from "../../constants/colors";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Body, SubHeading } from "../../components/Typography/Typography";
import { PrimaryButton } from "../../components/Buttons/Buttons";

export const OrderConfirmation = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <AntDesign name="checkcircle" size={80} color={colors.green} />
      <SubHeading style={{ marginTop: 30 }}>
        Order Placed Successfully!
      </SubHeading>
      <Body style={{ textAlign: "center", marginTop: 16, marginBottom: 50 }}>
        Your order is being prepared by the kitchen. You'll get updates until
        your order is ready.
      </Body>
      <PrimaryButton
        label="Got it!"
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
});
