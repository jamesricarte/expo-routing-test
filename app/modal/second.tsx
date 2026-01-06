import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { useRouter } from "expo-router";
import styles from "../utils/styles";

const SecondModal = () => {
  const [selectedColor, setSelectedColor] = useState("#D53E4F");

  const router = useRouter();

  const colors = [
    "#D53E4F",
    "#F46D43",
    "#FDAE61",
    "#FEE08B",
    "#FFFFBF",
    "#E6F598",
    "#ABdda4",
    "#66C2A5",
    "#3288BD",
  ];

  const onColorSelect = (color: string) => {
    setSelectedColor(color);
    router.setParams({ bg: color });
  };

  return (
    <View style={styles.centerView}>
      <Text style={styles.title}>Select color</Text>
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
          width: "80%",
        }}
      >
        {colors.map((color, index) => {
          return (
            <TouchableOpacity
              key={index}
              style={{
                backgroundColor: color,
                width: "30%",
                height: 90,
                borderRadius: 6,
                marginBottom: 14,
                borderColor: color === selectedColor ? "blue" : "",
                borderWidth: color === selectedColor ? 2 : 0,
              }}
              onPress={() => onColorSelect(color)}
            />
          );
        })}
      </View>
    </View>
  );
};

export default SecondModal;
