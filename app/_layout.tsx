import React from "react";
import * as SplashScreen from "expo-splash-screen";
import { NotifierWrapper } from "react-native-notifier";
import { PanGestureHandler, GestureHandlerGestureEvent, GestureHandlerRootView } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { Slot } from "expo-router";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLayout } from "@hooks/index";

SplashScreen.hideAsync();

export default function () {
  const { setBaseBackground, baseBackground } = useLayout();

  React.useEffect(() => {
    setBaseBackground("primary");
  }, []);

  const onGestureEvent = (event: GestureHandlerGestureEvent) => {
    // console.log("PanGesture event:", event.nativeEvent);
    return event;
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <PanGestureHandler onGestureEvent={onGestureEvent}>
        <ScrollView className="flex-1" scrollEnabled showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
          <SafeAreaView className={`flex-1 bg-${baseBackground}`}>
            <NotifierWrapper>
              <StatusBar style="light" />
              <Slot />
            </NotifierWrapper>
          </SafeAreaView>
        </ScrollView>
      </PanGestureHandler>
    </GestureHandlerRootView>
  );
}
