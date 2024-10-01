import React from "react";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";

export default function () {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar />
      <Stack screenOptions={{ headerShown: false }} />
    </SafeAreaView>
  );
}
