import { Stack } from "expo-router";
import React from "react";

const AppLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(drawer)" options={{ title: "Dashboard" }} />
      <Stack.Screen
        name="(seller-tabs)"
        options={{
          title: "Seller Dashboard",
        }}
      />
    </Stack>
  );
};

export default AppLayout;
