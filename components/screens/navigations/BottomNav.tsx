import React from "react";
import { View, Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export type Props = {};

export const BottomNav: React.FC<Props> = (props) => {
  return (
    <View className="w-full h-[70px] border-t border-primary bg-white flex justify-center absolute bottom-0">
      <Text className="text-white text-[24px] font-bold">KATIG</Text>
    </View>
  );
};
