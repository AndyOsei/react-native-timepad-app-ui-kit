import {
  createBox,
  createRestyleComponent,
  createText,
  createTheme,
  createVariant,
  useTheme as useReTheme,
  VariantProps,
} from "@shopify/restyle";
import { ImageStyle, TextStyle, ViewStyle } from "react-native";

const palette = {
  dark: "#070417",
  dark2: "#18152C",
  orange: "#FFA656",
  purple: "#9B51E0",
  lightGray: "#FAFAFF",
  green: "#07E092",
  blue: "#3D4ABA",
  pink: "#FD5B71",
  white: "#FFFFFF",
};

export const theme = createTheme({
  colors: {
    iconBackground: palette.dark,
    iconTintColor: palette.white,
    mainBackground: palette.lightGray,
    textForeground: palette.white,
    textForegroundDark: palette.dark,
    cardMainBackground: palette.white,
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  borderRadii: {
    s: 6,
    m: 12,
    l: 24,
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
  textVariants: {
    h1: {
      fontFamily: "Rubik-Medium",
      fontSize: 32,
      color: "textForeground",
    },
    h2: {
      fontFamily: "Rubik-Medium",
      fontSize: 24,
      color: "textForeground",
    },
    body: {
      fontFamily: "Rubik-Regular",
      fontSize: 16,
      color: "textForeground",
    },
  },
  cardVariants: {},
});

export type Theme = typeof theme;
export default theme;

export const Box = createBox<Theme>();
export const Text = createText<Theme>();
export const useTheme = () => useReTheme<Theme>();

type NamedStyles<T> = { [P in keyof T]: ViewStyle | TextStyle | ImageStyle };

export const makeStyles = <T extends NamedStyles<T>>(
  styles: (theme: Theme) => T
) => () => {
  const currentTheme = useTheme();
  return styles(currentTheme);
};

type CardProps = VariantProps<Theme, "cardVariants"> &
  React.ComponentProps<typeof Box>;
const cardVariant = createVariant<Theme>({
  themeKey: "cardVariants",
  defaults: {
    borderRadius: "l",
    backgroundColor: "cardMainBackground",
  },
});
export const Card = createRestyleComponent<CardProps, Theme>(
  [cardVariant],
  Box
);
