import * as React from "react";

import { capitalize } from "../helpers";
import { Category } from "../types";

import Icon from "./Icon";
import Tag from "./Tag";
import { Box, Text, Card, palette, ColorPalette } from "./Theme";

interface TaskProps {
  title: string;
  timer: string;
  play: boolean;
  selected: boolean;
  categories: Category[];
}

type Color = keyof ColorPalette | undefined;

const Task = ({ title, timer, selected, play, categories }: TaskProps) => {
  const getColor = (): Color => {
    if (categories?.length) {
      const lastCategory = categories[categories.length - 1];
      const { color } = lastCategory;
      return color;
    }

    return;
  };

  if (selected) {
    return (
      <Card paddingHorizontal="m">
        <Box flexDirection="row" justifyContent="space-between" marginTop="l">
          <Text variant="h1" color="textForeground">
            {timer}
          </Text>
          <Icon name="right-arrow" />
        </Box>
        <Box flexDirection="row" alignItems="center" marginVertical="l">
          <Box marginRight="m">
            <Icon name="ellipse" />
          </Box>
          <Text variant="body" color="textForeground">
            {`${capitalize(title)}`}
          </Text>
        </Box>
      </Card>
    );
  } else {
    return (
      <Card padding="m">
        <Box flexDirection="row" justifyContent="space-between">
          <Box flexDirection="row">
            <Icon name="desktop" showBackground backgroundColor={getColor()} />
            <Box marginLeft="m">
              <Text variant="h3" color="textForeground">
                {`${capitalize(title)}`}
              </Text>
              <Box flexDirection="row" marginTop="s">
                {categories?.map((category) => (
                  <Tag
                    label={`${category.name}`}
                    color={`${category.color}` as keyof typeof palette}
                    marginRight="s"
                  />
                ))}
              </Box>
            </Box>
          </Box>
          <Box>
            <Box flex={1}>
              <Text variant="body2" color="textForeground">
                {timer}
              </Text>
            </Box>
            <Box flex={1} alignSelf="flex-end" justifyContent="center">
              {play ? <Icon name="pause" /> : <Icon name="play" />}
            </Box>
          </Box>
        </Box>
      </Card>
    );
  }
};

Task.defaultProps = {
  play: false,
  selected: false,
};

export default Task;
