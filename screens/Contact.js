import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
  Modal,
  Alert,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { Text, Input, Button } from "@rneui/base";
import { db } from "../firebase";

const Contact = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const sendMessage = async () => {
    await db
      .collection("contactmessages")
      .add({
        name: name,
        email: email,
        message: message,
      })
      .then(() => {
        setModalVisible(true);
      })
      .catch((error) => alert(error));
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Closed");
          setModalVisible(!modalVisible);
        }}
      >
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View style={styles.modalView}>
            <Text
              style={{
                textAlign: "center",
                fontWeight: "bold",
                fontSize: 25,
                marginBottom: 15
              }}
            >
              Message Sent!
            </Text>
            <Text
              style={{
                marginBottom: 20,
                textAlign: "center",
                fontSize: 20,
              }}
            >
               We will try to get back to you within a week.
            </Text>
            <Pressable
              style={[
                { borderRadius: 20, padding: 10, elevation: 2, width: 150 },
                { backgroundColor: "#FF5B5B" },
              ]}
              onPress={() => navigation.goBack()}
            >
              <Text
                style={{
                  color: "black",
                  fontWeight: "bold",
                  textAlign: "center",
                  fontSize: 20,
                }}
              >
                Close
              </Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <View
        style={{
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 30, fontWeight: "bold" }}>Contact Us!</Text>
        <Text style={{ fontSize: 19, marginTop: 20 }}>
          Any issues with our app? Fill up the form here:
        </Text>
        <View style={styles.inputContainer}>
          <Input
            placeholder="Name"
            autoFocus
            type="text"
            value={name}
            onChangeText={(text) => setName(text)}
            containerStyle={styles.inputStyles}
            inputContainerStyle={{ borderBottomWidth: 0 }}
            multiline={true}
          />
          <Input
            placeholder="Email"
            autoFocus
            type="text"
            value={email}
            onChangeText={(text) => setEmail(text)}
            containerStyle={styles.inputStyles}
            inputContainerStyle={{ borderBottomWidth: 0 }}
            multiline={true}
          />
          <Input
            placeholder="Message"
            autoFocus
            type="text"
            value={message}
            onChangeText={(text) => setMessage(text)}
            containerStyle={styles.messageContainer}
            inputContainerStyle={{ borderBottomWidth: 0 }}
            multiline={true}
          />
        </View>
      </View>
      <Button
        disabled={!name || !email || !message}
        title="Send"
        style={styles.button}
        titleStyle={{
          color: "black",
          fontWeight: "bold",
        }}
        buttonStyle={{
          backgroundColor: "#FF5B5B",
          borderRadius: 8,
        }}
        onPress={sendMessage}
      />
    </KeyboardAvoidingView>
  );
};

export default Contact;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
  },
  inputContainer: {
    marginTop: 50,
    width: 350,
    paddingHorizontal: 10,
  },
  inputStyles: {
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 8,
    padding: 5,
    marginTop: 20,
    height: 50,
  },
  messageContainer: {
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 8,
    padding: 5,
    marginTop: 20,
    height: 200,
  },
  button: {
    width: 200,
    marginTop: 50,
    justifyContent: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
