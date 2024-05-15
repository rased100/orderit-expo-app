import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

const CustomButton = (props) => {
  return (
    <View>
      <Pressable style={[styles.customBtn, { ...props.style }]}>
        <Text style={styles.btnText}>{props.title}</Text>
      </Pressable>
    </View>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  customBtn: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    height: 50,
    borderRadius: 8,
  },
  btnText: {
    color: "#fff",
    fontSize: 18,
  },
});
