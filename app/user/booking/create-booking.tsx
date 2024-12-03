import React from "react";
import { View, Text, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useBookingsService } from "@services/index";
import { CreateBookingForm } from "@components/index";
import type { CreateBookingData } from "@@types/booking";

type BoatTypes = "liner" | "tourist-boat";

export default (): JSX.Element => {
  const { createBooking } = useBookingsService();
  const [selectedBoatType, setSelectedBoatType] = React.useState<BoatTypes | undefined>(undefined);

  const isSelectedBoatType = (boatType: BoatTypes) => {
    return selectedBoatType === boatType;
  };

  const handleSelectBoatType = (type: BoatTypes) => {
    setSelectedBoatType(type);
  };

  const handleCreateBooking = async (formData: CreateBookingData) => {
    return await createBooking(formData);
  };

  return (
    <View className="flex-1 relative">
      <View className="h-[300px] w-full bg-primary absolute top-0 left-0 right-0" />

      <View className="pt-3 px-4">
        <Text className="text-2xl text-white font-bold">KATIG</Text>
        <Text className="text-md text-white">Book Your Next Trip</Text>

        <View className="flex flex-row justify-between mt-5">
          <Pressable
            className={`h-[40px] w-1/2 border border-white flex flex-row justify-start items-center space-x-4 px-5 ${
              isSelectedBoatType("liner")
                ? "bg-yellow-500 border-yellow-700"
                : ""
            }`}
            onPress={() => handleSelectBoatType("liner")}
          >
            <Ionicons name="boat-outline" size={24} color="white" />
            <Text className="text-xs text-white font-bold">LINER</Text>
          </Pressable>
          <Pressable
            className={`h-[40px] w-1/2 border border-white flex flex-row justify-start items-center space-x-4 px-5 ${
              isSelectedBoatType("tourist-boat")
                ? "bg-yellow-500 border-yellow-700"
                : ""
            }`}
            onPress={() => handleSelectBoatType("tourist-boat")}
          >
            <Ionicons name="boat-outline" size={24} color="white" />
            <Text className="text-xs text-white font-bold">TOURIST BOAT</Text>
          </Pressable>
        </View>
      </View>

      <View className="min-h-[200px] w-full bg-white rounded-xl border border-gray-200 mt-10 mx-auto p-5">
        <Text className="text-lg font-bold mb-5">
          Where's your next adventure?
        </Text>

        <CreateBookingForm onCreateBooking={handleCreateBooking} />
      </View>
    </View>
  );
};
