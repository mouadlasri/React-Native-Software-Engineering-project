import React from 'react';
import { View, Text, TextInput,     StyleSheet, SafeAreaView, KeyboardAvoidingView, TouchableWithoutFeedback} from 'react-native';
import { AsyncStorage } from 'react-native';
import { Input, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class LoginScreen extends React.Component {
  
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    handleUsername = (username) => {
        this.setState({ username: username });
    }

    handlePassword = (password) => {
        this.setState({ password: password });
    }

    _onPressLoginButton() {
        // alert(this.state.username);
        if(this.state.password.length <= 0 && this.state.username.length <= 0) {
            alert('Enter valid credentials.');
        } else if(this.state.password.length < 3) {
            alert('Enter a valid password (3 characters minimum and 8 characters maximum).');
        } else if (this.state.username.length <= 0) {
            alert('Enter a valid username.');
        } else {
            AsyncStorage.getItem(this.state.username).then((data) => {
                let parsedData = JSON.parse(data);
                if (data === null || parsedData.password !== this.state.password) {
                    alert('User not found');
                } else {
                    this.props.navigation.navigate('InnerStackNavigator', { 
                        username: this.state.username ,
                        password: parsedData.password,
                        firstName: parsedData.firstName,
                        lastName: parsedData.lastName,
                        phoneNumber: parsedData.phoneNumber
                    });
                }
            });
        }

        // this.props.navigation.navigate('InnerStackNavigator');   
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Login</Text>
                <View style={[{ width: "90%", width: 370, marginTop: 10, paddingLeft: 30 }]}>
                    <Input
                        placeholder='Enter username..'
                        leftIcon={
                            <Icon
                                name='user'
                                size={24}
                                color='black'
                            />
                        }
                        onChangeText={this.handleUsername}
                        value={this.state.username}
                        style={styles.input}
                        maxLength={10}
                    />
                </View>
               
                <View style={[{ width: "90%", width: 370, marginTop: 10, paddingLeft: 30 }]}>
                    <Input
                        placeholder='Enter password..'
                        leftIcon={
                            <Icon
                                name='lock'
                                size={24}
                                color='black'
                            />
                        }
                        onChangeText={this.handlePassword}
                        value={this.state.password}
                        secureTextEntry={true}
                        maxLength={8}
                        
                    />
                </View>
               

                <View style={[{ width: "90%", margin: 10 }]}>
                    <Button
                        onPress={() => 
                            this._onPressLoginButton()
                        }
                        title="Login"
                        containerStyle={{ marginTop: 20 }}
                        style={styles.button}
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
        // justifyContent: 'center',
        marginTop: 40
    },
    input: {
        // margin: 10
    },
    button: {
        width: 700
    },
    inputFields: {
        marginTop: 30,
        width: '90%'
    }
});
