import React from "react";
import { useRouter } from "expo-router";
import { Text, View } from "react-native";

export default (): JSX.Element => {
  const router = useRouter();

  React.useEffect(() => {
    router.push("/user/emergency");
  }, []);

  return (
    <View className="flex-1 justify-center items-center">
      <Text>Home Screen</Text>
    </View>
  );
};
