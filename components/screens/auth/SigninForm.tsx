import React from "react";
import { useRouter } from "expo-router";
import { View, Text, TextInput, Pressable } from "react-native";

export const SigninForm: React.FC = () => {
  const router = useRouter();

  const handleGoToSignup = () => {
    router.push("/auth/signup");
  };

  return (
    <View className="w-full flex flex-col gap-y-3">
      <TextInput className="w-full bg-white rounded-full p-4" placeholder="E-mail" autoCapitalize="none" autoFocus />
      <TextInput className="w-full bg-white rounded-full p-4 mb-3" placeholder="Password" autoCapitalize="none" secureTextEntry />

      <View className="flex items-end mb-3">
        <Pressable>
          <Text className="text-blue-200 font-medium underline">Forgot Password?</Text>
        </Pressable>
      </View>
      <Pressable className="w-full flex items-center bg-[#fcfcfc] rounded-full py-3 px-4 mb-3">
        <Text className="text-lg font-medium">LOG IN</Text>
      </Pressable>
      <View className="flex flex-row justify-center items-center">
        <Text className="text-blue-100">Don't have an account? &nbsp;</Text>
        <Pressable onPress={handleGoToSignup}>
          <Text className="text-white font-medium underline">Sign Up</Text>
        </Pressable>
      </View>
    </View>
  );
};
