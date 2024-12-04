import React from "react";
import { View, Text, Pressable } from "react-native";

type Props = {
  boatType?: "liner" | "tourist-boat";
  isSelected?: boolean;
  hideCta?: boolean;
};

export const TripInformationCard: React.FC<Props> = (props) => {
  return (
    <View className="min-h-[50px] bg-slate-100 rounded-lg p-5">
      <View className="flex flex-row justify-between items-center">
        <View className="flex flex-col">
          <Text className="text-xs text-red-500">FROM</Text>
          <Text className="text-xs font-extrabold">7:40 AM</Text>
          <Text className="text-sm font-medium">Maniwaya</Text>
          <Text className="text-[10px]">December 02, 2024</Text>
        </View>

        {/* <View className="w-[100px] relative">
          <View className="h-[2px] bg-gray-200" />
        </View> */}

        <View className="flex flex-col">
          <Text className="text-xs text-red-500">TO</Text>
          <Text className="text-xs font-extrabold">8:40 AM</Text>
          <Text className="text-sm font-medium">Buyabod</Text>
          <Text className="text-[10px]">December 02, 2024</Text>
        </View>
      </View>

      <Text className="text-lg font-bold mt-3">P 750.00</Text>

      {props.hideCta ? null : props.isSelected ? (
        <Pressable className="h-[35px] w-full rounded-lg border border-yellow-500 justify-center items-center mt-4">
          <Text className="text-md text-yellow-600 font-medium">Change</Text>
        </Pressable>
      ) : (
        <Pressable className="h-[35px] w-full rounded-lg border border-blue-700 justify-center items-center mt-4">
          <Text className="text-md text-blue-700 font-medium">Select</Text>
        </Pressable>
      )}
    </View>
  );
};
