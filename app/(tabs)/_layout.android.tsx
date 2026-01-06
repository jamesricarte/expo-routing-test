import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";

const TabsLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          headerTitle: "Android Home",
          tabBarIcon: () => <Ionicons name="home" size={20} />,
        }}
      />
      <Tabs.Screen
        name="users/[id]"
        options={{
          headerTitle: "User",
          title: "User",
          tabBarIcon: () => <Ionicons name="people-sharp" size={22} />,
        }}
      />
      <Tabs.Screen
        name="secret"
        options={{
          href: null,
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
