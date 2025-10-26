import { create } from "zustand";
import { useImageStoreType } from "../types/useImageStore.types";

export const useImageStore = create<useImageStoreType>((set) => ({
  selectedImage: null,
  setSelectedImage: (image) => set({ selectedImage: image }),
}));
