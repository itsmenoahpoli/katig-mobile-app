import * as Notifications from "expo-notifications";

export const useNotifications = () => {
  const requestPermissions = async () => {
    const { status } = await Notifications.requestPermissionsAsync();
    if (status === "granted") {
      console.log("Notification permissions granted!");
    } else {
      console.log("Notification permissions denied!");
    }
  };

  const checkPermissions = async () => {
    const permissions = await Notifications.getPermissionsAsync();
    console.log("Current permissions:", permissions);
  };

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

  const notificationListener = Notifications.addNotificationReceivedListener(
    (notification) => {
      console.log("Notification received:", notification);
      // Handle the notification (e.g., show a message or update state)
    }
  );

  const responseListener =
    Notifications.addNotificationResponseReceivedListener((response) => {
      const { notification, actionIdentifier } = response;
      console.log("Notification response received:", response);
      console.log("Notification data:", notification);
      console.log("Action identifier:", actionIdentifier);
      // Handle the response (e.g., navigate to a screen)
    });

  return {
    triggerNotification,
  };
};
