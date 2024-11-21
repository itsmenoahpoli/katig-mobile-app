import { AxiosError } from "axios";
import { useRouter } from "expo-router";
import { httpClient } from "@api/index";
import { useAuthStore } from "@stores/index";
import { useToasts } from "@hooks/index";
import { ROUTES, STATIC_TEXTS } from "@constants/index";
import type { Credentials } from "@@types/auth.d";

type SignUpData = {
  fullname: string;
} & Credentials;

export const useAuthService = () => {
  const router = useRouter();
  const { showToast, toastTypes } = useToasts();
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
        if (error instanceof AxiosError && error.response?.status === 400) {
          showToast(STATIC_TEXTS.INCORRECT_SIGNIN_ERROR, toastTypes.ERROR);
        }
      });
  };

  const authSignup = async (payload: SignUpData) => {
    return await httpClient
      .post(ROUTES.API.AUTH_SIGNUP, payload)
      .then((response) => {
        showToast(STATIC_TEXTS.SUCCESFULLY_REGISTERED, toastTypes.SUCCESS);

        setTimeout(async () => {
          await authLogin({
            email: payload.email,
            password: payload.password,
          });
        }, 2000);
      })
      .catch((error) => {
        if (error instanceof AxiosError && error.response?.status === 400) {
          showToast(STATIC_TEXTS.ALREADY_REGISTERED_ERROR, toastTypes.ERROR);
        }
      });
  };

  return {
    authLogout,
    authLogin,
    authSignup,
  };
};
