import { AxiosError } from "axios";
import { Alert } from "react-native";
import { httpClient } from "@api/index";
import { useToasts } from "@hooks/index";
import type { CreateBookingData } from "@@types/booking";

export const useBookingsService = () => {
  const { showToast, toastTypes } = useToasts();

  const createBooking = async (bookingData: CreateBookingData) => {
    showToast("Searching for available trips", toastTypes.WARNING, true);

    setTimeout(() => {
      Alert.alert("No available trips found!");
    }, 5000);
  };

  return {
    createBooking,
  };
};
