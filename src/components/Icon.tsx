import * as React from "react";
import { Image, ImageStyle } from "react-native";
import { useTheme } from "@shopify/restyle";

import images from "../constants/images";

import { Theme, Box } from "./Theme";

interface ContainerProps {
  width?: number;
  height?: number;
  borderRadius?: keyof Theme["borderRadii"];
  backgroundColor: keyof Theme["colors"];
}

interface IconProps {
  name: string;
  iconStyle?: ImageStyle;
  showBackground?: boolean;
  backgroundColor?: keyof Theme["colors"];
}

const SIZE = 48;

const Icon = ({
  name,
  iconStyle,
  showBackground,
  backgroundColor,
}: IconProps) => {
  const theme = useTheme();

  if (showBackground) {
    return (
      <Box
        alignItems="center"
        justifyContent="center"
        width={SIZE}
        height={SIZE}
        borderRadius="l"
        {...{ backgroundColor }}
      >
        <Image
          source={images[name]}
          style={{ tintColor: theme.colors.iconTintColor, ...iconStyle }}
        />
      </Box>
    );
  }
  return <Image source={images[name]} style={iconStyle} />;
};

export default Icon;
