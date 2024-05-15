import { StyleSheet, TextInput, View } from "react-native";
import React from "react";

const CustomInputPass = (props) => {
  return (
    <View>
      <TextInput
        style={[styles.inputPass, { ...props.style }]}
        // style={styles.inputPass}
        placeholder={props.placeholder}
        keyboardType="text"
      />
    </View>
  );
};

export default CustomInputPass;

const styles = StyleSheet.create({
  inputPass: {
    height: 50,
    borderWidth: 1,
    padding: 10,
    borderRadius: 4,
  },
});
