import { Notifier, NotifierComponents } from "react-native-notifier";
import { httpClient } from "@api/index";
import { useAuthStore } from "@stores/index";
import type { Credentials } from "@@types/auth";

export const useAuthService = () => {
  const { SET_USER, SET_TOKEN } = useAuthStore();

  const authLogout = async () => {
    //
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
      })
      .catch((error) => {
        console.log(error);
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
