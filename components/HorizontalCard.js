import React from "react";
import { View, Text, Image } from "react-native";

const HorizontalCard = ({ dataNama }) => {
  const imageUrl = dataNama.image || "https://avatars.githubusercontent.com/u/116475964?v=4";
  const title = dataNama.title || "Anime Title";
  const price = dataNama.price || "N/A";
  const category = dataNama.category || "Kategori";

  return (
    <View
      style={{
        paddingVertical: 4,
        borderRadius: 8,
        flexDirection: "column",
        alignItems: "center",
        marginVertical: 10,
      }}
    >
      <View
        style={{
          borderWidth: 1,
          borderRadius: 4,
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          width: 300,
        }}
      >
        <Image
          source={{ uri: imageUrl }}
          style={{
            width: 100,
            height: 150,
            borderWidth: 1,
            borderRadius: 1,
            borderColor: "black",
          }}
        />
        <View
          style={{
            flexDirection: "column",
            marginLeft: 7,
            justifyContent: "flex-start",
            maxWidth: 180,
          }}
        >
          <Text
            style={{
              marginTop: 5,
              fontSize: 15,
              fontWeight: "600",
              alignItems: "flex-end",
              paddingVertical: 5,
            }}
          >
            {title}
          </Text>
          <Text
            style={{
              fontSize: 11,
              fontWeight: "500",
              color: "gray",
            }}
          >
            Price: {price}
          </Text>
          <Text
            style={{
              fontSize: 11,
              fontWeight: "500",
              color: "gray",
            }}
          >
            Category: {category}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default HorizontalCard;
