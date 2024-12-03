import React from "react";
import { useRouter } from "expo-router";
import { View, Text, TextInput, Pressable, ActivityIndicator } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { useAuthService } from "@services/index";
import { useToasts } from "@hooks/index";
import type { SignUpPayload } from "@@types/auth.d";

export const SignupForm: React.FC = () => {
  const router = useRouter();
  const { authSignup } = useAuthService();
  const { showToast, toastTypes } = useToasts();

  const [loading, setLoading] = React.useState<boolean>(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpPayload>({
    // defaultValues: {
    //   fullname: "John Doe 7",
    //   username: "johndoe7",
    //   email: "johndoe7@domain.com",
    //   password: "12345678",
    //   confirmPassword: "12345678",
    // },
  });

  const handleGoToSignin = () => {
    router.push("/auth/signin");
  };

  const handleSignup = handleSubmit(async (formData) => {
    setLoading(true);

    if (formData.password !== formData.confirmPassword) {
      showToast("Passwords must match", toastTypes.ERROR);
    } else {
      await authSignup(formData);
    }

    setLoading(false);
  });

  return (
    <View className="w-full flex flex-col gap-y-3">
      <View>
        <Controller
          control={control}
          name="fullname"
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
        {errors.fullname && (
          <Text className="text-white">{errors.fullname?.message}</Text>
        )}
      </View>

      <View>
        <Controller
          control={control}
          name="username"
          rules={{
            required: "Username is required",
            minLength: {
              value: 3,
              message: "Username must be at least 3 characters long",
            },
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
        {errors.username && (
          <Text className="text-white">{errors.username?.message}</Text>
        )}
      </View>

      <View>
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
        {errors.email && (
          <Text className="text-white">{errors.email?.message}</Text>
        )}
      </View>

      <View>
        <Controller
          control={control}
          name="password"
          rules={{
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters long",
            },
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              className="w-full bg-white rounded-full p-4"
              placeholder="Password"
              autoCapitalize="none"
              textContentType="none"
              secureTextEntry
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
            />
          )}
        />
        {errors.password && (
          <Text className="text-white">{errors.password?.message}</Text>
        )}
      </View>

      <View>
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
              textContentType="none"
              secureTextEntry
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
            />
          )}
        />
        {errors.confirmPassword && (
          <Text className="text-white">{errors.confirmPassword?.message}</Text>
        )}
      </View>

      <Pressable
        className="h-[45px] w-full flex justify-center items-center bg-[#fcfcfc] rounded-full px-3 mb-3"
        onPress={handleSignup}
      >
        <Text className="text-lg font-medium">
          {loading ? <ActivityIndicator /> : "REGISTER"}
        </Text>
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
