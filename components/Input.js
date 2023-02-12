import { TextInput, StyleSheet } from 'react-native';
import React from 'react';


const Input = props => {
    return <TextInput {...props} style={{...styles.input, ...props.style}} />;
};


const styles = StyleSheet.create({
    input: {
        height: 30,
        borderBottomWidth: 0.6,
        borderBottomColor: 'grey',
        marginVertical: 10
    }
});


export default Input;