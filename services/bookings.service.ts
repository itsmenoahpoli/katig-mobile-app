import { AxiosError } from "axios";
import { httpClient } from "@api/index";
import { useToasts } from "@hooks/index";
import type { CreateBookingData } from "@@types/booking";

export const useBookingsService = () => {
  const { showToast, toastTypes } = useToasts();

  const createBooking = async (bookingData: CreateBookingData) => {
    //
  };

  return {
    createBooking,
  };
};
