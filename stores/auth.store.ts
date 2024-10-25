import { create } from "zustand";
import { persist } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { storage } from "@utils/index";
// import type { AuthStore } from "@/types/store.d";

export const useAuthStore = create<any>()(
  persist(
    (set: any) => ({
      authUser: undefined,
      authToken: undefined,

      SET_USER: (authUser: any) => set({ authUser: authUser }),
      SET_TOKEN: (authToken: any) => set({ authToken: authToken }),
      GET_USER() {
        return this.authUser;
      },
      GET_TOKEN() {
        return this.authToken;
      },
      IS_AUTHENTICATED() {
        return this.authUser !== undefined && this.authToken !== undefined;
      },
      CLEAR_AUTH: () => set({ authUser: undefined, authToken: undefined }),
    }),
    {
      name: "auth-store",
      storage: storage.asyncStoreStorageWrapper,
    }
  )
);
