import React from "react";
import { View, Text, Pressable } from "react-native";

type Props = {
  price: number;
};

export const PaymentProceedFooter: React.FC<Props> = (props) => {
  return (
    <View className="h-[70px] w-full flex flex-row justify-between items-center bg-secondary absolute bottom-0 left-0 right-0 z-10 px-4">
      <View className="flex flex-col">
        <Text className="text-xs text-white font-medium">Total Cost</Text>
        <Text className="text-lg text-white font-bold">
          P {props.price.toFixed(2)}
        </Text>
      </View>
      <View>
        <Pressable className="bg-green-700 rounded-lg py-2 px-4">
          <Text className="text-sm text-white font-bold">PROCEED</Text>
        </Pressable>
      </View>
    </View>
  );
};
