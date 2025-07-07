import { AppProvider, useApp } from "@/src/components/providers/AppProvider";
import { useColors } from "@/src/constants/Colors";
import { Sizes } from "@/src/constants/Sizes";
import { getMode, getToken } from "@/src/services/storage";
import { AntDesign } from "@expo/vector-icons";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { router, Stack, useRootNavigation } from "expo-router";
import { useEffect } from "react";
import { StatusBar, TouchableOpacity } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Toaster } from "sonner-native";

const queryClient = new QueryClient({
  defaultOptions: { queries: { retry: 2 } },
});

const RootLayout = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <QueryClientProvider client={queryClient}>
        <SafeAreaProvider>
          <AppProvider>
            <App />
            <Toaster
              position="top-center"
              theme="light"
              visibleToasts={1}
              style={{
                pointerEvents: "none",
              }}
              duration={600}
            />
          </AppProvider>
        </SafeAreaProvider>
      </QueryClientProvider>
    </GestureHandlerRootView>
  );
};

const App = () => {
  const rootNavigation = useRootNavigation();
  const { isInit, mode, setIsInit, setMode } = useApp();
  const colors = useColors();

  useEffect(() => {
    (async () => {
      const token = await getToken();
      const mode = await getMode();

      if (mode) {
        setMode(mode);
      }

      if (!isInit) {
        if (!token) {
          router.replace("/auth");
        }
        setIsInit(true);
      }
    })();
  }, [rootNavigation]);

  return (
    <>
      <StatusBar
        backgroundColor={colors.white}
        barStyle={mode === "light" ? "dark-content" : "light-content"}
      />
      <Stack>
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="auth/index"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="[id]"
          options={{
            headerTitle: "",
            headerTitleStyle: { color: colors.text },
            headerStyle: { backgroundColor: colors.white },
            contentStyle: { backgroundColor: colors.white },
            headerLeft: () => (
              <TouchableOpacity onPress={() => router.back()}>
                <AntDesign
                  name="arrowleft"
                  size={Sizes.icon.medium}
                  color={colors.dark}
                />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="apply-loan"
          options={{
            presentation: "modal",
            headerTitleStyle: { color: colors.text },
            headerStyle: { backgroundColor: colors.white },
            contentStyle: { backgroundColor: colors.white },
            headerTitle: "Apply For Loan",
            headerLeft: () => (
              <TouchableOpacity onPress={() => router.back()}>
                <AntDesign
                  name="close"
                  size={Sizes.icon.medium}
                  color={colors.dark}
                />
              </TouchableOpacity>
            ),
          }}
        />
      </Stack>
    </>
  );
};

export default RootLayout;
