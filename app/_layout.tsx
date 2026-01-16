import { Stack } from "expo-router";
import { StatusBar } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { AuthProvider } from "@/src/providers/AuthProvider";

const RootLayout = () => {
  return (
    <GestureHandlerRootView>
      <AuthProvider>
        <StatusBar />
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(auth)" options={{ title: "Auth" }} />
          <Stack.Screen name="(app)" options={{ title: "App" }} />
          <Stack.Screen name="(modal)" options={{ presentation: "modal" }} />
        </Stack>
      </AuthProvider>
    </GestureHandlerRootView>
  );
};

export default RootLayout;
