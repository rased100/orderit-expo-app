import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const ChineseItems = ({ item }) => {
  // console.log(item, "otem in ci");
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.bText}>{item.name}</Text>
        <Text style={styles.bText}>$14.00</Text>
        <Text style={styles.sText}>Some notes about food</Text>
      </View>
      <View>
        <Image
          style={styles.image}
          source={require("@/assets/images/food.png")}
        />

        <View style={styles.plusCont}>
          <Text style={styles.plus}>+</Text>
        </View>
      </View>
    </View>
  );
};

export default ChineseItems;

const styles = StyleSheet.create({
  container: {
    // paddingRight: 20,
    paddingBottom: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  image: {
    height: 65,
    width: 65,
  },
  bText: {
    color: "black",
  },
  sText: {
    color: "#9ba2a9",
  },

  plusCont: {
    position: "absolute",
    top: "20%",
    right: 2,
    backgroundColor: "white",
    height: 30,
    width: 30,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    borderWidth: 1,
  },
  plus: {
    color: "black",
  },
});
