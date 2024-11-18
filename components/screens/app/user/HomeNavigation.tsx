import React from "react";
import { View, Image, Text, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { imageAssets } from "@assets/index";

export const HomeNavigation: React.FC = () => {
  return (
    <View className="flex flex-col space-y-4">
      <Pressable>
        <View className="h-[200px] w-full flex flex-row bg-red-500 border border-gray-200 rounded-xl p-4">
          <View className="flex justify-center pr-4">
            <Text className="text-xl text-white font-bold">
              Booking & Schedule
            </Text>
            <Text className=" text-gray-100">Book your trip</Text>
          </View>
          <View className="flex justify-center items-end mb-3">
            <Image source={imageAssets.boat} className="h-[150px] w-[150px]" />
          </View>
        </View>
      </Pressable>

      <View className="h-[250px] w-full flex flex-row">
        <View className="h-full w-1/2 pr-3">
          <Pressable>
            <View className="h-full w-full flex flex-col justify-between bg-warning rounded-xl p-5">
              <View className="flex justify-center items-center mb-1">
                <Image
                  source={imageAssets.mapEye}
                  className="h-[120px] w-[120px]"
                />
              </View>
              <View>
                <Text className="text-xl font-bold">Real-Time Tracking</Text>
                <Text>Navigate your trip status</Text>
              </View>
            </View>
          </Pressable>
        </View>

        <View className="h-full w-1/2 flex flex-col">
          <View className="h-[160px] w-full pb-2">
            <Pressable>
              <View className="h-full w-full bg-pink-300 rounded-xl py-2 px-5">
                <View className="flex items-end mb-3">
                  <Image
                    source={imageAssets.salbabida}
                    className="h-[70px] w-[70px]"
                  />
                </View>
                <View>
                  <Text className="font-bold">Emergency & Safety Measures</Text>
                  <Text>Safety Aboard</Text>
                </View>
              </View>
            </Pressable>
          </View>
          <View className="h-[90px] w-full flex items-center pt-2">
            <Pressable>
              <View className="h-full w-full flex justify-center bg-[#85C0FC] rounded-xl py-2 px-5">
                <View className="flex flex-row items-center gap-x-2">
                  <Ionicons name="star" size={24} color="yellow" />
                  <Ionicons name="star" size={24} color="yellow" />
                  <Ionicons name="star" size={24} color="yellow" />
                  <Ionicons name="star" size={24} color="yellow" />
                  <Ionicons name="star" size={24} color="yellow" />
                </View>
                <Text className="text-md font-bold mt-2">
                  Feedback & Ratings
                </Text>
              </View>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};
