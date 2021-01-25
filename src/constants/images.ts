import { ImageSourcePropType } from "react-native";

interface Images {
  [key: string]: ImageSourcePropType;
}

const images: Images = {
  add: require("../../assets/add.png"),
  time: require("../../assets/time.png"),
  "pie-chart": require("../../assets/pie-chart.png"),
  "time-outline": require("../../assets/time-outline.png"),
  "pie-chart-filled": require("../../assets/pie-chart-filled.png"),
};

export default images;
