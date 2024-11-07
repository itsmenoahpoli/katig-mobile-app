import React from "react";
import { useRouter } from "expo-router";
import { View, Text, TextInput, Pressable } from "react-native";
import { useForm, Controller } from "react-hook-form";

export const SignupForm: React.FC = () => {
  const router = useRouter();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  const handleGoToSignin = () => {
    router.push("/auth/signin");
  };

  return (
    <View className="w-full flex flex-col gap-y-3">
      <Controller
        control={control}
        name="fullName"
        rules={{ required: "Full Name is required" }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            className="w-full bg-white rounded-full p-4"
            placeholder="Full Name"
            autoCapitalize="none"
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
          />
        )}
      />
      {errors.fullName && <Text className="text-red-500">{errors.fullName.message?.toString()}</Text>}

      <Controller
        control={control}
        name="username"
        rules={{
          required: "Username is required",
          minLength: { value: 3, message: "Username must be at least 3 characters long" },
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            className="w-full bg-white rounded-full p-4"
            placeholder="Username"
            autoCapitalize="none"
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
          />
        )}
      />
      {errors.username && <Text className="text-red-500">{errors.username?.toString()}</Text>}

      <Controller
        control={control}
        name="email"
        rules={{
          required: "E-mail is required",
          pattern: {
            value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
            message: "Please enter a valid email address",
          },
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            className="w-full bg-white rounded-full p-4"
            placeholder="E-mail"
            autoCapitalize="none"
            keyboardType="email-address"
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
          />
        )}
      />
      {errors.email && <Text className="text-red-500">{errors.email?.toString()}</Text>}

      <Controller
        control={control}
        name="password"
        rules={{
          required: "Password is required",
          minLength: { value: 6, message: "Password must be at least 6 characters long" },
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            className="w-full bg-white rounded-full p-4"
            placeholder="Password"
            autoCapitalize="none"
            secureTextEntry
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
          />
        )}
      />
      {errors.password && <Text className="text-red-500">{errors.password?.toString()}</Text>}

      <Controller
        control={control}
        name="confirmPassword"
        rules={{
          required: "Confirm Password is required",
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            className="w-full bg-white rounded-full p-4 mb-3"
            placeholder="Confirm Password"
            autoCapitalize="none"
            secureTextEntry
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
          />
        )}
      />
      {errors.confirmPassword && <Text className="text-red-500">{errors.confirmPassword?.toString()}</Text>}

      <Pressable className="w-full flex items-center bg-[#fcfcfc] rounded-full p-4 mb-3" onPress={handleSubmit(onSubmit)}>
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
