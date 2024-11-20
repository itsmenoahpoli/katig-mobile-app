import { useLayoutStore } from "@stores/index";
import { BaseBackgroundColor } from "@@types/store.d";

export const useLayout = () => {
  const { SET_BASE_BACKGROUND, SET_SHOW_HEADER_NAV, SET_SHOW_BOTTOM_NAV, baseBackground, showHeaderNav, showBottomNav } = useLayoutStore();

  const setBaseBackground = (color: BaseBackgroundColor) => {
    SET_BASE_BACKGROUND(color);
  };

  const setShowHeaderNav = (isShown: boolean) => {
    SET_SHOW_HEADER_NAV(isShown);
  };

  const setShowFooterNav = (isShown: boolean) => {
    SET_SHOW_BOTTOM_NAV(isShown);
  };

  return {
    baseBackground,
    showHeaderNav,
    showBottomNav,
    setBaseBackground,
    setShowHeaderNav,
    setShowFooterNav,
  };
};
