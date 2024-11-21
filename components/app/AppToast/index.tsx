import React from "react";
import { Text, Animated } from "react-native";
import { useLayoutStore } from "@stores/index";
import { APP_TOAST_TYPES } from "@constants/index";
import { ToastTypes } from "@@types/store.d";

export const AppToast = () => {
  const { toast, HIDE_TOAST } = useLayoutStore();

  const getToastStyle = (toastType: ToastTypes) => {
    switch (toastType) {
      case APP_TOAST_TYPES.SUCCESS:
        return "!bg-green-600";

      case APP_TOAST_TYPES.ERROR:
        return "!bg-red-600";

      case APP_TOAST_TYPES.INFO:
        return "!bg-blue-900";

      case APP_TOAST_TYPES.WARNING:
        return "!bg-yellow-500";

      default:
        return {};
    }
  };

  const checkToastVisibility = (
    isVisible: boolean,
    autoClose: boolean = true
  ) => {
    if (isVisible && autoClose) {
      const timer = setTimeout(() => HIDE_TOAST(), 3000);

      return () => clearTimeout(timer);
    }
  };

  React.useEffect(() => {
    checkToastVisibility(toast.isVisible, toast.autoClose);
  }, [toast.isVisible, HIDE_TOAST]);

  return !toast.isVisible ? null : (
    <Animated.View
      className={`h-[130px] w-full absolute top-0 left-0 right-0 p-15 rounded-2xl justify-end items-center z-50 pb-5 ${getToastStyle(
        toast.type
      )}`}
    >
      <Text className="text-md text-white font-bold">{toast.message}</Text>
    </Animated.View>
  );
};
