import { router } from "expo-router";
import React, { useEffect } from "react";
import { Pressable, Text, View } from "react-native";

const GlobalError = ({ error, retry }: any) => {
  useEffect(() => {
    console.error("Global error:", error);
  }, [error]);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
      }}
    >
      <Text style={{ fontSize: 22, fontWeight: "bold" }}>
        Something went wrong
      </Text>

      <Text style={{ marginVertical: 10, textAlign: "center" }}>
        {error?.message}
      </Text>

      <Pressable onPress={retry}>
        <Text style={{ color: "blue" }}>Try again</Text>
      </Pressable>

      <Pressable onPress={() => router.replace("/")}>
        <Text style={{ color: "blue", marginTop: 10 }}>Go home</Text>
      </Pressable>
    </View>
  );
};

export default GlobalError;
