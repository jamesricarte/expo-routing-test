import { router } from "expo-router";
import React from "react";
import { Pressable, Text, View } from "react-native";

const NotFound = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
      }}
    >
      <Text style={{ fontSize: 22, fontWeight: "bold" }}>
        404 – Page Not Found
      </Text>

      <Text style={{ marginVertical: 10, textAlign: "center" }}>
        The page you are trying to open does not exist.
      </Text>

      <Pressable onPress={() => router.replace("/")}>
        <Text style={{ color: "blue" }}>Go back home</Text>
      </Pressable>
    </View>
  );
};

export default NotFound;
