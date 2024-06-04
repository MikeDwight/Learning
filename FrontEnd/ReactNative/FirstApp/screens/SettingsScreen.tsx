import { DrawerScreenProps } from "@react-navigation/drawer";
import React from "react";
import { Text, View } from "react-native";
import { RootDrawerParamList } from "../types";

type Props = DrawerScreenProps<RootDrawerParamList, "Settings">;

export default function SettingsScreen({ route }: Props) {
  const { userId } = route.params;

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings Screen</Text>
      <Text>User ID: {userId}</Text>
    </View>
  );
}
