import { useRouter } from "expo-router";
import { httpClient, handleApiError } from "@api/index";
import { useAuthStore } from "@stores/index";
import { ROUTES } from "@constants/index";
import type { Credentials } from "@@types/auth.d";

export const useAuthService = () => {
  const router = useRouter();
  const { SET_USER, SET_TOKEN, CLEAR_AUTH } = useAuthStore();

  const authLogout = async () => {
    CLEAR_AUTH();
  };

  const authLogin = async (credentials: Credentials) => {
    return await httpClient
      .post(ROUTES.API.AUTH_SIGNIN, credentials)
      .then((response) => {
        const { token, user } = response.data;
        SET_TOKEN(token);
        SET_USER(user);

        setTimeout(() => {
          router.push(ROUTES.USER_HOME);
        }, 2000);
      })
      .catch((error) => {
        handleApiError(error);
      });
  };

  const authSignup = async (payload: any) => {
    return await httpClient
      .post(ROUTES.API.AUTH_SIGNUP, payload)
      .then((response) => {
        setTimeout(() => {
          router.push(ROUTES.AUTH_SIGNIN);
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
