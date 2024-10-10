import React from "react";
import { View, Text, Image } from "react-native";
import { imageAssets } from "@assets/index";
import { SignupForm } from "@components/index";

const SignupPage: React.FC = () => {
  return (
    <View className="flex-1 justify-center items-center bg-primary pt-[50px]">
      <Image source={imageAssets.brandLogoOnly} className="h-[200px] w-[200px]" />
      <Text className="text-[40px] text-white font-bold mt-5">REGISTER</Text>
      <Text className="text-lg text-white mb-5">Fill the detail to create an account</Text>

      <View className="w-3/4">
        <SignupForm />
      </View>
    </View>
  );
};

export default SignupPage;
