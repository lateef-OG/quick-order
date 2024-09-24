import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { colors } from "../../constants/colors";
import { ReactElement } from "react";

interface PrimaryButtonProps {
  label: string;
  onPress: () => void;
  leadingIcon?: ReactElement;
  trailingIcon?: ReactElement;
}

export const PrimaryButton = ({
  label,
  onPress,
  leadingIcon,
  trailingIcon,
}: PrimaryButtonProps) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      {leadingIcon}
      <Text style={styles.buttonLabel}>{label}</Text>
      {trailingIcon}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "100%",
    height: 50,
    borderRadius: 5,
    backgroundColor: colors.orange,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },
  buttonLabel: {
    color: colors.white,
    fontSize: 18,
    fontWeight: "500",
    fontFamily: "Inter-Medium",
  },
});
