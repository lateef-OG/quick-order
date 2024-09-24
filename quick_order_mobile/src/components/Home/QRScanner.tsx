import { View, Alert } from "react-native";
import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";
import { CameraView, useCameraPermissions } from "expo-camera";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { BarCodeScanningResult } from "expo-camera/build/legacy/Camera.types";

interface QRScannerProps {
  handleScan: (arg: BarCodeScanningResult) => void;
}

export const QRScanner = ({ handleScan }: QRScannerProps) => {
  const [permission, requestPermission] = useCameraPermissions();

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    Alert.alert("Permission", "We need your permission to use the camera", [
      { text: "Grant Permission", onPress: requestPermission },
    ]);
  }

  return (
    <CameraView
      style={styles.camera}
      barcodeScannerSettings={{
        barcodeTypes: ["qr"],
      }}
      onBarcodeScanned={handleScan}
    >
      <MaterialCommunityIcons
        name="scan-helper"
        size={150}
        color={colors.orange}
      />
    </CameraView>
  );
};

const styles = StyleSheet.create({
  camera: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
