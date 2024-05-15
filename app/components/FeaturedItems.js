import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const FeaturedItems = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageCont}>
        <Image
          style={styles.image}
          source={require("@/assets/images/food.png")}
        />
        <View style={styles.plusCont}>
          <Text style={styles.plus}>+</Text>
        </View>
      </View>
      <View>
        <Text style={styles.bText}>Briyani</Text>
        <Text style={styles.bText}>$14.00</Text>
      </View>
    </View>
  );
};

export default FeaturedItems;

const styles = StyleSheet.create({
  container: {
    paddingRight: 20,
  },
  imageCont: {},
  image: {
    height: 65,
    width: 65,
  },
  plusCont: {
    position: "absolute",
    bottom: 2,
    right: 1,
    backgroundColor: "white",
    height: 28,
    width: 28,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    borderWidth: 1,
  },
  plus: {
    color: "black",
  },
  bText: {
    color: "black",
  },
});
