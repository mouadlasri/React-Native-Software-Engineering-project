import React from 'react';
import { View, Text, TextInput, StyleSheet, ImageBackground, Image, ScrollView, Button } from 'react-native';
import { Card, ListItem, Icon } from 'react-native-elements'
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class ScreenFive extends React.Component {

    constructor() {
        super();
        this.state = {
            cart: [],
            // menu: this.props.navigation.state.params.menu
        }
    }

    testFunction() { 
        console.log(this.props.navigation.state.params.name);
        console.log(this.props.navigation.state.params.menu);
        
    }

    decrementQuantity(item, itemName) {
        let menu = this.state.menu;
        let newStateMenu = this.state.menu;

        // get index of menu item
        let index = menu.findIndex((result) => result.name === itemName);
        // console.log('Data is: ', this.state.menu); 
        if(menu[index].quantity > 0 ) {
            // this.setState(menu[index])
            newStateMenu[index].quantity--;
            this.setState({menu: newStateMenu});
        }       
        console.log('new State ', this.state.menu);
    }

    incrementQuantity(item, itemName) {
        let menu = this.state.menu;
        let newStateMenu = this.state.menu.slice();

        // get index of menu item
        let index = menu.findIndex((result) => result.name === itemName);
        // console.log('Data is: ', this.state.menu); 
        if (menu[index].quantity >= 0) {
            // this.setState(menu[index])
            console.log('TEST');
            newStateMenu[index].quantity++;
            this.setState({ menu: newStateMenu });
        }
        console.log('new State ', this.state.menu);
    }


    componentDidMount() {
        this.setState({
            menu: this.props.navigation.state.params.menu
        })
    }

    render() {
        let data = this.props.navigation.state.params.menu;

        return (
            
           <ScrollView>
                
                {
                    data.map((u, i) => {
                        return (
                            <Card key={i}>
                                <View style={{ flex: 1, flexDirection: 'row' }} >
                                    <View style={{ marginRight: 30 }}>
                                        <Image
                                            style={{ width: 100, height: 100 }}
                                            source={{ uri: u.image }}
                                        />
                                    </View>

                                    <View >
                                        <Text style={{marginBottom: 5}}>{u.name}</Text>
                                        <Text style={styles.name}>Price: {u.price} Dhs</Text>
                                        <View style={{ flex: 1, flexDirection: 'row' }} >
                                            <Text>
                                                Quantity:
                                            </Text>
                                            {/* <View style={{marginLeft: 10, flex: 1, flexDirection: 'row'}}> */}
                                                <Text onPress={() => { this.decrementQuantity(u, u.name) }}>-</Text>
                                                {/* <Ionicons name="md-compass" size={20} onPress={() => {this.decrementQuantity(u, u.name)}}/> */}
                                                <Text style={{marginLeft: 10, marginRight: 10, color: '#000'}}> {u.quantity} </Text>
                                                <Text onPress={() => { this.incrementQuantity(u, u.name) }}>+</Text>                                                
                                                {/* <Ionicons name="md-compass" size={20} onPress={() => { this.incrementQuantity(u, u.name) }}/> */}
                                            {/* </View> */}
                                        </View>
                                        <Text>Total: {u.quantity * u.price}</Text>
                                    </View>
                                </View>
                            </Card>
                            
                        );
                    })
                }
           </ScrollView>
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
    },
    headerText: {
        fontFamily: 'Roboto',
        fontSize: 50,
        color: '#000',
        paddingLeft: 15,
        fontStyle: 'italic',
        marginBottom: 30
    }

});
