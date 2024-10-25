import { Notifier, NotifierComponents } from "react-native-notifier";
import { AxiosError } from "axios";
import { useRouter } from "expo-router";
import { httpClient } from "@api/index";
import { useAuthStore } from "@stores/index";
import { HTTP_RESPONSES } from "@constants/index";
import type { Credentials } from "@@types/auth";

export const useAuthService = () => {
  const router = useRouter();
  const { SET_USER, SET_TOKEN, CLEAR_AUTH } = useAuthStore();

  const authLogout = async () => {
    CLEAR_AUTH();
  };

  const authLogin = async (credentials: Credentials) => {
    return await httpClient
      .post("auth/sign-in", credentials)
      .then((response) => {
        const { token, user } = response.data;
        SET_TOKEN(token);
        SET_USER(user);

        Notifier.showNotification({
          description: "Successfully logged-in, redirecting ...",
          Component: NotifierComponents.Alert,
          componentProps: {
            alertType: "success",
          },
        });

        setTimeout(() => {
          router.push("/home/index");
        }, 2000);
      })
      .catch((error) => {
        console.log(error);
        if (error instanceof AxiosError) {
          if (error.response?.status === HTTP_RESPONSES.UNAUTHORIZED) {
            Notifier.showNotification({
              description: "Invalid email/password, try again",
              Component: NotifierComponents.Alert,
              componentProps: {
                alertType: "warn",
              },
            });
          }
        }
      });
  };

  const authSignupAccount = async (credentials: Credentials) => {
    return await httpClient
      .post("auth/sign-in", credentials)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return {
    authLogout,
    authLogin,
    authSignupAccount,
  };
};
