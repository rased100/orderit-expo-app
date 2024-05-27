import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import FeaturedItems from "../components/FeaturedItems";
import ChineseItems from "../components/ChineseItems";

const Orderit = () => {
  const [items, setItems] = useState([]);
  const [categoryItems, setCategoryItems] = useState([]);
  const [loading, setLoading] = useState(true);

  console.log(items, "items");

  // const categoryItems = items?.categories;
  console.log(categoryItems, "categoryItems");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://m.orderit.today/api/menu/36"); // Replace with your actual API URL
        const data = await response.json();
        const category = data?.categories;
        setItems(data);
        setCategoryItems(category);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <ScrollView>
      <View>
        <View style={styles.imageCont}>
          <Image
            style={styles.image}
            source={require("@/assets/images/coffee.png")}
          />
        </View>

        <View>
          <View style={styles.bBanner}>
            <Text></Text>
          </View>
          <View style={styles.bImageCont}>
            <View>
              <Image
                style={styles.bImage}
                source={require("@/assets/images/cham.png")}
              />
            </View>
          </View>
        </View>
        {/* orderContainer */}
        <View style={styles.orderContainer}>
          <View>
            <Text style={styles.orderText}>Order It Lounge</Text>
            <Text style={styles.number}>347 234 2343</Text>
          </View>
          {/* hr Line */}
          <View style={styles.hrCont}>
            <View style={styles.hrLine}></View>
          </View>
          {/* Featured items */}
          <View>
            <Text style={styles.fiText}>Featured items</Text>
            <ScrollView horizontal={true} style={styles.fItems}>
              <FeaturedItems />
              <FeaturedItems />
              <FeaturedItems />
              <FeaturedItems />
              <FeaturedItems />
              <FeaturedItems />
              {/* <Text>FeaturedItems</Text> */}
            </ScrollView>
          </View>
          {/* hr Line */}
          <View style={styles.hrCont}>
            <View style={styles.hrLine}></View>
          </View>
          {/* Chinese  */}

          <View>
            {categoryItems.map((category) => (
              <View key={category.id}>
                <View style={styles.chineseItems}>
                  <Text style={styles.chText}>{category.name}</Text>

                  {category.items.map((item) => (
                    <View key={item.id}>
                      <ChineseItems item={item} />
                    </View>
                  ))}
                </View>
              </View>
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Orderit;

const styles = StyleSheet.create({
  imageCont: {
    height: 165,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  bBanner: {
    transform: [{ rotate: "6deg" }, { translateY: -8 }],
    backgroundColor: "white",
    height: 100,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
    marginHorizontal: -50,
  },
  bImageCont: {
    position: "absolute",
    top: -67,
    left: 13,
    right: 0,
    zIndex: 10,
  },
  bImage: {
    height: 62,
    width: 62,
    backgroundColor: "white",
    borderRadius: 45,
  },
  orderContainer: {
    backgroundColor: "white",
    zIndex: 20,
    paddingHorizontal: 20,
  },

  orderText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
  },
  number: {
    fontSize: 14,
    fontWeight: "semibold",
    color: "#8e969d",
  },
  hrCont: {
    marginVertical: 10,
  },
  hrLine: {
    borderBottomWidth: 2,
    borderBottomColor: "#e9ecef",
    alignItems: "center",
  },
  fiText: {
    fontSize: 18,
    paddingBottom: 10,
    fontWeight: "semibold",
    color: "black",
  },
  fItems: {
    display: "flex",
    flexDirection: "row",
  },
  chText: {
    fontSize: 18,
    paddingTop: 10,
    paddingBottom: 10,
    fontWeight: "semibold",
    color: "black",
  },
  chineseItems: {
    display: "flex",
    flexDirection: "column",
  },
});
