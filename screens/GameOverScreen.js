import { Text, StyleSheet } from 'react-native';
import { View } from 'react-native';
import Card from '../components/Card';
import PrimaryButton from '../components/PrimaryButton';

function GameOverScreen({ roundsNumber, userNumber, onStartNewGame }) {
  return (
    <View style={styles.screen}>
      <Card style={styles.outputContainer}>
        <Text style={styles.text}>Game is Over</Text>
        <PrimaryButton onPress={onStartNewGame}>
          Start a New Game!
        </PrimaryButton>
      </Card>
      <View style={styles.screen}>
        <Text style={styles.summaryText}>
          You phone needed
          <Text style={styles.highlight}> {roundsNumber}</Text> rounds to guess
          the number
          <Text style={styles.highlight}> {userNumber}</Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  outputContainer: {
    alignItems: 'center',
    width: '80%',
    marginTop: 50,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 16,
  },
  screen: {
    flex: 1,
    alignItems: 'center',
  },
  summaryText: {
    fontSize: 20,
    alignItems: 'center',
    textAlign: 'center',
    margin: 34,
    fontSize: 24,
  },
  highlight: {
    fontWeight: 'bold',
  },
});

export default GameOverScreen;
