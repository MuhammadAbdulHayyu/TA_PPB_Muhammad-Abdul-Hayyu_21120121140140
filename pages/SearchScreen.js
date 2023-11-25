import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView, TextInput, Alert, TouchableOpacity } from 'react-native';
import axios from "axios";
import VerticalCard from "../components/VerticalCard";
import Header from "../components/Header";
import { useNavigation } from "@react-navigation/native"; // Import useNavigation from @react-navigation/native

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 16,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  searchInput: {
    flex: 1,
    backgroundColor: "white",
    borderRadius: 8,
    padding: 8,
  },
});

function SearchScreen() {
  const [DataBaju, setDataBaju] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState("");
  const navigation = useNavigation(); // Use useNavigation to get the navigation object

  useEffect(() => {
    async function fetchDataBaju() {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setDataBaju(response.data);
        setLoading(false);
      } catch (error) {
        Alert.alert("Gagal mengambil data baju!", error.message);
      }
    }

    fetchDataBaju();
  }, []);

  const handleItemPress = (item) => {
    navigation.navigate("Detail", { dataNama: item }); // Navigate to DetailScreen with the selected item
  };

  useEffect(() => {
    // Filter data berdasarkan kata kunci pencarian
    const filtered = DataBaju.filter(item =>
      item.title.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredData(filtered);
  }, [searchText, DataBaju]);

  return (
    <View style={style.container}>
      <Header headerText={'Daftar Baju'} flexPosition={'left'} />

      {/* Input Pencarian */}
      <View style={style.searchContainer}>
        <TextInput
          style={style.searchInput}
          placeholder="Cari baju..."
          value={searchText}
          onChangeText={(text) => setSearchText(text)}
        />
      </View>

      <ScrollView
        horizontal={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        {/* Menampilkan data yang telah difilter */}
        {filteredData.map((item) => (
          <TouchableOpacity key={item.id} onPress={() => handleItemPress(item)}>
            <VerticalCard key={item.id ? item.id.toString() : "defaultKey"} dataNama={item} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

export default SearchScreen;
