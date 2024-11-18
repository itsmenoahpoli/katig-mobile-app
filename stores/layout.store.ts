import { create } from "zustand";
import { persist } from "zustand/middleware";
import { storage } from "@utils/index";
import type { LayoutStore, BaseBackgroundColor } from "types/store";

export const useLayoutStore = create<LayoutStore>()(
  persist(
    (set) => ({
      baseBackground: "primary",
      showHeaderNav: false,
      showBottomNav: false,

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
    }),
    {
      name: "layout-store",
      storage: storage.asyncStoreStorageWrapper,
    }
  )
);
