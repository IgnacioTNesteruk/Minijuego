import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Button,
} from "react-native";

import React, { useState } from "react";

import styles from "./styles";
import Card from "../../components/card";
import Input from "../../components/input";

const StartGame = ({ onStartGame }) => {
  const [value, setValue] = useState("")
  const [confirm, setConfirm] = useState(false)
  const [selectedNumber, setSelectedNumber] = useState("")

  const handleInput = Text => {
    setValue(Text.replace(/[^0-9]/g, ""))
  };

  const handleResetInput = () => {
    setValue("");
    setConfirm(false);
  };

  const handleConfirmation = () => {
    const newValue = parseInt(value);
    if ( isNaN(newValue) || newValue <= 0 || newValue > 99) return;

    setConfirm(true);
    setSelectedNumber(newValue);
    setValue("");
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={"padding"}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
          <Card>
            <Text style={styles.subtitle}>Chose a number</Text>
            <Input
              blutOnSubmit
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="numeric"
              maxLength={2}
              placeholder="Your number"
              newProperty="new"
              value={value}
              onChangeText={handleInput}
            />
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.cleanButton}
                onPress={handleResetInput}
              >
                <Text>Clean</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.confirmButton}
                onPress={handleConfirmation}
              >
                <Text>Confirm</Text>
              </TouchableOpacity>
            </View>
          </Card>
          {confirm && (
            <Card otherStyles={styles.selectedCard}>
              <Text style={{ color: "red" }}>Your Number is:</Text>
              <Text>{selectedNumber}</Text>
              <View>
                <Button
                  title="StartGame"
                  color={"#FF00F0"}
                  onPress={() => onStartGame(selectedNumber)} 
                />
              </View>
            </Card>
          )}
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default StartGame;
