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
