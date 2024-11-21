import React from "react";
import { useRouter } from "expo-router";
import { View, Image, Text, Pressable } from "react-native";
import { imageAssets } from "@assets/index";
import { ROUTES } from "@constants/index";

export default (): JSX.Element => {
  const router = useRouter();

  const handleNext = () => {
    router.push(ROUTES.ONBOARDING_2);
  };

  return (
    <View className="flex-1 justify-between items-center pb-[50px]">
      <View className="h-full w-full flex flex-col justify-center items-center gap-y-5 px-10">
        <Image
          source={imageAssets.onboardingBoat}
          resizeMethod="resize"
          resizeMode="contain"
          className="h-[350px] w-[350px]"
        />
        <Text className="text-[30px] text-center text-dark font-bold mb-5">
          We schedule whenever trip you want
        </Text>
        <Text className="text-lg text-center text-dark mb-5">
          Book your ideal boat trip with us and choose the perfect time that
          fits your schedule
        </Text>

        <View className="flex flex-row items-center justify-center gap-x-2">
          <View className="h-[6px] w-[30px] rounded-xl bg-primary" />
          <View className="h-[6px] w-[30px] rounded-xl bg-gray-300" />
        </View>
      </View>

      <View className="w-full px-5">
        <Pressable
          className="w-full h-[50px] bg-primary rounded-2xl items-center justify-center"
          onPress={handleNext}
        >
          <Text className="text-lg text-white font-bold">NEXT</Text>
        </Pressable>
      </View>
    </View>
  );
};
