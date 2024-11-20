import React from "react";
import { Text, StyleSheet, Animated } from "react-native";
import { useLayoutStore } from "@stores/index";
import { ToastTypes } from "@@types/store.d";

export const AppToast = () => {
  const { toast, HIDE_TOAST } = useLayoutStore();

  const getToastStyle = (toastType: ToastTypes) => {
    switch (toastType) {
      case ToastTypes.SUCCESS:
        return styles.success;

      case ToastTypes.ERROR:
        return styles.error;

      default:
        return {};
    }
  };

  React.useEffect(() => {
    if (toast.isVisible) {
      const timer = setTimeout(() => HIDE_TOAST(), 3000);
      return () => clearTimeout(timer);
    }
  }, [toast.isVisible, HIDE_TOAST]);

  return !toast.isVisible ? null : (
    <Animated.View style={[styles.toastContainer, getToastStyle(toast.type)]}>
      <Text style={styles.toastText}>{toast.message}</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  toastContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 15,
    borderRadius: 8,
    zIndex: 1000,
    backgroundColor: "gray",
    alignItems: "center",
  },
  toastText: {
    color: "white",
    fontSize: 16,
  },
  success: {
    backgroundColor: "green",
  },
  error: {
    backgroundColor: "red",
  },
});
