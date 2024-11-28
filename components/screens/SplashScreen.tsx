import React from "react";
import { useRouter } from "expo-router";
import { View, Image, Text, ActivityIndicator } from "react-native";
import { useAuth } from "@hooks/index";
import { imageAssets } from "@assets/index";
import { ROUTES } from "@constants/index";

export const SplashScreen: React.FC = () => {
  const router = useRouter();
  const { IS_AUTHENTICATED } = useAuth();

  React.useEffect(() => {
    setTimeout(() => {
      // router.push(ROUTES.USER_EMERGENCIES);

      if (IS_AUTHENTICATED) {
        router.push(ROUTES.USER_HOME);
      } else {
        router.push(ROUTES.AUTH_SIGNIN);
      }
    }, 3000);
  }, []);

  return (
    <View className="flex-1 items-center justify-center bg-primary relative z-50">
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
