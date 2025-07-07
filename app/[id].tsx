import { Colors, useColors } from "@/src/constants/Colors";
import { Sizes } from "@/src/constants/Sizes";
import { useGetLoan } from "@/src/hooks/useLoan";
import { LoanType } from "@/src/types/loan";
import { Naira } from "@/src/utils";
import { format } from "date-fns";
import { router, useLocalSearchParams, useNavigation } from "expo-router";
import React, { useEffect, useMemo } from "react";
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const LoanDetail = () => {
  const navigation = useNavigation();
  const { id } = useLocalSearchParams<{ id: string }>();
  const { data, isFetching } = useGetLoan(id);
  const colors = useColors();

  const statusColors: Record<LoanType["status"], string> = {
    pending: "#eddf13",
    rejected: "#870385",
    approved: "#038719",
    flagged: "#870305",
    default: "",
  };

  const color = useMemo(() => {
    if (data?.status) {
      return statusColors[data?.status];
    }
  }, [data?.status]);

  useEffect(() => {
    if (!data?.purpose) return;
    navigation.setOptions({
      headerTitle: `${data?.purpose}`,
    });
  }, [data?.purpose]);

  if (isFetching) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ActivityIndicator color={Colors.primary} size="large" />
      </View>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        paddingVertical: Sizes.padding.normal,
        paddingHorizontal: Sizes.padding.medium,
        backgroundColor: colors.white,
      }}
    >
      <View
        style={{
          flex: 1,
        }}
      >
        <Image
          source={{ uri: data?.image }}
          style={{
            borderRadius: Sizes.radius.normal,
            width: "100%",
            height: 200,
          }}
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginTop: Sizes.margin.medium,
          }}
        >
          <Text
            style={{
              fontWeight: "500",
              color: colors.text,
              fontSize: Sizes.font.xlarge,
            }}
          >
            {Naira(Number(data?.amount))}
          </Text>

          <View
            style={{
              padding: 5,
              backgroundColor: Colors.lightPrimary,
            }}
          >
            <Text
              style={{
                fontWeight: "400",
                fontSize: Sizes.font.small,
              }}
            >
              {data?.featured_type}
            </Text>
          </View>
        </View>

        <View
          style={{
            marginTop: Sizes.margin.large,
          }}
        >
          <Text
            style={{
              fontWeight: "600",
              color: colors.text,
              fontSize: Sizes.font.medium,
            }}
          >
            About Loan
          </Text>
          <Text
            style={{
              fontWeight: "400",
              color: colors.text,
              fontSize: Sizes.font.normal,
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil vel
            numquam consequatur possimus repudiandae aliquam aspernatur.
            Laboriosam nam illum alias aut facilis tempore voluptatibus
            nesciunt, possimus doloremque laudantium cupiditate assumenda!
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View
            style={{
              marginTop: 20,
              backgroundColor: color,
              paddingVertical: 3,
              paddingHorizontal: 5,
              borderRadius: 10,
              alignSelf: "flex-start",
            }}
          >
            {data?.status !== "default" && (
              <Text
                style={{
                  fontWeight: "500",
                  fontSize: Sizes.font.small,
                  color: Colors.white,
                }}
              >
                {data?.status}
              </Text>
            )}
          </View>

          {data?.applied_date && (
            <Text
              style={{
                color: colors.text,
              }}
            >
              {format(data?.applied_date!, "Lo MMMM, yyyy")}
            </Text>
          )}
        </View>
      </View>
      <TouchableOpacity
        onPress={() =>
          router.push(
            `/apply-loan?id=${data?.id}&purpose=${data?.purpose}&amount=${data?.amount}`
          )
        }
        style={{
          height: 56,
          marginBottom: Sizes.margin.medium,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: Sizes.radius.medium,
          backgroundColor: Colors.primary,
        }}
      >
        <Text
          style={{
            color: Colors.white,
            fontWeight: "500",
            fontSize: Sizes.font.medium,
          }}
        >
          Apply For Loan
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoanDetail;

const styles = StyleSheet.create({});
