import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import CustomInput from "../components/CustomInput";
import CustomInputPass from "../components/CustomInputPass";
import CustomButton from "../components/CustomButton";

const LoginScreen = () => {
  return (
    <ScrollView>
      <View style={styles.loginPage}>
        <View style={styles.loginTextCcnt}>
          <Text style={styles.login}>Login</Text>
        </View>
        <Text style={styles.inputLable}>Your Email</Text>
        <CustomInput style={styles.input} placeholder="Enter email address" />

        <Text style={styles.inputLable}>Password</Text>
        <CustomInputPass style={styles.input} placeholder="Password" />
        <View style={styles.managePass}>
          <Text>Forgot your password? </Text>
          <Text style={{ color: "blue" }}>Click here</Text>
        </View>
        <CustomButton title="Log in" />
        <View style={styles.account}>
          <Text>
            Don’t have an account?
            <Text
              style={{ color: "blue" }}
              //   onPress={() => {
              //     navigation.navigate("SignUp");
              //   }}
            >
              {" "}
              Sign up
            </Text>
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default LoginScreen;

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
  managePass: {
    flex: 1,
    flexDirection: "row",
    // justifyContent: 'space-between',
    marginVertical: 10,
  },
  account: {
    alignItems: "center",
    marginVertical: 20,
  },
});
