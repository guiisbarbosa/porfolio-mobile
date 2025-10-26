import { DataProjectsType } from "./dataProjects.types";

export type useImageStoreType = {
  selectedImage: DataProjectsType | null;
  setSelectedImage: (image: DataProjectsType) => void;
};