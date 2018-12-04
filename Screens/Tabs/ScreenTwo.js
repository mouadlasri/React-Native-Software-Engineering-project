import React from 'react';
import { View, Text, TextInput, StyleSheet, Alert } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { AsyncStorage } from 'react-native';

export default class ScreenTwo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: this.props.navigation.state.params.username,
            password: this.props.navigation.state.params.password,
            firstName: this.props.navigation.state.params.firstName,
            lastName: this.props.navigation.state.params.lastName,
            phoneNumber: this.props.navigation.state.params.phoneNumber
        }
    }

    componentDidMount() {
        
    }

    _onPressSaveChanges() {
        console.log('Inside function');
        AsyncStorage.getItem(this.state.username).then(data => {
            let parsedData = JSON.parse(data);
            parsedData.username = this.state.username;
            parsedData.firstName = this.state.firstName;
            parsedData.lastName = this.state.lastName;
            parsedData.password = this.state.password;
            parsedData.phoneNumber = this.state.phoneNumber;
            console.log('Parsed data => ', parsedData);
            // update value in storage
            AsyncStorage.setItem(this.state.username, JSON.stringify(parsedData));
        }).then(() => {
            Alert.alert(
                'Save changes',
                'Profile updated!',
                [
                    { text: 'OK', onPress: () => console.log('OK Pressed') },
                ],
                { cancelable: false }
            );
        });

       
    }

    render() {
        // console.log('Params: ', this.props.navigation.state.params);
        // console.log('State username => ', this.state.username);
        // console.log('State first name => ', this.state.firstName);
        
        return (
            <View style={styles.container}>
                 <View style={[{ width: "90%", marginBottom: 50, textAlign: 'center', justifyContent: 'center', alignItems: 'center'}]}>
                        <Text style={styles.headerTitle}>Profile</Text>
                </View>
                <View style={styles.text}>
                    <Text style={styles.title}>First Name</Text>
                </View>
                <Input style={styles.inputText} defaultValue={this.props.navigation.state.params.firstName}
                    onChangeText={(text) => this.setState({firstName: text})} editable={true}
                />

                <Text style={styles.text}>Last Name</Text>
                <Input style={styles.inputText} defaultValue={this.props.navigation.state.params.lastName} onChangeText={(text) => this.setState({ lastName: text })}
                />

                <Text style={styles.text}>Password</Text>
                <Input style={styles.inputText} defaultValue={this.props.navigation.state.params.password} onChangeText={(text) => this.setState({ password: text })} secureTextEntry={true}
                />

                <Text style={styles.text}>Phone Number</Text>
                <Input style={styles.inputText} defaultValue={this.props.navigation.state.params.phoneNumber} onChangeText={(text) => this.setState({ phoneNumber: text })}
                />

                <View style={[{ width: "90%", marginTop: 30 }]}>
                    <Button title="Save changes"
                        onPress={() => this._onPressSaveChanges()}
                        style={styles.saveChangeButton}
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
        justifyContent: 'center'
        
    },
    text: {
        // flex: 1,
        // marginTop: 10,
        
    },
    title: {
        textAlign: 'left'
    },
    inputText: {
        backgroundColor: '#DCDCDC',
        // height: 40,
        fontSize: 10
    },
    usernameText: {
        backgroundColor: '#D3D3D3'
    },
    saveChangeButton: {
    },
     headerTitle: {
        fontFamily: 'Roboto',
        fontSize: 30,
        marginTop: 0,
        paddingTop: 0,
        color: '#000',
        fontStyle: 'italic',
        textDecorationLine: 'underline'
    }
});
