import { useColors } from "@/src/constants/Colors";
import { ACCESS_TOKEN_STORAGE_KEY } from "@/src/constants/Env";
import { Bg } from "@/src/constants/Image";
import { Sizes } from "@/src/constants/Sizes";
import { isTablet } from "@/src/constants/Values";
import { useSignIn } from "@/src/hooks/useAuth";
import { authSchema } from "@/src/services/schema/auth";
import { setToken } from "@/src/services/storage";
import { FontAwesome5 } from "@expo/vector-icons";
import { zodResolver } from "@hookform/resolvers/zod";
import { router } from "expo-router";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import {
  ActivityIndicator,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { toast } from "sonner-native";
import z from "zod";

const Login = () => {
  const { mutate, isPending } = useSignIn();
  const [checkPass, setCheckPass] = useState(false);
  const colors = useColors();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(authSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof authSchema>) => {
    mutate(values, {
      onSuccess: () => {
        setToken(ACCESS_TOKEN_STORAGE_KEY);
        router.push("/(tabs)");
        reset();
      },
      onError: (error) => {
        toast.error(error.message);
      },
    });
  };

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <Image
        source={Bg}
        style={{
          flex: 1,
          height: Sizes.height,
          width: Sizes.width,
        }}
      />
      <View
        style={{
          padding: Sizes.padding.medium,
          position: "absolute",
          backgroundColor: colors.white,
          height: Sizes.height * 0.8,
          width: "100%",
          bottom: 0,
          borderTopEndRadius: Sizes.radius.large,
          borderTopStartRadius: Sizes.radius.large,
        }}
      >
        <View
          style={{
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontWeight: "600",
              textAlign: "center",
              color: colors.text,
              fontSize: Sizes.font.xlarge * 1.2,
            }}
          >
            Welcome back
          </Text>
        </View>

        <View
          style={{
            marginTop: Sizes.margin.xlarge,
          }}
        >
          <Text
            style={{
              fontSize: Sizes.font.normal,
              marginBottom: 8,
              color: colors.text,
            }}
          >
            Email
          </Text>
          <Controller
            name="email"
            control={control}
            render={({ field: { onChange, value } }) => (
              <TextInput
                value={value}
                onChangeText={onChange}
                autoCapitalize="none"
                keyboardType="email-address"
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
          {errors.email && (
            <Text
              style={{
                color: colors.danger,
                fontSize: 12,
                marginBottom: 12,
                marginLeft: 4,
              }}
            >
              {errors.email.message}
            </Text>
          )}
        </View>
        <View
          style={{
            marginTop: Sizes.margin.xlarge,
          }}
        >
          <Text
            style={{
              fontSize: Sizes.font.normal,
              marginBottom: 8,
              color: colors.text,
            }}
          >
            Password
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              borderWidth: 1,
              borderRadius: Sizes.radius.medium,
              paddingHorizontal: Sizes.padding.medium,
              borderColor: colors.inputGrey,
              backgroundColor: colors.lightGrey,
              height: isTablet ? 65 : 50,
            }}
          >
            <Controller
              name="password"
              control={control}
              render={({ field: { onChange, value } }) => (
                <TextInput
                  style={{
                    fontSize: Sizes.font.medium,
                    color: colors.text,
                    fontWeight: "500",
                    flex: 1,
                  }}
                  selectionColor={colors.primary}
                  value={value}
                  onChangeText={onChange}
                  secureTextEntry={!checkPass}
                />
              )}
            />
            <Pressable
              onPress={() => setCheckPass(!checkPass)}
              style={{
                padding: 4,
              }}
            >
              {checkPass ? (
                <FontAwesome5
                  name="eye"
                  size={Sizes.padding.medium}
                  color={colors.muted}
                />
              ) : (
                <FontAwesome5
                  name="eye-slash"
                  size={Sizes.padding.medium}
                  color={colors.muted}
                />
              )}
            </Pressable>
          </View>
        </View>
        {errors.password && (
          <Text
            style={{
              color: colors.danger,
              fontSize: 12,
              marginBottom: 12,
              marginLeft: 4,
            }}
          >
            {errors.password.message}
          </Text>
        )}
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
              Login
            </Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
