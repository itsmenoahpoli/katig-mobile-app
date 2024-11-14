import { AxiosError } from "axios";
import { alertNotify } from "@utils/index";
import { HTTP_RESPONSES } from "@constants/index";

export const handleApiError = (error: unknown) => {
  if (error instanceof AxiosError) {
    if (error.response?.status === HTTP_RESPONSES.UNAUTHORIZED) {
      alertNotify({
        description: "Invalid email/password, try again",
        alertType: "warn",
      });
    }
  }
};
