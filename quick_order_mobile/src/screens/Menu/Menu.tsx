import { useEffect, useLayoutEffect } from "react";
import { View, StyleSheet } from "react-native";
import { colors } from "../../constants/colors";
import { Caption, SubHeading } from "../../components/Typography/Typography";
import { PrimaryButton } from "../../components/Buttons/Buttons";
import { MenuItem } from "../../components/Menu/MenuItem";
import { FlatList } from "react-native";
import { Header } from "../../components/Header/Header";
import { useMenu } from "../../hooks/useMenu";
import { LoadingScreen } from "../../components/LoadingScreen/LoadingScreen";
import { EmptyMenu } from "../../components/Menu/EmptyMenu";
import { useOrders } from "../../hooks/useOrders";

export const Menu = ({ navigation, route }) => {
  const { id } = route.params;
  const { menu, error, isLoading, getRestaurantMenu } = useMenu();
  const { addItem, orderItemCount, setRestaurantId } = useOrders();

  useEffect(() => {
    getRestaurantMenu(id);
    setRestaurantId(id);
  }, [id]);

  useLayoutEffect(() => {
    navigation.setOptions({
      header: () => (
        <Header text={menu?.name} onPress={() => navigation.goBack()} />
      ),
    });
  }, [navigation, menu]);

  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={() => (
          <View style={{ paddingHorizontal: 16, paddingTop: 6 }}>
            <Caption>{menu?.description}</Caption>
            {menu && (
              <SubHeading style={{ fontSize: 18, marginTop: 20 }}>
                Menu
              </SubHeading>
            )}
          </View>
        )}
        data={menu?.items}
        renderItem={({ item, index }) => {
          const isLastItem = menu?.items.length - 1 === index;
          return (
            <MenuItem
              isLastItem={isLastItem}
              item={item}
              addItem={() =>
                addItem({
                  menuItemId: item.id,
                  name: item.name,
                  price: item.price,
                })
              }
            />
          );
        }}
        ListEmptyComponent={
          isLoading ? <LoadingScreen /> : <EmptyMenu message={error} />
        }
        contentContainerStyle={{
          paddingBottom: 120,
          flexGrow: 1,
        }}
      />
      {orderItemCount > 0 && (
        <View
          style={{
            padding: 16,
            position: "absolute",
            bottom: 10,
            width: "100%",
          }}
        >
          <PrimaryButton
            label={`Proceed to checkout ${orderItemCount} ${
              orderItemCount > 1 ? "items" : "item"
            }`}
            onPress={() => navigation.navigate("Checkout")}
          />
        </View>
      )}
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
