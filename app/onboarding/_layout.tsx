import React from "react";
import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useLayoutStore } from "@stores/index";

export default function () {
  const { SET_BASE_BACKGROUND } = useLayoutStore();

  React.useEffect(() => {
    SET_BASE_BACKGROUND("white");
  }, []);

  return (
    <>
      <StatusBar style="light" />
      <Slot />
    </>
  );
}
