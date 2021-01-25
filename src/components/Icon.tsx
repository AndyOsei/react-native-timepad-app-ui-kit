import * as React from "react";
import { Image, ImageStyle } from "react-native";
import { useTheme } from "@shopify/restyle";

import images from "../constants/images";

import { Theme } from "./Theme";

import { Box } from ".";

interface ContainerProps {
  width?: number;
  height?: number;
  borderRadius?: number;
  backgroundColor: keyof Theme["colors"];
}

interface IconProps {
  name: string;
  iconStyle?: ImageStyle;
  containerProps?: ContainerProps;
}

export default function Icon({ name, iconStyle, containerProps }: IconProps) {
  const theme = useTheme();

  const imageStyle = iconStyle ?? { tintColor: theme.colors.iconTintColor };
  if (containerProps) {
    return (
      <Box alignItems="center" justifyContent="center" {...containerProps}>
        <Image source={images[name]} style={imageStyle} />
      </Box>
    );
  }
  return <Image source={images[name]} />;
}
