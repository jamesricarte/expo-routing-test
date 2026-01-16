import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

import styles from "@/src/utils/styles";
import { Link, router } from "expo-router";

const HomeScreen = () => {
  return (
    <View style={styles.centerView}>
      <Text>HomeScreen</Text>
      <TouchableOpacity
        onPress={() => router.push("/(modal)/add-address")}
        style={styles.button}
      >
        <Text style={styles.whiteText}>Add Address</Text>
      </TouchableOpacity>

      <Link href="/(modal)/image-preview" style={styles.button}>
        Open Image Preview
      </Link>

      <Link href="/(modal)/select-payment" style={styles.button}>
        Select Payment
      </Link>
    </View>
  );
};

export default HomeScreen;
