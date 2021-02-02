import { SpacingProps } from "@shopify/restyle";
import * as React from "react";

import { capitalize } from "../helpers";

import { Box, Text, Theme, palette } from "./Theme";

type TagProps = SpacingProps<Theme> & {
  label: string;
  color: keyof typeof palette;
};

const Tag = ({ label, color, ...rest }: TagProps) => {
  const bgColor = `light${capitalize(color)}`;

  return (
    <Box
      backgroundColor={bgColor as keyof Theme["colors"]}
      borderRadius="s"
      {...rest}
    >
      <Text color={color} marginHorizontal="s" style={{ marginVertical: 5 }}>
        {`${capitalize(label)}`}
      </Text>
    </Box>
  );
};

export default Tag;
