import { router } from "expo-router";
import React, { useMemo } from "react";
import { Image, Pressable, Text, View } from "react-native";
import { useColors } from "../constants/Colors";
import { Sizes } from "../constants/Sizes";
import { isTablet } from "../constants/Values";
import { LoanType } from "../types/loan";
import { Naira } from "../utils";

const LoanCard = ({ item, isLarge }: { item: LoanType; isLarge: boolean }) => {
  const colors = useColors();

  const statusColors: Record<LoanType["status"], string> = {
    pending: "#eddf13",
    rejected: "#870385",
    approved: "#038719",
    flagged: "#870305",
    default: "",
  };

  const color = useMemo(() => statusColors[item.status], [item.status]);

  return (
    <Pressable
      onPress={() => router.push(`/${item.id}`)}
      style={{
        borderWidth: 2,
        borderColor: colors.inputGrey,
        borderRadius: Sizes.radius.medium,
        width: isTablet
          ? isLarge
            ? Sizes.width / 2 - Sizes.padding.large
            : 300
          : isLarge
          ? "100%"
          : 300,
      }}
    >
      <View>
        <Image
          source={{ uri: item.image }}
          style={{
            height: 200,
            width: "100%",
            borderTopLeftRadius: Sizes.radius.small,
            borderTopRightRadius: Sizes.radius.small,
          }}
        />
        <View
          style={{
            position: "absolute",
            padding: 5,
            backgroundColor: colors.lightPrimary,
          }}
        >
          <Text
            style={{
              fontWeight: "400",
              color: colors.text,
              fontSize: Sizes.font.small,
            }}
          >
            {item.featured_type}
          </Text>
        </View>
      </View>

      <View style={{ padding: Sizes.padding.small }}>
        <Text
          style={{
            fontWeight: "400",
            fontSize: Sizes.font.normal,
            color: colors.text,
          }}
        >
          {item.purpose}
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontWeight: "600",
              fontSize: Sizes.font.large,
              color: colors.text,
            }}
          >
            {Naira(Number(item.amount))}
          </Text>
          <View
            style={{
              backgroundColor: color,
              paddingVertical: 3,
              paddingHorizontal: 5,
              borderRadius: 10,
            }}
          >
            <Text
              style={{
                fontWeight: "500",
                fontSize: Sizes.font.small,
                color: colors.white,
              }}
            >
              {item.status}
            </Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default LoanCard;
