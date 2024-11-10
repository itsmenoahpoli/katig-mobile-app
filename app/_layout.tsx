import React from "react";
import { NotifierWrapper } from "react-native-notifier";
import { PanGestureHandler, GestureHandlerGestureEvent, GestureHandlerRootView } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { Slot } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.hideAsync();

export default function () {
  const onGestureEvent = (event: GestureHandlerGestureEvent) => {
    return event;
    // console.log("PanGesture event:", event.nativeEvent);
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <PanGestureHandler onGestureEvent={onGestureEvent}>
        <SafeAreaView className="flex-1 bg-primary">
          <NotifierWrapper>
            <StatusBar style="light" />
            <Slot />
          </NotifierWrapper>
        </SafeAreaView>
      </PanGestureHandler>
    </GestureHandlerRootView>
  );
}
