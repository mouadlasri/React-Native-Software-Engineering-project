import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default class WelcomeScreen extends React.Component {
    static navigationOptions = {
        header: null
    }
    render() {
        
        return (
            <View style={styles.container}>
                <Text>Home Screen</Text>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    }
});
