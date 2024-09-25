import { StyleProp, StyleSheet, Text, TextStyle } from "react-native";
import { colors } from "../../constants/colors";

interface TextProps {
  children: string | React.ReactNode;
  style?: StyleProp<TextStyle>;
}

export const Heading = ({ children, style }: TextProps) => {
  return <Text style={[styles.heading, style]}>{children}</Text>;
};

export const SubHeading = ({ children, style }: TextProps) => {
  return <Text style={[styles.subHeading, style]}>{children}</Text>;
};

export const Body = ({ children, style }: TextProps) => {
  return <Text style={[styles.body, style]}>{children}</Text>;
};

export const Caption = ({ children, style }: TextProps) => {
  return <Text style={[styles.caption, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  heading: {
    color: colors.black,
    fontSize: 32,
    fontFamily: "Inter-SemiBold",
  },
  subHeading: {
    color: colors.black,
    fontSize: 24,
    fontFamily: "Inter-Medium",
  },
  body: {
    color: colors.black,
    fontSize: 16,
    fontFamily: "Inter",
    fontWeight: "400",
  },
  caption: {
    color: colors.darkGrey,
    fontSize: 14,
    fontFamily: "Inter",
  },
});
