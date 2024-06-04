import { DrawerScreenProps } from "@react-navigation/drawer";
import React from "react";
import { Button, Text, View } from "react-native";
import { RootDrawerParamList } from "../types";

type Props = DrawerScreenProps<RootDrawerParamList, "Home">;

export default function HomeScreen({ navigation }: Props) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Settings"
        onPress={() => navigation.navigate("Settings", { userId: 123 })}
      />
    </View>
  );
}
