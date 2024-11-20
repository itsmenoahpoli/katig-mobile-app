import React from "react";
import { Slot } from "expo-router";
import { useLayout } from "@hooks/index";

export default function () {
  const { setBaseBackground, setShowHeaderNav, setShowFooterNav } = useLayout();

  React.useEffect(() => {
    setBaseBackground("primary");
    setShowHeaderNav(false);
    setShowFooterNav(false);
  }, []);

  return <Slot />;
}
