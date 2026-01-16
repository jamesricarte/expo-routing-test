import React from "react";
import { Text, View } from "react-native";

import styles from "@/src/utils/styles";
import { Link } from "expo-router";

const LoginScreen = () => {
  return (
    <View style={styles.centerView}>
      <Text>LoginScreen</Text>
      <Link
        href="/(app)/(drawer)/(consumer-tabs)/home"
        style={styles.button}
        replace
      >
        Login
      </Link>
      <Link href="/crash" style={styles.button} replace>
        Test Crash
      </Link>
    </View>
  );
};

export default LoginScreen;
