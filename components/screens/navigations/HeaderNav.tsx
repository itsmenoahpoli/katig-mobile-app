import React from "react";
import { View, Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export type Props = {
  variant: "transparent" | "primary" | "white";
  isBase?: boolean;
  title?: string;
  hasGoBack?: string;
};

export const HeaderNav: React.FC<Props> = (props) => {
  const getBackgroundColor = () => {
    if (props.variant === "transparent") return "bg-none";

    return `bg-${props.variant}`;
  };

  return (
    <View className={`w-full flex justify-center h-[60px] rounded-b-lg px-5 ${getBackgroundColor()}`}>
      <Text className="text-white text-[24px] font-bold">KATIG</Text>
    </View>
  );
};
