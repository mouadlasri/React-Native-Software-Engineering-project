import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import NavigationTab from './NavigationTab.js';

export default class Restaurants extends React.Component {
    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Restaurants page</Text>
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
