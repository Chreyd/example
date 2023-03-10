import React from "react";
import { View, StyleSheet, Text } from "react-native";

const Example = () => {
  return (
    <View style={styles.textContainer}>
      <Text style={styles.textParent}>
        Texte <Text>text contenu</Text>
        <View>
          <Text>view</Text>
        </View>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    height: 300,
    width: "75%",
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  textParent: {
    color: "red",
  },
});

export default Example;
