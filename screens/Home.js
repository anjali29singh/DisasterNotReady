import { StyleSheet, View, TouchableOpacity } from "react-native";
import React, { useLayoutEffect } from "react";
import { Text } from "@rneui/base";
import {
  Ionicons,
  AntDesign,
  MaterialCommunityIcons,
  Feather,
} from "@expo/vector-icons";

const Home = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-start",
            width: 80,
            marginLeft: 10,
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("Menu")}
            activeOpacity={0.5}
          >
            <Feather name="menu" size={30} color="black" />
          </TouchableOpacity>
        </View>
      ),
      headerRight: () => (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-end",
            width: 80,
            marginRight: 10,
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("Info")}
            activeOpacity={0.5}
          >
            <AntDesign name="infocirlceo" size={25} color="black" />
          </TouchableOpacity>
        </View>
      ),
    });
  }, [navigation]);

  return (
    <View
      style={{
        alignItems: "center",
        marginTop: 60,
      }}
    >
      <Text style={{ fontSize: 30 }}>Get Ready to Get</Text>
      <Text style={{ fontSize: 30, fontWeight: "bold" }}>Disaster Ready!</Text>

      <Text style={{ fontSize: 20, fontWeight: "light", marginTop: 60 }}>
        What do you want to learn today?
      </Text>

      <TouchableOpacity style={styles.eqButton}>
        <Ionicons name="earth" size={35} color="white" />

        <Text
          style={{
            color: "white",
            fontSize: 25,
            fontWeight: "bold",
          }}
        >
          Earthquakes
        </Text>

        <AntDesign name="arrowright" size={35} color="white" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.fireButton}>
        <MaterialCommunityIcons name="pine-tree-fire" size={35} color="white" />

        <Text
          style={{
            color: "white",
            fontSize: 25,
            fontWeight: "bold",
          }}
        >
          Wildfires
        </Text>

        <AntDesign name="arrowright" size={35} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  eqButton: {
    flexDirection: "row",
    width: 300,
    height: 60,
    marginTop: 40,
    alignItems: "center",
    justifyContent: "space-evenly",
    borderRadius: 12,
    backgroundColor: "#039C00",
  },
  fireButton: {
    flexDirection: "row",
    width: 300,
    height: 60,
    marginTop: 40,
    alignItems: "center",
    justifyContent: "space-evenly",
    borderRadius: 12,
    backgroundColor: "#FF5621",
  },
});
