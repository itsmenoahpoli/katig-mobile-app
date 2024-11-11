import { create } from "zustand";
import { persist } from "zustand/middleware";
import { storage } from "@utils/index";
import type { LayoutStore, BaseBackgroundColor } from "types/store";

export const useLayoutStore = create<LayoutStore>()(
  persist(
    (set: any) => ({
      baseBackground: "primary",

      SET_BASE_BACKGROUND: (color: BaseBackgroundColor) => {
        set({ baseBackground: color });
      },
      RESET_BASE_COLOR: () => set({ baseBackground: "white" }),
    }),
    {
      name: "layout-store",
      storage: storage.asyncStoreStorageWrapper,
    }
  )
);
