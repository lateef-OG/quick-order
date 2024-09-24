import { useLayoutEffect } from "react";
import { View, StyleSheet } from "react-native";
import { colors } from "../../constants/colors";
import { Caption, SubHeading } from "../../components/Typography/Typography";
import { PrimaryButton } from "../../components/Buttons/Buttons";
import { MenuItem } from "../../components/Menu/MenuItem";
import { FlatList } from "react-native";
import { Header } from "../../components/Header/Header";

const menu_data = [1, 2, 3, 4, 5, 6, 7, 8];

export const Menu = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      header: () => (
        <Header text="Tina's Kitchen" onPress={() => navigation.goBack()} />
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={() => (
          <View style={{ paddingHorizontal: 16, paddingTop: 6 }}>
            <Caption>
              Welcome to Tina's Kitchen, where culinary excellence meets cozy
              ambiance. Our menu features a delightful blend of classic
              favorites and innovative dishes, all crafted with the freshest
              ingredients.
            </Caption>
            <SubHeading style={{ fontSize: 18, marginTop: 20 }}>
              Menu
            </SubHeading>
          </View>
        )}
        data={menu_data}
        renderItem={({ item, index }) => {
          const isLastItem = menu_data.length - 1 === index;
          return <MenuItem isLastItem={isLastItem} />;
        }}
        contentContainerStyle={{
          paddingBottom: 120,
        }}
      />
      <View
        style={{
          padding: 16,
          position: "absolute",
          bottom: 10,
          width: "100%",
        }}
      >
        <PrimaryButton
          label="Proceed to checkout 2 items"
          onPress={() => navigation.navigate("Checkout")}
        />
      </View>
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
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
