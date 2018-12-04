import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, ImageBackground } from 'react-native';

export default class WelcomeScreen extends React.Component {
    static navigationOptions = {
        header: null
    }
    render() {
        return (
            <ImageBackground source={require('../image.png')} style={{ width: '100%', height: '100%' }}>
                <View style={styles.container}>
                    <View style={[{ width: "90%", margin: 10, fontFamily: "monospace", fontStyle: "italic" }]}>
                        <Text style={styles.headerText}><Text style={{color: 'red'}}>Tell</Text>MeWhere</Text>
                    </View>
                    <View style={[{ width: "90%", margin: 10}]}>
                        <Button title="Log in" onPress={() => this.props.navigation.navigate('LoginScreen')} style={styles.buttons} />                        
                    </View>
                    <View style={[{ width: "90%", margin: 10}]}>
                        <Button title="Sign up" onPress={() => this.props.navigation.navigate('SignupScreen')} style={styles.buttons} />                        
                    </View>
                </View>
            </ImageBackground>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // width: '90%',
        // margin: 10,
        // backgroundColor: '#fff',
        // textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttons: {
        textAlign: 'center',
        // alignItems: 'center',
        width: 400
    },
    headerText: {
        fontFamily: 'Roboto',
        fontSize: 50,
        paddingBottom: 50,
        color: '#fff',
        paddingLeft: 15,
        fontStyle: 'italic'
    }
});
