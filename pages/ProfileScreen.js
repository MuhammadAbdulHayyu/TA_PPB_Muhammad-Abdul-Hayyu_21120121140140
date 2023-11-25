import React, { useState } from "react";
import { View, Text, Image, Button, Modal, FlatList, StyleSheet } from "react-native";
import { data } from "../data/data";
import Card from "../components/Card";
import Header from "../components/Header";

function ProfileScreen() {
  return (
    <View style={style.container}>
      <Header headerText={"Thrifting Shop"} flexPosition={"center"} />

      <View style={style.contentContainer}>
        {/* Gambar profil dan nama akun */}
        <View style={style.centerContent}>
          <Image source={require("C:/Users/abdul/TAppb_Abdul/assets/waduh.jpeg")} style={style.profileImage} />
          <Text style={style.NamaAkun}>MR.WADUH</Text>
        </View>

        <Text style={style.DaftarNama}>Muhammad Abdul Hayyu/21120121140140</Text>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  centerContent: {
    alignItems: "center",
    justifyContent: "center",
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 75,
    marginBottom: 16,
  },
  NamaAkun: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  DaftarNama: {
    fontSize: 15,
    marginBottom: 5,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
  },
  memberItem: {
    fontSize: 16,
    marginBottom: 8,
  },
});

export default ProfileScreen;
