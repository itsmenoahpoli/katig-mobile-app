import { useRouter } from "expo-router";
import { View, Text, Pressable, Image } from "react-native";
import { TripInformationCard } from "@components/index";
import { imageAssets } from "@assets/index";
import { ROUTES } from "@constants/index";

export default (): JSX.Element => {
  const router = useRouter();

  const handleGoHome = () => {
    router.push(ROUTES.USER_HOME);
  };

  return (
    <View className="flex-1 relative">
      <View className="h-[300px] w-full bg-primary absolute top-0 left-0 right-0" />

      <View className="pt-3 px-4">
        <View className="flex flex-row justify-between items-center">
          <View>
            <Text className="text-2xl text-white font-bold">KATIG</Text>
            <Text className="text-md text-white">Book Your Next Trip</Text>
          </View>

          <Pressable onPress={handleGoHome}>
            <Text className="text-xs text-white underline">Go Home</Text>
          </Pressable>
        </View>

        <View className="min-h-[200px] w-full bg-white rounded-xl border border-gray-200 mt-10 mx-auto p-5">
          <Image
            source={imageAssets.success}
            className="h-[80px] w-[80px] mx-auto"
          />
          <Text className="text-lg text-center font-bold">
            Hooray! Booking & payment success!
          </Text>
          <Text className="text-xs text-gray-500 text-center">
            Your payment has been successfully sent!
          </Text>
          <Text className="text-xs text-gray-500 text-center">
            Thank you for using our app, enjoy and have a safe trip
          </Text>

          <View className="flex flex-col bg-gray-100 rounded-xl mt-2">
            <TripInformationCard hideCta />

            <View className="border-t border-gray-300 py-4 px-5 -mt-3">
              <Text className="text-xs">
                Boat type: <Text className="font-bold">TOURIST BOAT</Text>
              </Text>

              <View className="pt-3">
                <Text className="text-xs font-bold mb-1">Passengers</Text>
                <View className="flex flex-row justify-between">
                  <Text className="text-xs">Elvin Tolin</Text>
                  <View className="w-[60px]">
                    <Text className="text-xs">P 300.00</Text>
                  </View>
                </View>
                <View className="flex flex-row justify-between">
                  <Text className="text-xs">Ash Sinsoa</Text>
                  <View className="w-[60px]">
                    <Text className="text-xs">P 300.00</Text>
                  </View>
                </View>
                <View className="flex flex-row justify-between">
                  <Text className="text-xs">John Kenneth</Text>
                  <View className="w-[60px]">
                    <Text className="text-xs">P 110.00</Text>
                  </View>
                </View>
                <View className="flex flex-row justify-between">
                  <Text className="text-xs">Booking Fee</Text>
                  <View className="w-[60px]">
                    <Text className="text-xs">P 40.00</Text>
                  </View>
                </View>
              </View>
              <View>
                <View className="flex flex-row justify-between">
                  <Text className="text-sm">Payment method</Text>
                  <Text className="text-xs">Online (PayMongo)</Text>
                </View>
                <View className="flex flex-row justify-between">
                  <Text className="text-sm">Subtotal</Text>
                  <View className="w-[60px]">
                    <Text className="text-sm">P 750.00</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
