import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const Header = props => {
    return (
        <View  style={styles.header}>
            <Text style={styles.headerTitle}>{props.title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 90,
        paddingTop: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },

    headerTitle: {
        color: 'black',
        fontSize: 37,
        fontWeight: 'bold'
    }
})

export default Header;