import React from "react";
import { View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export type Props = {
  variant: "transparent" | "primary" | "light" | "dark";
};

export const HeaderNav: React.FC<Props> = ({}) => {
  return <View className="w-full h-[80px] bg-white"></View>;
};
