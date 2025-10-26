import { ImageSourcePropType } from "react-native";

export type ProjectType = {
  id: number;
  path: ImageSourcePropType;
  title: string;
  description: string;
  tecnologie: string;
  github: string;
};
