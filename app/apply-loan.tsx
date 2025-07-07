import { useColors } from "@/src/constants/Colors";
import { Sizes } from "@/src/constants/Sizes";
import { isTablet } from "@/src/constants/Values";
import { useApplyLoan } from "@/src/hooks/useLoan";
import { applyLoanSchema } from "@/src/services/schema/loan";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { toast } from "sonner-native";
import z from "zod";

const ApplyLoan = () => {
  const { id, purpose, amount } = useLocalSearchParams<{
    id: string;
    purpose: string;
    amount: string;
  }>();

  const { mutate, isPending } = useApplyLoan();
  const colors = useColors()

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(applyLoanSchema),
    defaultValues: {
      amount: "",
      purpose: purpose,
    },
  });

  const onSubmit = (values: z.infer<typeof applyLoanSchema>) => {
    if (Number(values.amount) > Number(amount)) {
      toast.error("Your amount exceeded the loan range");
      return;
    }
    mutate(values, {
      onSuccess: () => {
        toast.success("Loan applied successfully");
      },
      onError: () => {
        toast.error("Something went wrong");
      },
    });
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.white,
        padding: Sizes.padding.medium,
        gap: Sizes.margin.medium,
      }}
    >
      <View>
        <Text
          style={{
            fontSize: Sizes.font.normal,
            marginBottom: 8,
            color: colors.text,
          }}
        >
          Loan Amount
        </Text>
        <Controller
          name="amount"
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextInput
              value={value}
              onChangeText={onChange}
              keyboardType="numeric"
              style={{
                borderWidth: 1,
                borderRadius: Sizes.radius.medium,
                paddingHorizontal: Sizes.padding.medium,
                borderColor: colors.inputGrey,
                backgroundColor: colors.lightGrey,
                height: isTablet ? 65 : 50,
                fontSize: Sizes.font.medium,
                color: colors.text,
                fontWeight: "500",
              }}
            />
          )}
        />
        {errors.amount && (
          <Text
            style={{
              color: colors.danger,
              fontSize: 12,
              marginBottom: 12,
              marginLeft: 4,
            }}
          >
            {errors.amount.message}
          </Text>
        )}
      </View>
      <View>
        <Text
          style={{
            fontSize: Sizes.font.normal,
            marginBottom: 8,
            color: colors.text,
          }}
        >
          Purpose
        </Text>
        <Controller
          name="purpose"
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextInput
              value={value}
              keyboardType="numeric"
              style={{
                borderWidth: 1,
                borderRadius: Sizes.radius.medium,
                paddingHorizontal: Sizes.padding.medium,
                borderColor: colors.inputGrey,
                backgroundColor: colors.lightGrey,
                height: isTablet ? 65 : 50,
                fontSize: Sizes.font.medium,
                color: colors.text,
                fontWeight: "500",
              }}
            />
          )}
        />

        {errors.purpose && (
          <Text
            style={{
              color: colors.danger,
              fontSize: 12,
              marginBottom: 12,
              marginLeft: 4,
            }}
          >
            {errors.purpose.message}
          </Text>
        )}
      </View>
      <TouchableOpacity
        onPress={handleSubmit(onSubmit)}
        style={{
          height: 56,
          marginTop: Sizes.margin.xlarge * 2,
          marginBottom: Sizes.margin.medium,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: Sizes.radius.medium,
          backgroundColor: colors.primary,
        }}
      >
        {isPending ? (
          <ActivityIndicator color={colors.white} />
        ) : (
          <Text
            style={{
              color: colors.white,
              fontWeight: "500",
              fontSize: Sizes.font.medium,
            }}
          >
            Apply
          </Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default ApplyLoan;

const styles = StyleSheet.create({});
