import React from "react";
import { useRouter } from "expo-router";
import { View, Text, Pressable, ScrollView } from "react-native";

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

        <Text className="text-xl text-white font-bold mt-5">
          Terms and Conditions
        </Text>

        <View className="h-4/5 w-full bg-white rounded-xl border border-gray-200 mt-3 mx-auto p-5">
          <ScrollView className="flex-1 flex-col space-y-2">
            <Text>
              The liner boat offers scheduled trips for passengers, with fare
              rates available in the app.
            </Text>
            <Text>
              1. Acceptance of Terms: Using the KATIG app means you agree to
              these terms. If not, do not use the app.
            </Text>
            <Text>
              2. Ticket Selection: Tickets for scheduled trips from Buyabod,
              Santa Cruz, Marinduque can be chosen based on passenger type,
              time, and destination.
            </Text>
            <Text>
              3. Reservation Fee: A non-refundable reservation fee is required
              online but will be deducted from the fare if the passenger shows
              up.
            </Text>
            <Text>
              4. Ticket Issuance: Paid reservation fees generate a downloadable
              ticket.
            </Text>
            <Text>
              5. Full Payment: Pay the remaining fare balance at the port before
              departure.
            </Text>
            <Text>
              6. Passenger Discounts: Present a valid ID at the port for
              discounts for students, seniors, and PWDs.
            </Text>
            <Text>7. Cancellations:</Text>
            <Text>
              *For Passengers: No refund for cancellations less than 8 hours
              before the trip.
            </Text>
            <Text>
              *For Boat Owner: Refunds the reservation fee if the trip is
              canceled.
            </Text>
            <Text>
              8. User Responsibilities: Provide accurate info and keep login
              details secure.
            </Text>
            <Text>
              9. Liability: The app isn’t responsible for issues from user
              errors or service provider problems.
            </Text>
            <Text>
              10. Changes to Terms: Terms may be updated, with notifications
              sent for major changes.
            </Text>

            <Text>Privacy Policy</Text>

            <Text>
              1. Information Collection: We gather personal details like your
              name, contact info, and payment details to process bookings and
              deliver services via the KATIG app.
            </Text>
            <Text>
              2. Use of Information: Your data is used for bookings,
              communication, and service improvements. We only share it with
              third parties when needed, such as for payment processing.
            </Text>
            <Text>
              3. Data Security: We work to protect your data, but no online
              method is completely secure. We use reliable tools to safeguard
              your information.
            </Text>
            <Text>
              4. Cookies: Cookies improve your app experience by saving
              preferences. You can turn them off in your browser, but some
              features may be affected.
            </Text>
            <Text>
              5. Third-Party Services: We use third-party providers (e.g.,
              payment systems) to manage certain tasks. They only access your
              data to help us.
            </Text>
            <Text>
              6. Your Rights: You can view, update, or delete your personal data
              anytime by contacting us through the app.
            </Text>
            <Text>
              7. Policy Updates: We may update this policy and will notify you
              of major changes through the app.
            </Text>
            <View className="h-[50px]" />
          </ScrollView>
        </View>
      </View>
    </View>
  );
};
