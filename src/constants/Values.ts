import * as Device from "expo-device";
import { Dimensions, Platform } from "react-native";

const { width, height } = Dimensions.get("window");

export const isAndroid = Platform.OS === "android";
export const isIos = Platform.OS === "ios";
export const isTablet = Device.deviceType === Device.DeviceType.TABLET;
export const smallDevice = width <= 360;
export const mediumDevice = width > 360 && width <= 411;
export const largeDevice = width > 411;
