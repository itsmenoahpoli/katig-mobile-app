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
import { useLayout } from "@hooks/index";

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
            <Slot />
          </NotifierWrapper>
        </SafeAreaView>
      </PanGestureHandler>
    </GestureHandlerRootView>
  );
}
