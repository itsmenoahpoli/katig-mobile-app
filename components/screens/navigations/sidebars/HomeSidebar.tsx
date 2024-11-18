import React from "react";
import { useRouter } from "expo-router";
import { Animated, View, Pressable, Text } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";

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

  const getDisplayStyle = () => {
    return props.isOpen ? "flex" : "hidden";
  };

  React.useEffect(() => {
    initAnimate();
  }, [props.isOpen]);

  return (
    <Animated.View className={`h-screen bg-secondary absolute top-0 bottom-0 left-0 z-50 pt-4 ${getDisplayStyle()}`} style={[animAttr]}>
      <Pressable onPress={props.onClose}>
        <View className="h-[40px] w-[40px] flex justify-center items-center rounded-full bg-slate-300 ml-5">
          <Entypo name="arrow-left" size={24} color="darkblue" />
        </View>
      </Pressable>

      <View className="h-4/5 w-full bg-primary rounded-t-[50px] relative mt-auto"></View>
    </Animated.View>
  );
};
