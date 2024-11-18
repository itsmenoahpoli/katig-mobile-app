import React from "react";
import { Feather, FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
import { View, Pressable } from "react-native";
import { useLayout } from "@hooks/index";

type Props = {};
type BottomNavItem = {
  icon: JSX.Element;
  url: string;
};

const ICON_COLOR = "#339AF0";
const ICON_SIZE = 32;

const navItems: BottomNavItem[] = [
  {
    icon: <Feather name="home" size={ICON_SIZE} color={ICON_COLOR} />,
    url: "/user/home",
  },
  {
    icon: <MaterialCommunityIcons name="notebook-outline" size={ICON_SIZE} color={ICON_COLOR} />,
    url: "/user/bookings",
  },
  {
    icon: <MaterialCommunityIcons name="bell-ring-outline" size={ICON_SIZE} color={ICON_COLOR} />,
    url: "/user/notifications",
  },
  {
    icon: <FontAwesome5 name="user" size={28} color={ICON_COLOR} />,
    url: "/user/account",
  },
];

export const BottomNav: React.FC<Props> = (props) => {
  const { showBottomNav } = useLayout();

  const handleRedirect = (url: string) => {
    //
  };

  if (!showBottomNav) return <></>;

  return (
    <View className="w-full h-[70px] flex flex-row justify-between items-center bg-slate-50 border-t border-gray-200 px-8">
      {navItems.map((item: BottomNavItem) => (
        <Pressable key={item.url}>{item.icon}</Pressable>
      ))}
    </View>
  );
};
