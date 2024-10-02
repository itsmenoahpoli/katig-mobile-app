import React from "react";
import { useRouter } from "expo-router";
import { View, Image } from "react-native";
import { imageAssets } from "@assets/index";

export const SplashScreen: React.FC = () => {
  const router = useRouter();

  React.useEffect(() => {
    setTimeout(() => {
      router.push("/onboarding/onboarding1");
    }, 4000);
  }, []);

  return (
    <View className="flex-1 items-center justify-center bg-primary">
      <Image source={imageAssets.brandLogo} resizeMethod="resize" resizeMode="contain" className="h-[350px] w-[350px]" />
    </View>
  );
};
