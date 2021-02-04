import { ColorPalette } from "./components/Theme";

export interface Category {
  name: string;
  color: keyof ColorPalette;
  icon?: string;
}

export interface Task {
  title: string;
  timer: string;
  categories: Category[];
  selected: boolean;
  play: boolean;
}

export type HomeStackParams = {
  Home: undefined;
  Timer: { task: Task };
};

export type MainTabsParams = {
  Home: undefined;
  AddTask: undefined;
  Report: undefined;
};
