import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useColors } from "../constants/Colors";
import { Sizes } from "../constants/Sizes";

const FeatureTitle = ({
  onPress,
  title,
}: {
  title: string;
  onPress: () => void;
}) => {
  const colors = useColors();

  return (
    <View
      style={{
        marginVertical: Sizes.margin.medium,
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <Text
        style={{
          fontWeight: "600",
          color: colors.dark,
          fontSize: Sizes.font.large,
        }}
      >
        {title}
      </Text>
      <TouchableOpacity onPress={onPress}>
        <AntDesign name="arrowright" size={Sizes.icon.medium} color={colors.dark} />
      </TouchableOpacity>
    </View>
  );
};

export default FeatureTitle;

const styles = StyleSheet.create({});
