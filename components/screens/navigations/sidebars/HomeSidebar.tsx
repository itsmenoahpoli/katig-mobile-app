import React from "react";
import Entypo from "@expo/vector-icons/Entypo";
import { useRouter } from "expo-router";
import { Alert, Animated, View, Pressable, Text } from "react-native";
import { ROUTES } from "@constants/index";

type Props = {
  isOpen?: boolean;
  onClose: () => void;
};

export const HomeSidebar: React.FC<Props> = (props) => {
  const router = useRouter();
  const widthAnim = React.useRef(new Animated.Value(0)).current;

  const animAttr = {
    width: widthAnim.interpolate({
      inputRange: [0, 100],
      outputRange: ["0%", "100%"],
    }),
  };

  const initAnimate = () => {
    Animated.timing(widthAnim, {
      toValue: props.isOpen ? (2 / 3) * 100 : 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  const handleNavigate = (url: string) => {
    router.push(url);
  };

  const handleLogout = () => {
    Alert.alert("You have successfully logged-out!");

    router.push(ROUTES.AUTH_SIGNIN);
  };

  const getDisplayStyle = () => {
    return props.isOpen ? "flex" : "hidden";
  };

  React.useEffect(() => {
    initAnimate();
  }, [props.isOpen]);

  return (
    <Animated.View
      className={`h-screen bg-secondary absolute top-0 bottom-0 left-0 z-50 pt-4 ${getDisplayStyle()}`}
      style={[animAttr]}
    >
      <Pressable onPress={props.onClose}>
        <View className="h-[40px] w-[40px] flex justify-center items-center rounded-full bg-slate-300 ml-5">
          <Entypo name="arrow-left" size={24} color="darkblue" />
        </View>
      </Pressable>

      <View className="h-4/5 w-full flex flex-col space-y-3 bg-primary relative mt-auto pt-[70px] px-5">
        <Pressable className="w-full">
          <Text className="text-white font-bold">HOME OVERVIEW</Text>
        </Pressable>
        <Pressable className="w-full">
          <Text className="text-white font-bold">TERMS & CONDITIONS</Text>
        </Pressable>
        <Pressable className="w-full">
          <Text className="text-white font-bold">PRIVACY & POLICY</Text>
        </Pressable>
        <Pressable className="w-full">
          <Text className="text-white font-bold">HELP</Text>
        </Pressable>
        <Pressable className="w-full" onPress={handleLogout}>
          <Text className="text-red-300 font-bold">LOG OUT</Text>
        </Pressable>
      </View>
    </Animated.View>
  );
};
