import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

import styles from "./utils/styles";

const Login = () => {
  return (
    <View style={styles.centerView}>
      <Text style={styles.title}>Login</Text>
      <Link style={styles.button} href="/(tabs)" replace>
        Login
      </Link>
    </View>
  );
};

export default Login;
