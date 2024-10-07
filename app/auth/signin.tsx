import React from "react";
import { View, Text, Image } from "react-native";
import { imageAssets } from "@assets/index";

const SigninPage: React.FC = () => {
  return (
    <View className="flex-1 justify-center items-center bg-primary pt-[50px]">
      <Image source={imageAssets.brandLogo} className="h-[250px] w-[250px]" />
      <Text className="text-[46px] text-white">WELCOME</Text>
      <Text className="text-lg text-white">Log in to your account</Text>
    </View>
  );
};

export default SigninPage;
