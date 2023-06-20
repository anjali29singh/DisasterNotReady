import { StyleSheet, TouchableOpacity, View } from "react-native";
import React, { useLayoutEffect } from "react";
import { Text } from "@rneui/base";

const Menu = ({ navigation }) => {
  return (
    <View
      style={{
        alignItems: "center",
        marginTop: 70,
      }}
    >
      <Text style={{ fontSize: 35, fontWeight: "bold", marginBottom: 30 }}>Disaster Ready</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Home")} style={styles.button}>
        <Text
          style={{
            color: "black",
            fontSize: 30,
          }}
        >
          Home
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Info")} style={styles.button}>
        <Text
          style={{
            color: "black",
            fontSize: 30,
          }}
        >
          Info
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Settings")} style={styles.button}>
        <Text
          style={{
            color: "black",
            fontSize: 30,
          }}
        >
          Settings
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Contact")} style={styles.button}>
        <Text
          style={{
            color: "black",
            fontSize: 30,
          }}
        >
          Contact
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("TAC")} style={styles.button}>
        <Text
          style={{
            color: "black",
            fontSize: 25,
          }}
        >
          Terms & Conditions
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
    button: {
        flexDirection: "row",
        width: 270,
        height: 60,
        marginTop: 40,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 12,
        backgroundColor: "#FF8989",
      },
});
