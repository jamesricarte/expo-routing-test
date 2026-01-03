import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const UserPage = () => {
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>User Page {id}</Text>
    </View>
  );
};

export default UserPage;
