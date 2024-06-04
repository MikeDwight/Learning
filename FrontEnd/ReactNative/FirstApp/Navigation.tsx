import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import DrawerNavigator from "./DrawerNavigator";

export default function Navigation() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}
