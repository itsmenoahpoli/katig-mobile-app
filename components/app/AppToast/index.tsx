import React from "react";
import { View, Text, StyleSheet, Animated } from "react-native";
import { useLayoutStore } from "@stores/index"; // Adjust path as needed

export const AppToast = () => {
  const { toast, HIDE_TOAST } = useLayoutStore();

  React.useEffect(() => {
    if (toast.isVisible) {
      const timer = setTimeout(() => HIDE_TOAST(), 3000);
      return () => clearTimeout(timer);
    }
  }, [toast.isVisible, HIDE_TOAST]);

  return !toast.isVisible ? null : (
    <Animated.View style={[styles.toastContainer, toast.type === "success" && styles.success, toast.type === "error" && styles.error]}>
      <Text style={styles.toastText}>{toast.message}</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  toastContainer: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
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
