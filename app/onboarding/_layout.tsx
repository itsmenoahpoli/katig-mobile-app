import React from "react";
import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useLayout } from "@hooks/index";

export default function () {
  const { setBaseBackground, setShowHeaderNav, setShowFooterNav } = useLayout();

  React.useEffect(() => {
    setBaseBackground("white");
    setShowHeaderNav(false);
    setShowFooterNav(false);
  }, []);

  return (
    <>
      <StatusBar style="light" />
      <Slot />
    </>
  );
}
