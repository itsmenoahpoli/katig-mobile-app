import { useRouter } from "expo-router";
import { useAuthStore } from "@stores/index";
import { ROUTES } from "@constants/index";

export const useAuth = () => {
  const router = useRouter();
  const { authUser, authToken, CLEAR_AUTH } = useAuthStore();

  const IS_AUTHENTICATED = authUser !== undefined && authToken !== undefined;

  const handleLogout = () => {
    CLEAR_AUTH();
    router.push(ROUTES.AUTH_SIGNIN);
  };

  return {
    authUser,
    handleLogout,
    IS_AUTHENTICATED,
  };
};
