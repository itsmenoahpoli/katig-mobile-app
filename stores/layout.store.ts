import { create } from "zustand";
import { persist } from "zustand/middleware";
import { storage } from "@utils/index";
import { LayoutStore, BaseBackgroundColor, ToastTypes } from "@@types/store.d";

export const useLayoutStore = create<LayoutStore>()(
  persist(
    (set) => ({
      baseBackground: "primary",
      showHeaderNav: false,
      showBottomNav: false,
      toast: { isVisible: false, message: "", type: ToastTypes.INFO },

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
      SHOW_TOAST: (message: string, type: ToastTypes) => set({ toast: { isVisible: true, message, type } }),
      HIDE_TOAST: () => set({ toast: { isVisible: false, message: "", type: ToastTypes.INFO } }),
    }),
    {
      name: "layout-store",
      storage: storage.asyncStoreStorageWrapper,
    }
  )
);
