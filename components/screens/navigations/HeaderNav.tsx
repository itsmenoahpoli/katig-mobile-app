import React from "react";
import Feather from "@expo/vector-icons/Feather";
import { View, Text, Pressable } from "react-native";
import { HomeSidebar } from "./sidebars/HomeSidebar";

export type Props = {
  color?: "primary" | "white" | "black";
};

export const HeaderNav: React.FC<Props> = (props) => {
  const [sidebarOpen, setSidebarOpen] = React.useState<boolean>(false);

  const getBackgroundColor = () => {
    if (!props.color) return "bg-none";

    return `bg-${props.color}`;
  };

  const toggleSidebar = () => {
    setSidebarOpen((prevState) => !prevState);
  };

  return (
    <>
      <HomeSidebar isOpen={sidebarOpen} onClose={toggleSidebar} />

      <View
        className={`w-full h-[70px] flex-row items-center bg-white rounded-b-2xl px-5 relative ${getBackgroundColor()}`}
      >
        <Pressable className="mr-3" onPress={toggleSidebar}>
          <Feather name="menu" size={24} color="white" />
        </Pressable>

        <Text className="text-lg text-white font-bold">KATIG</Text>
      </View>
    </>
  );
};
