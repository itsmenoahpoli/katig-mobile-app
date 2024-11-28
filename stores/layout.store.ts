import { create } from "zustand";
import { persist } from "zustand/middleware";
import { storage } from "@utils/index";
import { APP_TOAST_TYPES } from "@constants/index";
import { LayoutStore, BaseBackgroundColor, ToastTypes } from "@@types/store.d";

export const useLayoutStore = create<LayoutStore>()(
  persist(
    (set) => ({
      baseBackground: "primary",
      showHeaderNav: false,
      showBottomNav: false,
      headerAttr: { showCustom: false, title: "" },
      toast: { isVisible: false, message: "", type: APP_TOAST_TYPES.INFO, autoClose: false },

      SET_BASE_BACKGROUND: (color: BaseBackgroundColor) => {
        set({ baseBackground: color });
      },
      SET_SHOW_HEADER_NAV: (isShown: boolean) => {
        set({ showHeaderNav: isShown });
      },
      SET_SHOW_BOTTOM_NAV: (isShown: boolean) => {
        set({ showBottomNav: isShown });
      },
      RESET_BASE_COLOR: () => set({ baseBackground: "white" }),
      SHOW_TOAST: (message: string, type: ToastTypes, autoClose?: boolean) => set({ toast: { isVisible: true, message, type, autoClose } }),
      HIDE_TOAST: () => set({ toast: { isVisible: false, message: "", type: APP_TOAST_TYPES.INFO } }),
    }),
    {
      name: "layout-store",
      storage: storage.asyncStoreStorageWrapper,
    }
  )
);
