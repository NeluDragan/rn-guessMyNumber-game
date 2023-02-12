import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  KeyboardAvoidingView,
} from 'react-native';

import Card from '../components/Card';
import Colors from '../constants/colors';
import Input from '../components/Input';
import {
  borderBottomColor,
  color,
} from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import NumberContainer from '../components/NumberContainer';
import PrimaryButton from '../components/PrimaryButton';

const StartGameScreen = (props) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();

  const numberInputHandler = (inputText) => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ''));
  };

  const resetInputHandler = () => {
    setEnteredValue('');
    setConfirmed(false);
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredValue);
    if (isNaN(chosenNumber) || chosenNumber <= 1 || chosenNumber > 99) {
      Alert.alert(
        'Invalid number!',
        'Number has to be a number between 1 and 99,',
        [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }]
      );
      return;
    }
    setConfirmed(true);
    setSelectedNumber(parseInt(enteredValue));
    setEnteredValue('');
    Keyboard.dismiss();
    props.onPickNumber(chosenNumber);
  };

  let confirmedOutput;

  if (confirmed) {
    confirmedOutput = (
      <Card style={styles.summaryContainers}>
        <Text>You Selected!</Text>
        <NumberContainer>{selectedNumber}</NumberContainer>
        <PrimaryButton>START GAME</PrimaryButton>
      </Card>
    );
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <KeyboardAvoidingView style={styles.screen} behavior="padding">
        <View style={styles.screen}>
          <Text style={styles.title}>Start a New Game!</Text>
          <Card style={styles.inputContainer}>
            <Text style={styles.secondTitle}>Enter a Number</Text>
            <TextInput
              style={styles.input}
              maxLenght={2}
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="number-pad"
              onChangeText={numberInputHandler}
              value={enteredValue}
            />
            <View style={styles.buttonContainer}>
              <View style={styles.button}>
                <PrimaryButton
                  onPress={resetInputHandler}
                  color={Colors.accent}
                >
                  Reset
                </PrimaryButton>
              </View>
              <View style={styles.button}>
                <PrimaryButton
                  onPress={confirmInputHandler}
                  color={Colors.primary}
                >
                  Confirm
                </PrimaryButton>
              </View>
            </View>
          </Card>
          {confirmedOutput}
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    marginTop: 30,
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    width: 240,
  },
  inputContainer: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center',
    backgroundColor: '#f7287b',
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
    color: 'black',
    paddingBottom: 15,
  },

  secondTitle: {
    color: 'black',
  },

  button: {
    flex: 1,
  },
  input: {
    width: 100,
    height: 50,
    fontSize: 32,
    textAlign: 'center',
    borderBottomColor: 'white',
    color: 'white',
    fontWeight: 'bold',
    borderBottomWidth: 2,
    marginVertical: 8,
  },
  chosenNumberText: {
    marginTop: 50,
  },
  summaryContainers: {
    marginTop: 10,
    alignItems: 'center',
  },
  numberContainer: {
    marginHorizontal: 50,
    fontSize: 30,
  },
});

export default StartGameScreen;
