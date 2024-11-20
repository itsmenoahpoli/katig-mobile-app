import React from "react";
import * as SplashScreen from "expo-splash-screen";
import { NotifierWrapper } from "react-native-notifier";
// import { PanGestureHandler, GestureHandlerGestureEvent, GestureHandlerRootView } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { usePathname, Slot } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { View } from "react-native";
import { useLayout } from "@hooks/index";
import { AppNetworkChecker, HeaderNav, BottomNav } from "@components/index";
import { ROUTES } from "@constants/index";

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
      classStr += "pt-[70px]";
    }

    return classStr;
  };

  return (
    <SafeAreaView className={`flex-1 bg-${baseBackground}`}>
      <StatusBar style="light" />
      <AppNetworkChecker />

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
