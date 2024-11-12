import React from "react";
import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { HeaderNav } from "@components/index";

export default function () {
  return (
    <>
      <StatusBar style="auto" />
      <View className="flex-1 h-screen border-4 border-red-800 bg-white">
        <HeaderNav variant="primary" />
        <Slot />
      </View>
    </>
  );
}
