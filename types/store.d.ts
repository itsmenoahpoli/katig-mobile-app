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
export enum ToastTypes {
  SUCCESS = "success",
  INFO = "info",
  WARNING = "warning",
  ERROR = "error",
}

export type LayoutStore = {
  baseBackground: string;
  showHeaderNav: boolean;
  showBottomNav: boolean;
  toast: {
    isVisible: boolean;
    message: string;
    type: ToastTypes;
  };

  SET_BASE_BACKGROUND: (color: BaseBackgroundColor) => void;
  SET_SHOW_HEADER_NAV: (isShown: boolean) => void;
  SET_SHOW_BOTTOM_NAV: (isShown: boolean) => void;
  RESET_BASE_COLOR: () => void;
  SHOW_TOAST: (message: string, type: ToastTypes) => void;
  HIDE_TOAST: () => void;
};
