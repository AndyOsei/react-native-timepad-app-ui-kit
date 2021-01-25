import { createTheme } from "@shopify/restyle";

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
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
});

export type Theme = typeof theme;
export default theme;
