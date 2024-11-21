import React from "react";
import { useRouter } from "expo-router";
import { Feather } from "@expo/vector-icons";
import { View, Image, Text, Pressable } from "react-native";
import { imageAssets } from "@assets/index";
import { ROUTES } from "@constants/index";

export default (): JSX.Element => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  const handleGoToSignin = () => {
    router.push(ROUTES.AUTH_SIGNIN);
  };

  return (
    <View className="flex-1 justify-between items-center pb-[50px] relative">
      <Pressable className="absolute top-10 right-10 z-50" onPress={handleBack}>
        <Feather name="arrow-left" color="#6796DC" size={32} />
      </Pressable>
      <View className="h-full w-full flex flex-col justify-center items-center gap-y-5 px-10">
        <Image
          source={imageAssets.onboardingSailor}
          resizeMethod="resize"
          resizeMode="contain"
          className="h-[300px] w-[300px]"
        />
        <View className="flex flex-col mb-5">
          <Text className="text-[30px] text-center text-dark font-bold">
            Fast and safe
          </Text>
          <Text className="text-[30px] text-center text-dark font-bold">
            Onboarding
          </Text>
        </View>

        <Text className="text-lg text-center text-dark mb-5">
          Quick and secure onboarding to get you started right away!
        </Text>

        <View className="flex flex-row items-center justify-center gap-x-1">
          <View className="h-[8px] w-[30px] rounded-xl bg-gray-300" />
          <View className="h-[8px] w-[30px] rounded-xl bg-primary" />
        </View>
      </View>

      <View className="w-full px-5">
        <Pressable className="w-full h-[50px] bg-primary rounded-2xl items-center justify-center">
          <Text
            className="text-lg text-white font-bold"
            onPress={handleGoToSignin}
          >
            GET STARTED
          </Text>
        </Pressable>
      </View>
    </View>
  );
};
