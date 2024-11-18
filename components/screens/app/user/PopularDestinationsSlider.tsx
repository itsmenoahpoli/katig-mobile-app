import { imageAssets } from "@assets/index";
import React from "react";
import { Text, View, Image, ScrollView } from "react-native";

export const PopularDestinationsSlider: React.FC = () => {
  return (
    <View className="flex flex-col space-y-2">
      <Text className="text-lg font-bold">Popular Destinations</Text>

      <ScrollView showsHorizontalScrollIndicator={false} horizontal>
        <View className="flex flex-row space-x-5">
          <View className="flex flex-col space-y-2">
            <Image
              source={imageAssets.destinationImg1}
              className="h-[120px] w-[240px] rounded-xl"
            />
            <Text className="font-bold">Maniyawa Island</Text>
          </View>
          <View className="flex flex-col space-y-2">
            <Image
              source={imageAssets.destinationImg2}
              className="h-[120px] w-[240px] rounded-xl"
            />
            <Text className="font-bold">Mongpong Island</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
