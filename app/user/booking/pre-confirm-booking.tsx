import { useRouter } from "expo-router";
import { View, Text, Pressable, Image } from "react-native";
import { TripInformationCard, PaymentProceedFooter } from "@components/index";
import { imageAssets } from "@assets/index";

export default (): JSX.Element => {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
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

          <Pressable onPress={handleGoBack}>
            <Text className="text-xs text-white underline">Go Back</Text>
          </Pressable>
        </View>

        <View className="min-h-[200px] w-full bg-white rounded-xl border border-gray-200 mt-10 mx-auto p-5">
          <Text className="text-lg font-bold">Booking Details</Text>
          <Text className="text-xs text-gray-600 mb-2">
            Review your booking
          </Text>

          <View className="flex flex-col space-y-3 border-t border-gray-200 pt-5">
            <TripInformationCard hideCta />

            <Text className="text-xs">
              Boat type: <Text className="font-bold">TOURIST BOAT</Text>
            </Text>

            <View>
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

        <View className="mt-4">
          <Text className="text-xs text-gray-500">Powered by</Text>
          <Image
            source={imageAssets.paymongoLogo}
            className="h-[30px] w-[200px]"
          />
        </View>
      </View>

      <PaymentProceedFooter price={750} />
    </View>
  );
};
