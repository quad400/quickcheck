import { useApp } from "@/src/components/providers/AppProvider";
import { useColors } from "@/src/constants/Colors";
import { Sizes } from "@/src/constants/Sizes";
import { useUser } from "@/src/hooks/useUser";
import { logout, setMode } from "@/src/services/storage";
import { Feather } from "@expo/vector-icons";
import React from "react";
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Account = () => {
  const { data, isFetching } = useUser();
  const colors = useColors();

  const { mode, setMode: AppMode } = useApp();

  const toggleMode = () => {
    setMode(mode === "light" ? "dark" : "light");
    AppMode(mode === "light" ? "dark" : "light");
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.white,
      }}
    >
      {isFetching ? (
        <View
          style={{
            height: 250,
            width: 200,
          }}
        >
          <ActivityIndicator color={colors.primary} size="large" />
        </View>
      ) : (
        <View>
          <Image
            source={{ uri: data?.avatar }}
            style={{
              height: 200,
              width: 200,
              borderRadius: 100,
            }}
          />
          <View style={{ marginVertical: Sizes.margin.medium }}>
            <Text
              style={{
                fontWeight: "600",
                color: colors.dark,
                fontSize: Sizes.font.xlarge,
              }}
            >
              {data?.fullname}
            </Text>
            <Text
              style={{
                fontWeight: "500",
                fontSize: Sizes.font.medium,
                color: colors.muted,
              }}
            >
              {data?.email}
            </Text>
          </View>
        </View>
      )}
      <View
        style={{
          padding: Sizes.padding.medium,
          gap: Sizes.margin.small,
        }}
      >
        <TouchableOpacity
          onPress={toggleMode}
          style={{
            borderWidth: 1,
            borderColor: colors.inputGrey,
            paddingHorizontal: Sizes.padding.medium,
            paddingVertical: Sizes.padding.normal,
            borderRadius: Sizes.radius.normal,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Text
            style={{
              fontSize: Sizes.font.medium,
              fontWeight: "500",
              color: colors.text,
            }}
          >
            Switch Mode
          </Text>
          <Feather
            color={colors.dark}
            name={mode === "light" ? "moon" : "sun"}
            size={Sizes.icon.medium}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => logout()}
          style={{
            borderWidth: 1,
            borderColor: colors.inputGrey,
            paddingHorizontal: Sizes.padding.medium,
            paddingVertical: Sizes.padding.normal,
            borderRadius: Sizes.radius.normal,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Text
            style={{
              fontSize: Sizes.font.medium,
              fontWeight: "500",
              color: colors.danger,
            }}
          >
            Logout
          </Text>
          <Feather
            name="log-out"
            size={Sizes.icon.medium}
            color={colors.danger}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Account;

const styles = StyleSheet.create({});
