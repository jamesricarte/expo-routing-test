import { Link, useGlobalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";

import styles from "../utils/styles";

const Modal = () => {
  const { bg } = useGlobalSearchParams<{ bg?: string }>();
  const [selectedColor, setSelectedColor] = useState<string>("");

  useEffect(() => {
    if (bg) setSelectedColor(bg);
  }, [bg]);

  return (
    <View style={styles.centerView}>
      <Link style={styles.button2} href="/modal/second">
        Open standalone colors
      </Link>

      {selectedColor && (
        <View style={{ flexDirection: "row", alignItems: "center", gap: 4 }}>
          <Text>Selected Color:</Text>

          <View
            style={{
              width: 30,
              height: 30,
              backgroundColor: selectedColor,
              borderRadius: 4,
              borderWidth: 2,
              borderColor: "blue",
            }}
          />
        </View>
      )}
    </View>
  );
};

export default Modal;
