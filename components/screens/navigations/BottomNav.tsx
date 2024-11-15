import React from "react";
import Feather from "@expo/vector-icons/Feather";
import { View, Text, Pressable } from "react-native";
import { useLayout } from "@hooks/index";

export type Props = {};

export const BottomNav: React.FC<Props> = (props) => {
  const { showBottomNav } = useLayout();

  if (!showBottomNav) return <></>;

  return (
    <View className="w-full h-[60px] flex flex-row justify-center items-center bg-white border-t border-gray-200 px-5">
      <Pressable>
        <Feather name="menu" size={32} color="black" />
      </Pressable>
    </View>
  );
};
