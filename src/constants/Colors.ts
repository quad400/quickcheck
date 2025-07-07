import { useApp } from "../components/providers/AppProvider";

export const LightColors = {
  primary: "#187C4F",
  secondary: "#A8EACC",
  lightPrimary: "#DDEEE7",
  text: "#1D1D1D",
  white: "#FFFFFF",
  lightGrey: "#F8F7F7",
  inputGrey: "#ECECEF",
  link: "#5088E8",
  dark: "#1D1D1D",
  muted: "#868484",
  danger: "#D84040",
  textMuted: "#578A73",
  lightDanger: "#ECBBB7",
};

export const DarkColors = {
  primary: "#22C55E",
  secondary: "#064E3B",
  lightPrimary: "#1F2937",
  text: "#F9FAFB",
  white: "#111827",
  lightGrey: "#1F2937",
  inputGrey: "#374151",
  link: "#60A5FA",
  dark: "#F9FAFB",
  muted: "#9CA3AF",
  danger: "#EF4444",
  textMuted: "#6EE7B7",
  lightDanger: "#7F1D1D",
};

export type ColorScheme = typeof LightColors;

export const getColors = (mode: "light" | "dark"): ColorScheme => {
  return mode === "dark" ? DarkColors : LightColors;
};

export const useColors = (): ColorScheme => {
  const { mode } = useApp();
  return getColors(mode as "light" | "dark");
};

export const Colors = LightColors;
