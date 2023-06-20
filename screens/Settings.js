import { StyleSheet, View } from "react-native";
import React from "react";
import { Text } from "@rneui/base";

const Settings = () => {
  return (
    <View
      style={{
        alignItems: "center",
        marginTop: 40,
      }}
    >
      <Text style={{ fontSize: 30, fontWeight: "bold" }}>Dark Mode</Text>
      <Text style={{ fontSize: 30, fontWeight: "bold", marginTop: 50 }}>Font Size</Text>
      <Text style={{ fontSize: 30, fontWeight: "bold", marginTop: 50 }}>FPS</Text>
      <Text style={{ fontSize: 30, fontWeight: "bold", marginTop: 50 }}>Simulation Volume</Text>
      <Text style={{ fontSize: 30, fontWeight: "bold", marginTop: 50 }}>Simulation Resolution</Text>
      <Text style={{ fontSize: 15, fontWeight: "light", marginTop: 50 }}>Our Terms & Conditions</Text>

    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({});
