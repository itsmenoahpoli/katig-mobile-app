import React from "react";
import { Slot } from "expo-router";
import { Text } from "react-native";
import { useLayout } from "@hooks/index";
import { ScrollView } from "react-native-gesture-handler";

export default (): JSX.Element => {
  const { setBaseBackground, setShowHeaderNav, setShowFooterNav } = useLayout();

  React.useEffect(() => {
    setBaseBackground("primary");
    setShowHeaderNav(true);
    setShowFooterNav(true);
  }, []);

  return <Slot />;
};
