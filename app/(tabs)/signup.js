import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import CustomInput from "../components/CustomInput";
import CustomInputPass from "../components/CustomInputPass";
import CustomButton from "../components/CustomButton";

const SignupScreen = () => {
  return (
    <ScrollView>
      <View style={styles.loginPage}>
        <View style={styles.loginTextCcnt}>
          <Text style={styles.login}>Sign up</Text>
        </View>

        <Text style={styles.inputLable}>Your Name</Text>
        <CustomInput style={styles.input} placeholder="John Doe" />

        <Text style={styles.inputLable}>Your Email</Text>
        <CustomInput style={styles.input} placeholder="" />

        <Text style={styles.inputLable}>Your Whatsapp Number</Text>
        <CustomInput style={styles.input} placeholder="" />

        <Text style={styles.inputLable}>Password</Text>
        <CustomInputPass style={styles.input} placeholder="Password" />

        <Text style={styles.inputLable}>Retype Password</Text>
        <CustomInputPass style={styles.input} placeholder="Password" />

        <CustomButton title="Sign up" />
        <View style={styles.account}>
          <Text>
            Already have an account?
            <Text style={{ color: "blue" }}> Log in</Text>
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  loginPage: {
    margin: 15,
  },
  loginTextCcnt: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  login: {
    fontSize: 28,
    color: "black",
  },
  inputLable: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    marginBottom: 20,
  },
  account: {
    alignItems: "center",
    marginVertical: 20,
  },
});
