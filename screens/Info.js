import { StyleSheet, View } from "react-native";
import React from "react";
import { Text } from "@rneui/base";

const Info = () => {
  return (
    <View
      style={{
        marginTop: 30,
        alignItems: "center"
      }}
    >
        <Text style={{ fontSize: 30, fontWeight: "bold" }}>What is this App?</Text>
        <Text style={{ fontSize: 30, fontWeight: "bold", marginTop: 50 }}>Our Purpose</Text>
        <Text style={{ fontSize: 28, fontWeight: "bold", marginTop: 50 }}>Our Goal for Community Impact</Text>
        <Text style={{ fontSize: 30, fontWeight: "bold", marginTop: 50 }}>About the Developers</Text>
    </View>
  );
};

export default Info;

const styles = StyleSheet.create({});
