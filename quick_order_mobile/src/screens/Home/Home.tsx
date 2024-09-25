import { View, Dimensions } from "react-native";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../types/navigation.types";
import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Heading, SubHeading } from "../../components/Typography/Typography";
import { QRScanner } from "../../components/Home/QRScanner";

const { width, height } = Dimensions.get("window");

export const Home = () => {
  const { navigate } = useNavigation<StackNavigationProp<RootStackParamList>>();
  const { top, bottom } = useSafeAreaInsets();
  const isFocused = useIsFocused();

  return (
    <View
      style={[styles.container, { paddingTop: top, paddingBottom: bottom }]}
    >
      <View style={styles.innerContainer}>
        <Heading>Your Culinary</Heading>
        <Heading style={styles.pageTitle}>Adventure Awaits</Heading>
        <View style={styles.cameraContainer}>
          {isFocused && (
            <QRScanner
              handleScan={({ data }) => {
                navigate("Menu", { id: data });
              }}
            />
          )}
        </View>
        <SubHeading style={styles.instruction}>
          Scan the QR code to explore mouthwatering meal options and place your
          order with ease!
        </SubHeading>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: colors.white,
  },
  innerContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    paddingBottom: 100,
  },
  cameraContainer: {
    width: 0.6 * width,
    height: 0.4 * height,
    borderRadius: 20,
    overflow: "hidden",
  },
  pageTitle: {
    marginBottom: 30,
  },
  instruction: {
    textAlign: "center",
    marginTop: 50,
    color: colors.darkGrey,
  },
});
