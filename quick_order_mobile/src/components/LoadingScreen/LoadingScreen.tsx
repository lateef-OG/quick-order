import { Image, StyleSheet, View, Animated, Easing } from "react-native";
import { useEffect, useRef } from "react";
import { colors } from "../../constants/colors";

export const LoadingScreen = ({ translucent }: { translucent?: boolean }) => {
  const scaleValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(scaleValue, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
          easing: Easing.linear,
        }),
        Animated.timing(scaleValue, {
          toValue: 0,
          duration: 400,
          useNativeDriver: true,
          easing: Easing.linear,
        }),
      ])
    ).start();
  }, []);

  const scale = scaleValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0.7, 1],
  });

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: translucent
            ? "rgba(255, 255, 255, .3)"
            : colors.white,
        },
      ]}
    >
      <Animated.View style={{ transform: [{ scale }] }}>
        <Image
          source={require("../../assets/img/food.png")}
          style={styles.icon}
        />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
  },
  icon: {
    height: 80,
    width: 80,
    objectFit: "contain",
  },
});
