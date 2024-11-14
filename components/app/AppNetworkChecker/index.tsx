import React from "react";
import * as Network from "expo-network";
import { Alert } from "react-native";

export const AppNetworkChecker: React.FC = () => {
  const checkNetworkStatus = async () => {
    const networkState = await Network.getNetworkStateAsync();

    if (!networkState.isConnected && !networkState.isInternetReachable) {
      Alert.alert("You are not connected to the internet");
    }
  };

  React.useEffect(() => {
    checkNetworkStatus();
  }, []);

  return <></>;
};
