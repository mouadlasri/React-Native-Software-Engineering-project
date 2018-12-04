import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import NavigationTab from './NavigationTab.js';

export default class MainPage extends React.Component {
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
            <NavigationTab />
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
