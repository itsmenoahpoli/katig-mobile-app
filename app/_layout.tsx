import React from "react";
import * as SplashScreen from "expo-splash-screen";
import { NotifierWrapper } from "react-native-notifier";
import { PanGestureHandler, GestureHandlerGestureEvent, GestureHandlerRootView } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { Slot } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { View } from "react-native";
import { useLayout } from "@hooks/index";
import { AppNetworkChecker, HeaderNav, BottomNav } from "@components/index";

SplashScreen.hideAsync();

export default function (): JSX.Element {
  const { setBaseBackground, baseBackground } = useLayout();

  React.useEffect(() => {
    setBaseBackground("primary");
  }, []);

  const onGestureEvent = (event: GestureHandlerGestureEvent) => {
    return event;
    // console.log("PanGesture event:", event.nativeEvent);
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <PanGestureHandler onGestureEvent={onGestureEvent}>
        <SafeAreaView className={`flex-1 bg-${baseBackground}`}>
          <NotifierWrapper>
            <StatusBar style="light" />
            <AppNetworkChecker />

            <View className="flex-1 bg-white relative">
              <View className="w-full absolute top-0 z-50">
                <HeaderNav color="primary" />
              </View>

              <Slot />

              <BottomNav />
            </View>
          </NotifierWrapper>
        </SafeAreaView>
      </PanGestureHandler>
    </GestureHandlerRootView>
  );
}
