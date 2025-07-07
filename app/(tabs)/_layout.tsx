import { useColors } from "@/src/constants/Colors";
import { Sizes } from "@/src/constants/Sizes";
import { isIos, isTablet } from "@/src/constants/Values";
import { AntDesign } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";
import { Platform, Text } from "react-native";

const TabLayout = () => {
  const colors = useColors();

  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: colors.white,
          height: Platform.OS === "android" ? 50 : 75,
          paddingVertical: isIos ? 0 : 3,
        },
        sceneStyle: { backgroundColor: colors.white },
      }}
    >
      <Tabs.Screen
        name={"index"}
        options={{
          headerShown: false,
          title: "New Bookings",
          tabBarIcon: ({ focused }) => (
            <AntDesign
              color={focused ? colors.text : colors.muted}
              name="home"
              size={24}
            />
          ),
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                marginLeft: isTablet ? 10 : 0,
                marginTop: isIos ? 4 : 0,
                fontSize: Sizes.font.small,
                color: focused ? colors.text : colors.muted,
              }}
            >
              Home
            </Text>
          ),
        }}
      />
      <Tabs.Screen
        name={"account"}
        options={{
          headerShown: false,
          title: "New Bookings",
          tabBarIcon: ({ focused }) => (
            <AntDesign
              color={focused ? colors.text : colors.muted}
              name="user"
              size={24}
            />
          ),
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                marginLeft: isTablet ? 10 : 0,
                marginTop: isIos ? 4 : 0,
                fontSize: Sizes.font.small,
                color: focused ? colors.text : colors.muted,
              }}
            >
              Account
            </Text>
          ),
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
