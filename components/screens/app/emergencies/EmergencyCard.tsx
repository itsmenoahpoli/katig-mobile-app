import React from "react";
import { View, Text } from "react-native";

type Props = {
  title: string;
  subtitle?: string;
};

export const EmergencyCard: React.FC<Props> = (props) => {
  return (
    <View className="min-h-[100px] w-full flex flex-row space-x-3 bg-secondary rounded-2xl p-3 mb-5">
      <View className="w-1/3 bg-primary rounded-xl"></View>
      <View className="w-2/3">
        <Text className="text-md text-white font-bold">{props.title}</Text>
        <Text className="text-xs text-gray-200">{props.subtitle}</Text>
      </View>
    </View>
  );
};
