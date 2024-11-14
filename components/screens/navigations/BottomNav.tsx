import React from "react";
import Feather from "@expo/vector-icons/Feather";
import { View, Text, Pressable } from "react-native";

export type Props = {};

export const BottomNav: React.FC<Props> = ({}) => {
  return (
    <View className="w-full h-[60px] flex flex-row bg-white">
      <Pressable>
        <Feather name="menu" size={24} color="white" />
      </Pressable>
    </View>
  );
};
