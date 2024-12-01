import React from "react";
import * as Notifications from "expo-notifications";
import { View, Text, Pressable } from "react-native";
import { SplashScreen } from "@components/index";

export default (): JSX.Element => {
  const triggerNotification = async () => {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Hello!",
        body: "This is a local notification.",
      },
      trigger: {
        seconds: 2, // Time in seconds after which the notification will appear
      },
    });
  };

  React.useEffect(() => {
    // Request permissions for iOS
    const requestPermissions = async () => {
      const { status } = await Notifications.requestPermissionsAsync();
      if (status === "granted") {
        console.log("Notification permissions granted!");
      } else {
        console.log("Notification permissions denied!");
      }
    };

    // Request permissions on component mount
    requestPermissions();

    // Listen for incoming notifications
    const notificationListener = Notifications.addNotificationReceivedListener(
      (notification) => {
        console.log("Notification received:", notification);
        // Handle the notification (e.g., show a message or update state)
      }
    );

    const responseListener =
      Notifications.addNotificationResponseReceivedListener((response) => {
        console.log("Notification response received:", response);
        // Handle the response (e.g., navigate to a screen)
      });

    // Cleanup the listeners when the component is unmounted
    return () => {
      notificationListener.remove();
      responseListener.remove();
    };
  }, []);

  return (
    <View className="flex-1 justify-center items-center">
      <Pressable onPress={triggerNotification}>
        <Text>Trigger local notification</Text>
      </Pressable>
    </View>
  );

  // return <SplashScreen />;
};
