import { Link, router } from "expo-router";
import React from "react";
import { Pressable, Text, View } from "react-native";

const HomePage = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home Page</Text>

      <Link href="/users/1">Go to user 1</Link>

      <Pressable onPress={() => router.push("/users/2")}>
        <Text>Go to user 2</Text>
      </Pressable>

      <Pressable
        onPress={() =>
          router.push({
            pathname: "/users/[id]",
            params: { id: 3 },
          })
        }
      >
        <Text>Go to user 3</Text>
      </Pressable>
    </View>
  );
};

export default HomePage;
