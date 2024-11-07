import React from "react";
import { View, Text, Image } from "react-native";
import { imageAssets } from "@assets/index";
import { SigninForm } from "@components/index";

export default (): JSX.Element => {
  return (
    <View className="flex-1 items-center bg-primary pt-[90px]">
      <Image source={imageAssets.brandLogoOnly} className="h-[100px] w-[100px] mb-[50px]" />
      <Text className="text-[40px] text-white font-bold mt-5">WELCOME</Text>
      <Text className="text-lg text-white mb-5">Log in to your account</Text>

      <View className="w-3/4">
        <SigninForm />
      </View>
    </View>
  );
};
