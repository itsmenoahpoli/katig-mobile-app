import React from "react";
import { NotifierWrapper } from "react-native-notifier";
import { PanGestureHandler, GestureHandlerGestureEvent, GestureHandlerRootView } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { Slot } from "expo-router";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.hideAsync();

export default function () {
  const onGestureEvent = (event: GestureHandlerGestureEvent) => {
    console.log("PanGesture event:", event.nativeEvent);
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <PanGestureHandler onGestureEvent={onGestureEvent}>
        <NotifierWrapper>
          <StatusBar style="auto" />
          <Slot />
        </NotifierWrapper>
      </PanGestureHandler>
    </GestureHandlerRootView>
  );
}
