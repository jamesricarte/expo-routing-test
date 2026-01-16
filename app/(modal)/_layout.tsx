import { Stack } from "expo-router";
import React from "react";

const ModalLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: true }}>
      <Stack.Screen name="add-address" options={{ title: "Add address" }} />
      <Stack.Screen name="image-preview" options={{ title: "Image Preview" }} />
      <Stack.Screen
        name="select-payment"
        options={{ title: "Select Payment" }}
      />
    </Stack>
  );
};

export default ModalLayout;
