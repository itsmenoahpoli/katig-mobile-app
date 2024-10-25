import AsyncStorage from "@react-native-async-storage/async-storage";
import { PersistStorage } from "zustand/middleware";

export const storage = {
  add: async (key: string, data: any) => {
    try {
      const formatData = JSON.stringify({ data });
      await AsyncStorage.setItem(key, formatData);
    } catch (error) {
      console.log(`Failed to store ${key} data into AsyncStorage`);
    }
  },
  get: async (key: string) => {
    try {
      const data = await AsyncStorage.getItem(key);

      if (data) {
        return JSON.parse(data).data;
      }

      return null;
    } catch (error) {
      console.log(`Failed to get ${key} data into AsyncStorage`);
    }
  },
  asyncStoreStorageWrapper: {
    getItem: async (name: string) => {
      const item = await AsyncStorage.getItem(name);
      return item ? JSON.parse(item) : null;
    },
    setItem: async (name: string, value: any) => {
      await AsyncStorage.setItem(name, JSON.stringify(value));
    },
    removeItem: async (name: string) => {
      await AsyncStorage.removeItem(name);
    },
  } as PersistStorage<any>,
};
