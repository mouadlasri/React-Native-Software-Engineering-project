import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
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

    // _onPressSaveChanges() {
    //     if(this.props.navigation.state)
    // }

    render() {
        console.log('Params: ', this.props.navigation.state.params);
        console.log('State username => ', this.state.username);
        console.log('State first name => ', this.state.firstName);
        
        return (
            <View style={styles.container}>

                <View style={styles.text}>
                    <Text style={styles.title}>First Name</Text>
                
                </View>
                <Input style={styles.inputText} defaultValue={this.state.firstName}
                    editable={true}
                />

                <Text style={styles.text}>Last Name</Text>
                <Input style={styles.inputText} defaultValue={this.state.lastName}
                />

                <Text style={styles.text}>Password</Text>
                <Input style={styles.inputText} defaultValue={this.state.password} secureTextEntry={true}
                />

                <Text style={styles.text}>Phone Number</Text>
                <Input style={styles.inputText} defaultValue={this.state.phoneNumber}
                />

                <View style={[{ width: "90%", marginTop: 30 }]}>
                    <Button title="Save changes"
                        onPress={() => this._onPressSaveChanges}
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
    }
});
