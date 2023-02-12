import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';
import PrimaryButton from '../components/PrimaryButton';
import { Alert } from 'react-native';
import { Fontisto } from '@expo/vector-icons';
import { FlatList } from 'react-native';
import GuessLogItems from '../components/GuessLogItems';

const generateRandomBetween = (min, max, exclude) => {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = (props) => {
  const initialGuess = generateRandomBetween(1, 100, props.userChoice);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuesRounds] = useState([initialGuess]);

  useEffect(() => {
    if (currentGuess == props.userChoice) {
      props.onGameOver(guessRounds.length);
    }
  }, [currentGuess, props.userChoice, props.onGameOver]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  function nextGuessHandler(direction) {
    if (
      (direction == 'lower' && currentGuess < props.userChoice) ||
      (direction == 'greater' && currentGuess > props.userChoice)
    ) {
      Alert.alert("Don't lie!", 'You know that this is wrong... ', {
        text: 'Sorry!',
        style: 'cancel',
      });
      return;
    }

    if (direction === 'lower') {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    const newRndNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRndNumber);
    setGuesRounds((prevGuessRounds) => [newRndNumber, ...prevGuessRounds]);
  }
  const guessRoundsListLenght = guessRounds.length;
  return (
    <View style={styles.screen}>
      <Card style={styles.inputContainer}>
        <Text style={styles.text}>Opponent's Guess</Text>
        <NumberContainer>{currentGuess}</NumberContainer>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
              <Fontisto name="minus-a" size={22} color="white" />
            </PrimaryButton>
          </View>
          <View style={styles.button}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>
              <Fontisto name="plus-a" size={22} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </Card>
      <View style={styles.listContainer}>
        <FlatList
          data={guessRounds}
          renderItem={(itemData) => (
            <GuessLogItems
              roundNumber={guessRoundsListLenght - itemData.index}
              guess={itemData.item}
            />
          )}
          keyExtractor={(item) => item}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 24,
  },
  inputContainer: {
    maxWidth: '80%',
    alignItems: 'center',
    width: 300,
    marginTop: 50,
  },
  button: {
    flex: 1,
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    width: 240,
  },
  listContainer: {
    flex: 1,
    fontSize: 24,
    paddingTop: 40,
  },
});

export default GameScreen;
