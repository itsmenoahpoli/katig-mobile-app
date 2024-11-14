import React from "react";
import { Slot } from "expo-router";
import { View, Text } from "react-native";
import { HeaderNav } from "@components/index";
import { useLayout } from "@hooks/layout.hook";

export default (): JSX.Element => {
  const { setBaseBackground } = useLayout();

  React.useEffect(() => {
    setBaseBackground("white");
  }, []);

  return (
    <View className="flex-1 bg-white relative">
      <View className="w-full absolute top-0 z-50">
        <HeaderNav color="primary" />
      </View>

      <View className="flex-1 pt-[70px]">
        <Slot />
      </View>
      <Text className="fixed bottom-5">Footer</Text>
    </View>
  );
};
