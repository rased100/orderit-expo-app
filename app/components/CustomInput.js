import { StyleSheet, TextInput, View } from "react-native";
import React from "react";

const CustomInput = (props) => {
  return (
    <View>
      <TextInput
        style={[styles.inputEmail, { ...props.style }]}
        // style={styles.inputEmail}
        placeholder={props.placeholder}
        keyboardType="text"
      />
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  inputEmail: {
    height: 50,
    borderWidth: 1,
    padding: 10,
    borderRadius: 4,
  },
});
