import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { colors } from "../../constants/colors";
import { Body, Caption } from "../../components/Typography/Typography";
import { MenuItemType } from "../../types/menu.types";
import { arrayToSentence } from "../../utils/helper";

const FOOD_IMAGE_HEIGHT = 110;

interface MenuItemProps {
  isLastItem: boolean;
  item: MenuItemType;
  addItem: () => void;
}

export const MenuItem = ({ isLastItem, item, addItem }: MenuItemProps) => {
  const { name, description, price, ingredients, calories } = item;
  return (
    <View
      style={{
        flexDirection: "row",
        gap: 16,
        paddingHorizontal: 16,
        paddingVertical: 18,
        borderBottomColor: colors.grey,
        borderBottomWidth: isLastItem ? 0 : 1,
      }}
    >
      <View style={{ flexShrink: 1 }}>
        <Body style={{ marginBottom: 6 }}>{name}</Body>
        <Caption style={{ fontWeight: "500" }}>{description}</Caption>
        <Caption style={{ marginVertical: 6 }}>
          {arrayToSentence(ingredients)}
        </Caption>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: "auto",
          }}
        >
          <Body style={{ fontWeight: "600" }}>{`$${price}`}</Body>
          <Caption style={{ fontSize: 14, fontWeight: "600" }}>
            {`contains ${calories} calories`}
          </Caption>
        </View>
      </View>
      <View>
        <TouchableOpacity style={styles.addContainer} onPress={addItem}>
          <View
            style={{
              height: FOOD_IMAGE_HEIGHT * 0.7,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Ionicons name="fast-food-outline" size={40} color={colors.black} />
          </View>
          <View
            style={{
              height: FOOD_IMAGE_HEIGHT * 0.3,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: colors.orange,
            }}
          >
            <Body style={{ fontFamily: "Inter-SemiBold" }}>Add+</Body>
          </View>
        </TouchableOpacity>
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
  addContainer: {
    height: FOOD_IMAGE_HEIGHT,
    width: 100,
    borderRadius: 5,
    overflow: "hidden",
    borderColor: colors.grey,
    borderWidth: 0.5,
  },
});
