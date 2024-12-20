import React from "react";
import { useRouter } from "expo-router";
import {
  Feather,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { View, Pressable } from "react-native";
import { useLayout } from "@hooks/index";
import { ROUTES } from "@constants/index";

type Props = {};
type BottomNavItem = {
  icon: JSX.Element;
  url: string;
};

const ICON_COLOR = "#339AF0";
const ICON_SIZE = 28;

const navItems: BottomNavItem[] = [
  {
    icon: <Feather name="home" size={ICON_SIZE} color={ICON_COLOR} />,
    url: ROUTES.USER_HOME,
  },
  {
    icon: (
      <MaterialCommunityIcons
        name="notebook-outline"
        size={ICON_SIZE}
        color={ICON_COLOR}
      />
    ),
    url: ROUTES.USER_CREATE_BOOKING,
  },
  {
    icon: (
      <MaterialCommunityIcons
        name="bell-ring-outline"
        size={ICON_SIZE}
        color={ICON_COLOR}
      />
    ),
    url: "/user/notifications",
  },
  {
    icon: <FontAwesome5 name="user" size={ICON_SIZE} color={ICON_COLOR} />,
    url: "/user/account",
  },
];

export const BottomNav: React.FC<Props> = (props) => {
  const router = useRouter();
  const { showBottomNav } = useLayout();

  const handleRedirect = (url: string) => {
    router.push(url);
  };

  if (!showBottomNav) return <></>;

  return (
    <View className="w-full h-[50px] flex flex-row justify-between items-center bg-slate-50 px-8">
      {navItems.map((item: BottomNavItem) => (
        <Pressable key={item.url} onPress={() => handleRedirect(item.url)}>
          {item.icon}
        </Pressable>
      ))}
    </View>
  );
};
