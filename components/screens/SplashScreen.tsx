import React from "react";
import { useRouter } from "expo-router";
import { View, Image, Text, ActivityIndicator } from "react-native";
import { imageAssets } from "@assets/index";

export const SplashScreen: React.FC = () => {
  const router = useRouter();

  React.useEffect(() => {
    setTimeout(() => {
      router.push("/onboarding/onboarding1");
    }, 400);
  }, []);

  return (
    <View className="flex-1 items-center justify-center bg-primary relative">
      <View className="flex flex-col gap-y-2">
        <Image source={imageAssets.brandLogo} resizeMethod="resize" resizeMode="contain" className="h-[250px] w-[250px]" />
        <ActivityIndicator color="white" />
      </View>
      <View className="absolute bottom-8">
        <Text className="text-blue-100">App Version 1.0.0</Text>
      </View>
    </View>
  );
};
