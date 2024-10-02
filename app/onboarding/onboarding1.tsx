import React from "react";
import { View, Image, Text, Pressable } from "react-native";
import { ImageAssets } from "@assets/index";

const Onboarding1Page = () => {
  const imageUri = ImageAssets.onboardingBoat;

  return (
    <View className="flex-1 justify-between items-center pb-[50px]">
      <View className="h-full w-full flex flex-col justify-center items-center gap-y-5 px-10">
        <Image source={imageUri} resizeMethod="resize" resizeMode="contain" className="h-[350px] w-[350px]" />
        <Text className="text-[30px] text-center text-dark font-bold mb-5">We schedule whenever you want</Text>
        <Text className="text-center text-dark mb-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, expedita.</Text>

        <View className="flex flex-row items-center justify-center gap-x-1">
          <View className="h-[8px] w-[30px] rounded-xl bg-primary" />
          <View className="h-[8px] w-[30px] rounded-xl bg-gray-300" />
        </View>
      </View>

      <View className="w-full px-5">
        <Pressable className="w-full h-[50px] bg-primary rounded-2xl items-center justify-center">
          <Text className="text-lg text-white font-bold">NEXT</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Onboarding1Page;
