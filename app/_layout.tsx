import React from "react";
import * as SplashScreen from "expo-splash-screen";
import { NotifierWrapper } from "react-native-notifier";
import {
  PanGestureHandler,
  GestureHandlerGestureEvent,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { Slot } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLayoutStore } from "@stores/index";

SplashScreen.hideAsync();

export default function () {
  const { baseBackground, SET_BASE_BACKGROUND } = useLayoutStore();

  React.useEffect(() => {
    SET_BASE_BACKGROUND("primary");
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
            <Slot />
          </NotifierWrapper>
        </SafeAreaView>
      </PanGestureHandler>
    </GestureHandlerRootView>
  );
}
