import React from "react";
import { useRouter } from "expo-router";
import { useForm, Controller } from "react-hook-form";
import { View, Text, TextInput, Pressable } from "react-native";
import { useAuthService } from "@services/index";
import { Credentials } from "@@types/auth";

export const SigninForm: React.FC = () => {
  const router = useRouter();
  const { authLogin } = useAuthService();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Credentials>({
    // defaultValues: {
    //   email: "patrickpolicarpio08@gmail.com",
    //   password: "12345678",
    // },
  });

  const handleGoToSignup = () => {
    router.push("/auth/signup");
  };

  const handleSignin = handleSubmit(async (formData) => {
    return await authLogin(formData);
  });

  return (
    <View className="w-full flex flex-col gap-y-3">
      <View>
        <Controller
          control={control}
          name="email"
          rules={{ required: "Email is required" }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              className="w-full bg-white rounded-full py-3 px-4"
              placeholder="E-mail"
              autoCapitalize="none"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
        />
        {errors.email && (
          <Text style={{ color: "red" }}>{errors.email.message}</Text>
        )}
      </View>

      <View>
        <Controller
          control={control}
          name="password"
          rules={{ required: "Password is required" }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              className="w-full bg-white rounded-full py-3 px-4 mb-3"
              placeholder="Password"
              autoCapitalize="none"
              secureTextEntry
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
        />
        {errors.password && (
          <Text style={{ color: "red" }}>{errors.password.message}</Text>
        )}
      </View>

      <View className="flex items-end mb-3">
        <Pressable>
          <Text className="text-blue-200 font-medium underline">
            Forgot Password?
          </Text>
        </Pressable>
      </View>

      <Pressable
        className="w-full flex items-center bg-[#fcfcfc] rounded-full py-2 px-4 mb-3"
        onPress={handleSignin}
      >
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
