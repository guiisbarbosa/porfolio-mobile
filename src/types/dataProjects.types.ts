import { ImageSourcePropType } from "react-native";

export type DataProjectsType = {
  id: number;
  path: ImageSourcePropType;
  title: string;
  description: string;
  mainTechnology: string;
  repoLink: string;
};
