import { StyleSheet, TouchableOpacity, View } from "react-native";
import React, { useLayoutEffect } from "react";
import { HeaderBackButton } from '@react-navigation/stack';
import { Text } from "@rneui/base";
import {
    AntDesign,
  } from "@expo/vector-icons";

const Menu = ({ navigation }) => {
    useLayoutEffect(() => {
        navigation.setOptions({
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
        marginTop: 70,
      }}
    >
      <Text style={{ fontSize: 35, fontWeight: "bold", marginBottom: 30 }}>Disaster Ready</Text>
      <TouchableOpacity style={styles.button}>
        <Text
          style={{
            color: "black",
            fontSize: 30,
          }}
        >
          Home
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text
          style={{
            color: "black",
            fontSize: 30,
          }}
        >
          About
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text
          style={{
            color: "black",
            fontSize: 30,
          }}
        >
          Settings
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text
          style={{
            color: "black",
            fontSize: 30,
          }}
        >
          Contact
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
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
