import Drawer from "expo-router/drawer";
import React from "react";

const DrawerLayout = () => {
  return (
    <Drawer screenOptions={{ headerShown: true }}>
      <Drawer.Screen name="(consumer-tabs)" options={{ title: "Dashboard" }} />
    </Drawer>
  );
};

export default DrawerLayout;
