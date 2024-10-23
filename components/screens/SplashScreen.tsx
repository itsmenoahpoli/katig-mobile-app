import React from "react";
import { useRouter } from "expo-router";
import { View, Image, Text } from "react-native";
import { imageAssets } from "@assets/index";

export const SplashScreen: React.FC = () => {
  const router = useRouter();

  React.useEffect(() => {
    setTimeout(() => {
      router.push("/auth/signin");
    }, 4000);
  }, []);

  return (
    <View className="flex-1 items-center justify-center bg-primary relative">
      <Image source={imageAssets.brandLogo} resizeMethod="resize" resizeMode="contain" className="h-[350px] w-[350px]" />
      <Text className="text-blue-100 absolute left-5 bottom-5">App Version 1.0.0</Text>
    </View>
  );
};
