import React from "react";
import { View, ScrollView } from "react-native";
import { HomeNavigation } from "@components/index";

export default (): JSX.Element => {
  return (
    <View className="flex-1 pt-10 px-4">
      <ScrollView className="flex-1 flex-col gap-y-5">
        <HomeNavigation />
      </ScrollView>
    </View>
  );
};
