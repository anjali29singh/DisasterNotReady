import { StyleSheet, View } from "react-native";
import React from "react";
import { Text } from "@rneui/base";

const TAC = () => {
  return (
    <View
      style={{
        marginTop: 30,
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 30, fontWeight: "bold" }}>Our Terms & Conditions</Text>
    </View>
  );
};

export default TAC;

const styles = StyleSheet.create({});
