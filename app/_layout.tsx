import React from "react";
import * as SplashScreen from "expo-splash-screen";
import { usePathname, Slot } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, StatusBar } from "react-native";
import { useLayout } from "@hooks/index";
import {
  AppNetworkChecker,
  AppToast,
  HeaderNav,
  BottomNav,
} from "@components/index";

SplashScreen.hideAsync();

export default function (): JSX.Element {
  const pathname = usePathname();
  const isOnSplashscreen = pathname === "/";
  const { setBaseBackground, baseBackground, showHeaderNav } = useLayout();

  React.useEffect(() => {
    setBaseBackground("primary");
  }, []);

  const getContentClassname = () => {
    let classStr = "flex-1 ";

    if (showHeaderNav && !isOnSplashscreen) {
      classStr += "pt-[60px]";
    }

    return classStr;
  };

  return (
    <SafeAreaView className={`flex-1 bg-${baseBackground}`}>
      <StatusBar barStyle="light-content" />
      <AppNetworkChecker />
      <AppToast />

      <View className="flex-1 bg-white relative">
        {!isOnSplashscreen ? (
          <View className="w-full absolute top-0 z-10">
            <HeaderNav color="primary" />
          </View>
        ) : null}

        <View className={getContentClassname()}>
          <Slot />
        </View>

        {!isOnSplashscreen ? (
          <View className="z-10">
            <BottomNav />
          </View>
        ) : null}
      </View>
    </SafeAreaView>
  );
}
