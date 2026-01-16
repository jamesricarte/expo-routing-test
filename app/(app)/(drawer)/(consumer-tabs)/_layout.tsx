import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

const ConsumerTabLayout = () => {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="home/index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="shop/index"
        options={{
          title: "Shop",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="storefront-outline" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="cart/index"
        options={{
          title: "Cart",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="cart-outline" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="profile/index"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-outline" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="profile/edit"
        options={{
          title: "Profile Edit",
          href: null,
        }}
      />

      <Tabs.Screen
        name="profile/orders"
        options={{
          title: "Profile Orders",
          href: null,
        }}
      />

      <Tabs.Screen
        name="shop/[productId]"
        options={{
          title: "Shop Product",
          href: null,
        }}
      />
    </Tabs>
  );
};

export default ConsumerTabLayout;
