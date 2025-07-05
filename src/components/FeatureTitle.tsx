import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Sizes } from "../constants/Sizes";

const FeatureTitle = ({
  onPress,
  title,
}: {
  title: string;
  onPress: () => void;
}) => {
  return (
    <View
      style={{
        marginVertical: Sizes.margin.medium,
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <Text style={{ fontWeight: "600", fontSize: Sizes.font.large }}>
        {title}
      </Text>
      <TouchableOpacity onPress={onPress}>
        <AntDesign name="arrowright" size={Sizes.icon.medium} />
      </TouchableOpacity>
    </View>
  );
};

export default FeatureTitle;

const styles = StyleSheet.create({});
