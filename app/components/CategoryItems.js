import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const CategoryItems = ({ item }) => {
  // console.log(item, "otem in ci");
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.bText}>{item.name}</Text>
        <Text style={styles.bText}>${item.price}</Text>
        <Text style={styles.sText}>{item.description}</Text>
        {/* <Text style={styles.sText}>
          {item.description
            ? item.description
            : "No information about this product"}
        </Text> */}
      </View>
      <View>
        <Image
          style={styles.image}
          // source={require("@/assets/images/food.png")}
          source={{
            uri: `${item.imageUrl}`,
          }}
        />

        <View style={styles.plusCont}>
          <Text style={styles.plus}>+</Text>
        </View>
      </View>
    </View>
  );
};

export default CategoryItems;

const styles = StyleSheet.create({
  container: {
    // paddingRight: 20,
    paddingBottom: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textContainer: {
    maxWidth: "80%",
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
