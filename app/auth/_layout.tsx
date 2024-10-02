import React from "react";
import { Slot } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function () {
  const insets = useSafeAreaInsets();

  return <Slot />;
}
