import React from "react";
import { StatusBar } from "expo-status-bar";
import { Slot } from "expo-router";

export default function () {
  return (
    <>
      <StatusBar style="auto" />
      <Slot />
    </>
  );
}
