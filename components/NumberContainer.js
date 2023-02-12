import React from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';

import Colors from '../constants/colors';
import { LinearGradient } from 'expo-linear-gradient';

const NumberContainer = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{props.children}</Text>
    </View>
  );
};

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: deviceWidth < 380 ? 5 : 10,
    padding: 6,
    marginVertical: deviceWidth < 380 ? 8 : 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  number: {
    fontSize: 30,
    color: 'white',
  },
});

export default NumberContainer;
