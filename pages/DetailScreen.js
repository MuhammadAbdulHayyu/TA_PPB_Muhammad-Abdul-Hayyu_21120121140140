import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 18,
  },
  itemContainer: {
    marginBottom: 20,
  },
  itemTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
  itemImage: {
    width: 300,
    height: 400,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: "black",
  },
  itemDetails: {
    marginTop: 10,
    fontSize: 16,
  },
});

const DetailScreen = () => {
  const route = useRoute();
  const { dataNama } = route.params;

  return (
    <View style={style.container}>
      <View style={style.itemContainer}>
        <Text style={style.itemTitle}>{dataNama.title}</Text>
        <Image
          source={{ uri: dataNama.image || "https://avatars.githubusercontent.com/u/116475964?v=4" }}
          style={style.itemImage}
        />
        <Text style={style.itemDetails}>Price: {dataNama.price}</Text>
        <Text style={style.itemDetails}>Category: {dataNama.category}</Text>
        {/* Tambahkan detail lainnya sesuai kebutuhan */}
      </View>
    </View>
  );
};

export default DetailScreen;
