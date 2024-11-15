import React from "react";
import { Slot } from "expo-router";
import { useLayout } from "@hooks/index";

export default (): JSX.Element => {
  const { setBaseBackground, setShowHeaderNav, setShowFooterNav } = useLayout();

  React.useEffect(() => {
    setBaseBackground("primary");
    setShowHeaderNav(true);
    setShowFooterNav(true);
  }, []);

  return <Slot />;
};
