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

export type LayoutStore = {
  baseBackground: string;

  SET_BASE_BACKGROUND: (color: BaseBackgroundColor) => void;

  RESET_BASE_COLOR: () => void;
};
