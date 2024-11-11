import React from "react";
import { useLayoutStore } from "@stores/index";
import { BaseBackgroundColor } from "@@types/store";

export const useLayout = () => {
  const { SET_BASE_BACKGROUND, baseBackground } = useLayoutStore();

  const setBaseBackground = (color: BaseBackgroundColor) => {
    SET_BASE_BACKGROUND(color);
  };

  return {
    baseBackground,
    setBaseBackground,
  };
};
