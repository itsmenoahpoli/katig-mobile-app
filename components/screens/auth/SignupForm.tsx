import React from "react";
import { useRouter } from "expo-router";
import { View, Text, TextInput, Pressable } from "react-native";

export const SignupForm: React.FC = () => {
  const router = useRouter();

  const handleGoToSignin = () => {
    router.push("/auth/signin");
  };

  return (
    <View className="w-full flex flex-col gap-y-3">
      <TextInput className="w-full bg-white rounded-full p-4" placeholder="Full Name" autoCapitalize="none" />
      <TextInput className="w-full bg-white rounded-full p-4" placeholder="Username" autoCapitalize="none" />
      <TextInput className="w-full bg-white rounded-full p-4" placeholder="E-mail" autoCapitalize="none" />
      <TextInput className="w-full bg-white rounded-full p-4" placeholder="Password" autoCapitalize="none" />
      <TextInput className="w-full bg-white rounded-full p-4 mb-3" placeholder="Confirm Password" autoCapitalize="none" />

      <Pressable className="w-full flex items-center bg-[#fcfcfc] rounded-full p-4 mb-3">
        <Text className="text-lg font-medium">REGISTER</Text>
      </Pressable>
      <View className="flex flex-row justify-center items-center">
        <Text className="text-blue-100">Already have an account? &nbsp;</Text>
        <Pressable onPress={handleGoToSignin}>
          <Text className="text-white font-medium underline">Sign In</Text>
        </Pressable>
      </View>
    </View>
  );
};