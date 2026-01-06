import { Stack } from "expo-router";

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Modal Home",
        }}
      />
      <Stack.Screen
        name="second"
        options={{
          title: "Standalone Colors",
        }}
      />
    </Stack>
  );
};

export default Layout;
