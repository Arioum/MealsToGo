import React from "react";
import { View, Text } from "react-native";
import { SafeArea } from "../../../components/utility/safe-area.component"

export const MapsScreen = () => {
  return (
    <SafeArea>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Maps</Text>
      </View>
    </SafeArea>
  );
};
