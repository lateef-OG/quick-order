import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";
import { Body, Heading } from "../Typography/Typography";
import { PrimaryButton } from "../Buttons/Buttons";

interface EmptyMenuProps {
  message: string;
}

export const EmptyMenu = ({ message }: EmptyMenuProps) => {
  const { goBack } = useNavigation();

  return (
    <View style={styles.container}>
      <Heading>Opps!</Heading>
      <Body style={styles.textStyle}>{message}</Body>
      <PrimaryButton 
        label="Scan Again"
        onPress={goBack}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  textStyle: {
    marginTop: 10,
    marginBottom: 30,
  },
});
