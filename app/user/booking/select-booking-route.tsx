import React from "react";
import { useRouter } from "expo-router";
import { View, Text, Pressable, ScrollView } from "react-native";
import { TripInformationCard, PaymentProceedFooter } from "@components/index";

export default (): JSX.Element => {
  const router = useRouter();
  const [list] = React.useState([]);

  const handleGoBack = () => {
    router.back();
  };

  return (
    <View className="flex-1 relative">
      <View className="h-[200px] w-full bg-primary absolute top-0 left-0 right-0" />

      <View className="pt-3 px-4">
        <View className="flex flex-row justify-between items-center">
          <View>
            <Text className="text-2xl text-white font-bold">KATIG</Text>
            <Text className="text-md text-white">Book Your Next Trip</Text>
          </View>

          <Pressable onPress={handleGoBack}>
            <Text className="text-xs text-white underline">Go Back</Text>
          </Pressable>
        </View>

        <View className="min-h-[110px] w-full bg-white rounded-xl border border-gray-200 mt-10 mx-auto p-5">
          <View className="flex flex-row justify-between">
            <Text className="text-xs text-gray-500 font-bold mb-3">
              Search Results
            </Text>

            <View className="h-[25px] flex justify-center items-center bg-yellow-500 rounded-md px-2">
              <Text className="text-[10px] text-white">LINER</Text>
            </View>
          </View>

          <View className="flex flex-row justify-between items-center">
            <View className="flex flex-col">
              <Text className="text-lg font-extrabold">Maniwaya</Text>
              <Text className="text-[10px]">December 02, 2024 </Text>
            </View>

            <View className="w-[100px] relative">
              <View className="h-[2px] bg-gray-200" />
            </View>

            <View className="flex flex-col">
              <Text className="text-lg font-extrabold">Buyabod</Text>
            </View>
          </View>
        </View>
      </View>

      <ScrollView className="flex-1 flex-col space-y-4 mt-3 px-4">
        {!list.length ? (
          <Text className="text-xs text-gray-700 text-center mt-8">
            No Results Found
          </Text>
        ) : (
          <View className="hidden">
            <TripInformationCard boatType="liner" />
          </View>
        )}
      </ScrollView>

      <PaymentProceedFooter price={750} />
    </View>
  );
};
