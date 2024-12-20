import { APP_TOAST_TYPES } from "@constants/index";

export type AuthStore = {
  authUser: any | undefined;
  authToken: any | undefined;

  SET_USER: (authUser: any) => void;
  SET_TOKEN: (authToken: any) => void;
  GET_USER: () => any | undefined;
  GET_TOKEN: () => any | undefined;
  IS_AUTHENTICATED: () => boolean;
  CLEAR_AUTH: () => void;
};

export type BaseBackgroundColor = "primary" | "white";
export type ToastTypes = keyof typeof APP_TOAST_TYPES;

export type LayoutStore = {
  baseBackground: string;
  showHeaderNav: boolean;
  showBottomNav: boolean;
  toast: {
    isVisible: boolean;
    message: string;
    type: ToastTypes;
    autoClose?: boolean;
    closeTimer?: number;
  };

  SET_BASE_BACKGROUND: (color: BaseBackgroundColor) => void;
  SET_SHOW_HEADER_NAV: (isShown: boolean) => void;
  SET_SHOW_BOTTOM_NAV: (isShown: boolean) => void;
  RESET_BASE_COLOR: () => void;
  SHOW_TOAST: (
    message: string,
    type: ToastTypes,
    autoClose?: boolean,
    closeTimer?: number
  ) => void;
  HIDE_TOAST: () => void;
};
