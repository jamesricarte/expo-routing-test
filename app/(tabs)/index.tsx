import { Link, router, Stack } from "expo-router";
import React, { useState } from "react";
import { Pressable, Text, TouchableOpacity, View } from "react-native";

import styles from "../utils/styles";

const HomePage = () => {
  const [search, setSearch] = useState("");

  return (
    <View style={styles.centerView}>
      <Stack.Screen
        options={{
          title: "Home",
          headerSearchBarOptions: {
            placeholder: "Search",
            onChangeText: (e) => setSearch(e.nativeEvent.text),
            onSearchButtonPress: (ev: any) => console.log(search),
          },
        }}
      />

      <Link style={styles.button} href="/users/1">
        Go to user 1
      </Link>

      <Pressable onPress={() => router.push("/users/2")} style={styles.button}>
        <Text style={styles.whiteText}>Go to user 2</Text>
      </Pressable>

      <Pressable
        onPress={() =>
          router.push({
            pathname: "/users/[id]",
            params: { id: 3 },
          })
        }
        style={styles.button}
      >
        <Text style={styles.whiteText}>Go to user 3</Text>
      </Pressable>

      <Link style={styles.button2} href="/modal">
        Open a modal
      </Link>

      <Link style={styles.button2} href="/modal" asChild>
        <TouchableOpacity>
          <Text style={styles.whiteText}>Open a modal asChild</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
};

export default HomePage;
