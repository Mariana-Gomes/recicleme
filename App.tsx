import React from "react";

import "./global.css";

import { Home } from "./src/screens/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RecyclableItems } from "./src/screens/RecyclableItems";
import { RecyclableItem } from "./service/getRecyclableItems";
import { CategoryKey } from "./src/utils/constants";

export type RootStackParamList = {
  Home: undefined;
  RecyclableItems: { items: RecyclableItem[]; category: CategoryKey };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="RecyclableItems"
            component={RecyclableItems}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
