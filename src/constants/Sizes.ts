import { Dimensions } from "react-native";
import { isTablet } from "./Values";

export const Sizes = {
  // Font Sizes
  font: {
    small: isTablet ? 16 : 12,
    normal: isTablet ? 18 : 14,
    medium: isTablet ? 20 : 16,
    large: isTablet ? 24 : 20,
    xlarge: isTablet ? 28 : 24,
  },

  // Padding Sizes
  padding: {
    small: 8,
    normal: 14,
    medium: 16,
    large: 24,
    xlarge: 32,
  },

  // Margin Sizes
  margin: {
    small: 8,
    normal: 14,
    medium: 16,
    large: 24,
    xlarge: 32,
  },

  // Icon Sizes
  icon: {
    normal: 14,
    small: 16,
    medium: 24,
    large: 32,
    xlarge: 40,
  },

  //   // Border Radius
  radius: {
    small: 5,
    normal: 14,
    medium: 10,
    large: 20,
    xlarge: 24,
  },


  // Screen Sizes
  width: Dimensions.get("window").width,
  height: Dimensions.get("window").height,
};
