import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "../screens/Home/Home";
import { Menu } from "../screens/Menu/Menu";
import { Checkout } from "../screens/Checkout/Checkout";
import { OrderConfirmation } from "../screens/OrderConfirmation/OrderConfirmation";

const Stack = createStackNavigator();

export const OrderNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Menu" component={Menu} />
      <Stack.Screen name="Checkout" component={Checkout} />
      <Stack.Screen
        name="OrderConfirmation"
        component={OrderConfirmation}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
