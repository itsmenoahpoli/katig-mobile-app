import React from "react";
import { Slot } from "expo-router";
import { useLayout } from "@hooks/index";

export default function () {
  const { setBaseBackground } = useLayout();

  React.useEffect(() => {
    setBaseBackground("primary");
  }, []);

  return <Slot />;
}
