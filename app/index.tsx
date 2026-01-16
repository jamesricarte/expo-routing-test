import React from "react";
import { ActivityIndicator, View } from "react-native";

import { useAuth } from "@/src/hooks/useAuth";
import styles from "@/src/utils/styles";
import { Redirect } from "expo-router";

const Index = () => {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return (
      <View style={styles.centerView}>
        <ActivityIndicator size="large" color="black" />
      </View>
    );
  }

  if (!isAuthenticated) {
    return <Redirect href="/(auth)/login" />;
  }

  return <Redirect href="/(app)/(drawer)/(consumer-tabs)/home" />;
};

export default Index;
