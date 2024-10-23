import React from "react";
import { View, Text, Image } from "react-native";
import { imageAssets } from "@assets/index";
import { SigninForm } from "@components/index";

const SigninPage: React.FC = () => {
  return (
    <View className="flex-1 justify-center items-center bg-primary pt-[50px]">
      <Image source={imageAssets.brandLogoOnly} className="h-[150px] w-[150px]" />
      <Text className="text-[40px] text-white font-bold mt-5">WELCOME</Text>
      <Text className="text-lg text-white mb-5">Log in to your account</Text>

      <View className="w-4/5">
        <SigninForm />
      </View>
    </View>
  );
};

export default SigninPage;
