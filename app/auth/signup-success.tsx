import React from "react";
import { Text, View, Image, ActivityIndicator } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useAuthService } from "@services/index";
import { imageAssets } from "@assets/index";

export default (): JSX.Element => {
  const { email, password } = useLocalSearchParams();
  const { authLogin } = useAuthService();

  React.useEffect(() => {
    setTimeout(async () => {
      if (email && password) {
        await authLogin({
          email: email.toString(),
          password: password.toString(),
        });
      }
    }, 2000);
  }, []);

  return (
    <View className="flex-1 items-center justify-center space-y-2">
      <Image
        source={imageAssets.success}
        className="h-[150px] w-[150px] mb-5"
      />
      <Text className="text-2xl text-green-900 font-extrabold">Hooray!</Text>
      <Text className="text-lg text-gray-500 mb-4">
        You have successfully registered
      </Text>
      <ActivityIndicator />
      <Text className="text-xs text-gray-400">Redirecting to home page</Text>
    </View>
  );
};
