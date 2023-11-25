import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import axios from "axios";
import HorizontalCard from "../components/HorizontalCard";
import Header from "../components/Header";
import { useNavigation } from "@react-navigation/native";

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingBottom: 80,
  },
  categoryContainer: {
    marginBottom: 15,
  },
  categoryTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
  },
  splashContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  splashText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
});

const HomeScreen = () => {
  const [DataBaju, setDataBaju] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const navigation = useNavigation();

  React.useEffect(() => {
    async function fetchDataBaju() {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setDataBaju(response.data);
      } catch (error) {
        console.error("Gagal mengambil data barang!", error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchDataBaju();
  }, []);

  const handleItemPress = (item) => {
    navigation.navigate("Detail", { dataNama: item });
  };

  const categories = {
    jewelry: DataBaju.filter(item => item.category === "jewelery"),
    mensclothing: DataBaju.filter(item => item.category === "men's clothing"),
    womensclothing: DataBaju.filter(item => item.category === "women's clothing"),
    electronics: DataBaju.filter(item => item.category === "electronics"),
  };

  return (
    <View style={style.container}>
      <Header headerText={'Daftar Barang'} flexPosition={'left'} />

      <FlatList
        style={style.flatList}
        showsVerticalScrollIndicator={false}
        data={Object.keys(categories)}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <View style={style.categoryContainer}>
            <Text style={style.categoryTitle}>{item}</Text>
            <FlatList
              horizontal
              data={categories[item]}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => handleItemPress(item)}>
                  <HorizontalCard key={item.id ? item.id.toString() : "defaultKey"} dataNama={item} />
                </TouchableOpacity>
              )}
            />
          </View>
        )}
      />
    </View>
  );
};

export default HomeScreen;
