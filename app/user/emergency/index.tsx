import React from "react";
import { View, Image } from "react-native";
import { imageAssets } from "@assets/index";
import { EmergencyCard } from "@components/index";

export default (): JSX.Element => {
  return (
    <View className="flex-1 bg-primary">
      <Image source={imageAssets.emergenciesBg} className="h-[350px] w-[102%] -ml-1 border border-primary mb-8" />

      <View className="w-full flex flex-col px-8">
        <EmergencyCard title="EMERGENCY & SAFETY GUIDELINES" subtitle="Secure your safety trip!" />
        <EmergencyCard title="BOAT OWNER & EMERGENCY CONTACTS" />
      </View>
    </View>
  );
};
