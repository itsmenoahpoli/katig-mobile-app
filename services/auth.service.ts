import { useRouter } from "expo-router";
import { httpClient, handleApiError } from "@api/index";
import { useAuthStore } from "@stores/index";
import { alertNotify } from "@utils/index";
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

        alertNotify({
          description: "Successfully logged-in, redirecting ...",
          alertType: "success",
        });

        setTimeout(() => {
          router.push("/home/index");
        }, 2000);
      })
      .catch((error) => {
        handleApiError(error);
      });
  };

  const authSignup = async (payload: any) => {
    return await httpClient
      .post("auth/sign-up", payload)
      .then((response) => {
        console.log(response.status);
        alertNotify({
          description: "Successfully registered, please login",
          alertType: "success",
        });

        setTimeout(() => {
          router.push("/auth/signin");
        }, 2000);
      })
      .catch((error) => {
        handleApiError(error);
      });
  };

  return {
    authLogout,
    authLogin,
    authSignup,
  };
};
