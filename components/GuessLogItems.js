import { View, Text, StyleSheet } from 'react-native';

function GuessLogItems({ roundNumber, guess }) {
  return (
    <View style={styles.listItems}>
      <Text>#{roundNumber}</Text>
      <Text> Opponent's guess: {guess}</Text>
    </View>
  );
}

export default GuessLogItems;

const styles = StyleSheet.create({
  listItems: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12,
    marginVertical: 8,
    backgroundColor: '#f7287b',
    borderRadius: 40,
    borderWidth: 1,
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
    alignItems: 'center',
    width: '100%',
  },
});
