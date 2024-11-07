import React from "react";
import { View, Text, Image } from "react-native";
import { imageAssets } from "@assets/index";
import { SignupForm } from "@components/index";

export default (): JSX.Element => {
  return (
    <View className="flex-1 items-center bg-primary pt-[90px]">
      <Image source={imageAssets.brandLogoOnly} className="h-[100px] w-[100px]" />
      <Text className="text-[36px] text-white font-bold mt-5">REGISTER</Text>
      <Text className="text-lg text-white mb-5">Fill the detail to create an account</Text>

      <View className="w-3/4">
        <SignupForm />
      </View>
    </View>
  );
};
