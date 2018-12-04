import React from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, ImageBackground, Alert} from 'react-native';
import { AsyncStorage } from 'react-native';
import { Input, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

export default class SignupScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            firstName: '',
            lastName: '',
            phoneNumber: ''
        }
    }

    handleUsername = (username) => {
        this.setState({username: username});
    }

    handlePassword = (password) => {
        this.setState({password: password});
    }

    handleFirstName = (firstName) => {
        this.setState({firstName: firstName});
    }

    handleLastName = (lastName) => {
        this.setState({lastName: lastName});
    }

    handlePhoneNumber = (phoneNumber) => {
        this.setState({phoneNumber: phoneNumber});
    }

    _onPressSignupButton() {
        if (this.state.firstName.length <= 0 || this.state.lastName.length <= 0 
            || this.state.phoneNumber.length <= 0 || this.state.username.length <= 0
            || this.state.password.length <= 0) {
                alert('Fill in all required fields.');
            }
        else if (this.state.password.length < 3) {
            alert('Password minimum length is 3 characters.');
        } else {
            AsyncStorage.getItem(this.state.username).then((user) => {
                if(user === null) {
                    var userData = {
                        firstName: this.state.firstName,
                        lastName: this.state.lastName,
                        phoneNumber: this.state.phoneNumber,
                        username: this.state.username,
                        password: this.state.password
                    }
                    // AsyncStorage.setItem(this.state.username, JSON.stringify(userData)).then(() => this.props.navigation.navigate('InnerStackNavigator', {username: this.state.username}));
                    AsyncStorage.setItem(this.state.username, JSON.stringify(userData)).then(() => { 
                        this.props.navigation.navigate('WelcomeScreen');
                        Alert.alert(
                            'Create account',
                            'Account created!',
                            [
                                { text: 'OK', onPress: () => console.log('OK Pressed') },
                            ],
                            { cancelable: false }
                        );
                    });
                    
                } else {
                    alert('Username already exists.');
                }
            });
           
        }
    }

    render() {
        return (
           
                <View style={styles.container}>
                <View style={[{ width: "90%", textAlign: 'center', justifyContent: 'center', alignItems: 'center'}]}>
                        <Text style={styles.headerTitle}>Signup</Text>
                    </View>
                
                    <View style={[{ width: "90%", width: 370, marginTop: 30, paddingLeft: 30 }]}>
                        <Input
                            placeholder='Enter first name.. *'
                            leftIcon={
                                <Icon
                                    name='angle-double-right'
                                    size={24}
                                    color='black'
                                />
                            }
                            onChangeText={this.handleFirstName}
                            value={this.state.firstName}
                            maxLength={10}
                        />
                    </View>

                    <View style={[{ width: "90%", width: 370, marginTop: 10, paddingLeft: 30 }]}>
                        <Input
                            placeholder='Enter last name.. *'
                            leftIcon={
                                <Icon
                                    name='angle-double-right'
                                    size={24}
                                    color='black'
                                />
                            }
                            onChangeText={this.handleLastName}
                            value={this.state.lastName}
                            maxLength={10}                    
                        />
                    </View>

                    <View style={[{ width: "90%", width: 370, marginTop: 10, paddingLeft: 30 }]}>
                        <Input
                            placeholder='Enter username.. *'
                            leftIcon={
                                <Icon
                                    name='user'
                                    size={24}
                                    color='black'
                                />
                            }
                            onChangeText={this.handleUsername}
                            value={this.state.username}
                            maxLength={10}
                            style={styles.input}
                        />
                    </View>

                    <View style={[{ width: "90%", width: 370, marginTop: 10, paddingLeft: 30 }]}>
                        <Input
                            placeholder='Enter password.. *'
                            leftIcon={
                                <Icon
                                    name='lock'
                                    size={24}
                                    color='black'
                                />
                            }
                            onChangeText={this.handlePassword}
                            maxLength={8}
                            secureTextEntry={true}
                            value={this.state.password}
                        />
                    </View>

                    <View style={[{ width: "90%", width: 370, marginTop: 10, paddingLeft: 30 }]}>
                        <Input
                            placeholder='Enter phone number.. *'
                            leftIcon={
                                <Icon
                                    name='phone'
                                    size={24}
                                    color='black'
                                />
                            }
                            onChangeText={this.handlePhoneNumber}
                            maxLength={10}
                            value={this.state.phoneNumber}
                            keyboardType='numeric'
                        />
                    </View>
                    <View style={[{ width: "90%", margin: 10, marginTop: 20, marginBottom: 50}]}>
                        <Button
                            onPress={() => {this._onPressSignupButton()}}
                            title="Sign up"
                        />
                    </View>
                </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerTitle: {
        fontFamily: 'Roboto',
        fontSize: 30,
        marginTop: 0,
        paddingTop: 0,
        color: '#000',
        paddingLeft: 25,
        fontStyle: 'italic',
        textDecorationLine: 'underline'
    }
});
