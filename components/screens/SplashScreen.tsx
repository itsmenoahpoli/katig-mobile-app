import React from "react";
import { useRouter } from "expo-router";
import { View, Image } from "react-native";
import { ImageAssets } from "@assets/index";

export const SplashScreen: React.FC = () => {
  const router = useRouter();
  const uri = ImageAssets.brandLogo;

  React.useEffect(() => {
    setTimeout(() => {
      router.push("/onboarding/onboarding1");
    }, 2000);
  }, []);

  return (
    <View className="flex-1 items-center justify-center bg-primary">
      <Image source={uri} resizeMethod="resize" resizeMode="contain" className="h-[500px] w-[500px]" />
    </View>
  );
};
