import { View, StyleSheet, TouchableOpacity } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { colors } from "../../constants/colors";
import { Body } from "../../components/Typography/Typography";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface HeaderProps {
  onPress: () => void;
  text: string;
}

export const Header = ({ onPress, text }: HeaderProps) => {
  const { top } = useSafeAreaInsets();
  return (
    <View style={[styles.header, { paddingTop: top }]}>
      <TouchableOpacity onPress={onPress}>
        <AntDesign name="arrowleft" size={20} color={colors.black} />
      </TouchableOpacity>
      <Body style={{ fontSize: 20 }}>{text}</Body>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: colors.white,
    position: "relative",
  },
});
