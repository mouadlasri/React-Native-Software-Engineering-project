import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default class ScreenThree extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <Text>Screen Three</Text>
                <Button title="Log out" onPress={() => this.props.navigation.navigate('WelcomeScreen')} />
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
