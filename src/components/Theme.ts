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

export const palette = {
  dark: "#070417",
  dark2: "#18152C",
  orange: "#FFA656",
  lightOrange: "#FFEFF1",
  purple: "#9B51E0",
  lightPurple: "#F5EEFC",
  lightGray: "#FAFAFF",
  gray: "#828282",
  green: "#07E092",
  lightGreen: "#E6FCF4",
  blue: "#3D4ABA",
  pink: "#FD5B71",
  lightPink: "#FFEFF1",
  white: "#FFFFFF",
  titanWhite: "#E9E9FF",
};

export type ColorPalette = typeof palette;

export const theme = createTheme({
  colors: {
    ...palette,
    iconBackground: palette.dark,
    iconBackgroundPurple: palette.purple,
    iconTintColor: palette.white,
    mainBackground: palette.lightGray,
    mainBackgroundAlt: palette.white,
    textForeground: palette.dark,
    textForegroundAlt: palette.white,
    cardMainBackground: palette.white,
    indicatorBackground: palette.titanWhite,
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
    h3: {
      fontFamily: "Rubik-Medium",
      fontSize: 14,
      lineHeight: 20,
      color: "textForeground",
    },
    body: {
      fontFamily: "Rubik-Regular",
      fontSize: 16,
      color: "textForeground",
    },
    body2: {
      fontFamily: "Rubik-Regular",
      fontSize: 12,
      color: "textForeground",
    },
  },
  cardVariants: {},
});

export type Theme = typeof theme;
export default theme;

export const Box = createBox<Theme>();
export const Text = createText<Theme>();

type NamedStyles<T> = { [P in keyof T]: ViewStyle | TextStyle | ImageStyle };

export const makeStyles = <T extends NamedStyles<T>>(
  styles: (theme: Theme) => T
) => () => {
  const currentTheme = useReTheme();
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
