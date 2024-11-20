import { useLayoutStore } from "@stores/index";
import type { ToastTypes } from "@@types/store";

export const useToasts = () => {
  const { SHOW_TOAST, HIDE_TOAST } = useLayoutStore();

  const showToast = (message: string, type: ToastTypes) => {
    SHOW_TOAST(message, type);
  };

  return { showToast, hideToast: HIDE_TOAST };
};
