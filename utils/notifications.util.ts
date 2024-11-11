import { Notifier, NotifierComponents } from "react-native-notifier";

type NotificationContents = {
  alertType: "success" | "error" | "warn" | "info";
  description: string;
};

export const alertNotify = (contents: NotificationContents) => {
  Notifier.showNotification({
    description: contents.description,
    Component: NotifierComponents.Alert,
    componentProps: {
      alertType: contents.alertType,
    },
  });
};
