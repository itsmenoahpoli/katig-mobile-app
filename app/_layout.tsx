import React from "react";
import { StatusBar } from "expo-status-bar";
import { Slot } from "expo-router";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.hideAsync();

export default function () {
  return (
    <>
      <StatusBar style="auto" />
      <Slot />
    </>
  );
}
