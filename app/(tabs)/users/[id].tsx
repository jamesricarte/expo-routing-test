import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

import styles from "@/app/utils/styles";

const UserPage = () => {
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <View style={styles.centerView}>
      <Text>User {id}</Text>
    </View>
  );
};

export default UserPage;
