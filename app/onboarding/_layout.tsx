import React from "react";
import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";

export default function () {
  return (
    <>
      <StatusBar style="dark" />
      <SafeAreaView className="flex-1">
        <Slot />
      </SafeAreaView>
    </>
  );
}
