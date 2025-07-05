import React from "react";
import { Image, Text, View } from "react-native";
import { Colors } from "../constants/Colors";
import { Home } from "../constants/Image";
import { Sizes } from "../constants/Sizes";
import { Naira } from "../utils";

const LoanCard = ({
  amount,
  loanType,
  status,
  isLarge,
}: {
  amount: string;
  status: string;
  loanType: string;
  isLarge: boolean;
}) => {
  return (
    <View
      style={{
        borderWidth: 2,
        borderColor: Colors.inputGrey,
        borderRadius: Sizes.radius.medium,
        width: isLarge ? "100%" : 300,
      }}
    >
      <View>
        <Image
          source={Home}
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
            backgroundColor: Colors.lightPrimary,
          }}
        >
          <Text style={{ fontWeight: "400", fontSize: Sizes.font.small }}>
            Fast Approval
          </Text>
        </View>
      </View>

      <View style={{ padding: Sizes.padding.small }}>
        <Text
          style={{
            fontWeight: "400",
            fontSize: Sizes.font.normal,
            color: Colors.text,
          }}
        >
          {loanType}
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
              color: Colors.text,
            }}
          >
            {Naira(Number(amount))}
          </Text>
          <View
            style={{
              backgroundColor: Colors.primary,
              paddingVertical: 3,
              paddingHorizontal: 5,
              borderRadius: 10,
            }}
          >
            <Text
              style={{
                fontWeight: "500",
                fontSize: Sizes.font.small,
                color: Colors.white,
              }}
            >
              {status}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default LoanCard;
