import { useLayoutStore } from "@stores/index";
import { APP_TOAST_TYPES } from "@constants/index";
import { ToastTypes } from "@@types/store";

export const useToasts = () => {
  const { SHOW_TOAST, HIDE_TOAST } = useLayoutStore();
  const toastTypes = APP_TOAST_TYPES;

  const showToast = (message: string, type: ToastTypes, autoClose: boolean = false) => {
    SHOW_TOAST(message, type, autoClose);
  };

  return { showToast, toastTypes, hideToast: HIDE_TOAST };
};
