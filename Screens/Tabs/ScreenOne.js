import React from 'react';
import { Modal, View, Text, TextInput, StyleSheet, AsyncStorage, FlatList, Image, ScrollView, TouchableOpacity, TouchableHighlight, Alert} from 'react-native';
import { Card, ListItem, Button } from 'react-native-elements'
import CollapsibleList from 'react-native-collapsible-list';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            modalVisible: false,
        }
    }

    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }
    
    render() {
        const users = [
            {
                name: 'brynn',
                avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
            },
];
        let data = [
            {
                name: 'Bonsai Sushi Bar',
                Address: 'Ifran',
                OpenHours: '13h PM - 12h AM',
                Phone: '0616-830380',
                Review: '4.7/5',
                Image: 'https://i.ytimg.com/vi/NEwcAxFxDVw/maxresdefault.jpg'
            },
            {
                name: 'La Paix',
                Address: 'Ifran',
                OpenHours: '13h PM - 12h AM',
                Phone: '05355-66675',
                Review: '3.9/5',
                Image: 'https://media-cdn.tripadvisor.com/media/photo-s/05/68/7d/5e/cafe-de-paix.jpg'
            },
            {
                name: 'Forest Restaurant',
                Address: 'Rue de la Cascade, Ifrane 53000',
                OpenHours: '13h PM - 11h45 PM',
                Phone: '05355-66544',
                Review: '3.7/5',
                Image: 'https://i.pinimg.com/originals/6f/88/60/6f8860457807b5af087226d5e435f89e.jpg'
            }, {
                name: "Restaurant L'Italien",
                Address: 'Avenue Omar Ibn Al Khattab, Fes',
                OpenHours: '11:30 AM- 12h AM',
                Phone: '05359-43384',
                Review: '3.8/5',
                Image: 'https://media-cdn.tripadvisor.com/media/photo-s/0e/07/8e/b8/cena.jpg'
            },
            {
                name: 'La Grillardière Fès',
                Address: 'Fes 30050',
                OpenHours: '10h AM - 12h AM',
                Phone: '05359-41731',
                Review: '4.1/5',
                Image: 'http://www.menudujour.ma/Menudujour/image?nomP=5A1293151D27453A_2_20141030150157&idR=87325892A713E965'
            },
            {
                name: 'Blend',
                Address: '9 Rue Théophile Gauthier, Casablanca',
                OpenHours: '12h AM - 12h AM',
                Phone: '05224-91122',
                Review: '4.3/5',
                Image: 'http://www.viepratique.ma/media_external/entreprises_pictures/3277486/3277486_664619475_306617059.jpg'
            },
            {
                name: 'Le Bistrot Chic',
                Address: 'Rue Taha Hussein, Casablanca 20000',
                OpenHours: '13h PM - 1h AM',
                Phone: '05222-97878',
                Review: '4.4/5',
                Image: 'http://www.eazylife.ma/wp-content/uploads/2017/10/bistrot-chic.jpg'
            },
            {
                name: 'I Ristorante Italiano',
                Address: " Rue d'Ifrane CIL, Casablanca 20250",
                OpenHours: 'Mon-Sat 12–3PM and 7:30–11PM Sun 12–4PM and 7: 30–10: 45PM',
                Phone: '05229-46160',
                Review: '4.3/5',
                Image: 'http://www.iresto.ma/upload/blog/iresto-1.jpg'
            },

        ]
        return (
            <ScrollView>
                {/* <Card title="CARD WITH DIVIDER"> */}
                    {
                        data.map((u, i) => {
                            return (
                                <Card image={{ uri: u.Image}} key={i} >
                                    <Text style={{ marginBottom: 10 }} > <Icon name='map-pin' size={20} color='black' />   {u.name}
                                    </Text>
                                    <Text style={{ marginBottom: 10}}>
                                        <Icon name='clock-o' size={20} color='black' />   Opening Hours: {u.OpenHours}
                                    </Text>
                                    <Text style={{ marginBottom: 10 }}>
                                        <Icon name='home' size={20} color='black'/>   Address: {u.Address}
                                    </Text>
                                    <Text style={{ marginBottom: 10 }}>
                                        <Icon name='envelope' size={20} color='black' />   Contact: {u.Phone}
                                    </Text>
                                    <Text style={{ marginBottom: 10 }}>
                                        <Icon name='star' size={20} color='black' />   Rating: {u.Review}
                                    </Text>

                                    {/* <Button
                                        icon={{ name: 'code' }}
                                        backgroundColor='#03A9F4'
                                        buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                                        title='VIEW NOW'/> */}
                                    <CollapsibleList numberOfVisibleItems={1} buttonContent={<Text style={styles.viewCollapsible}>  <Icon
                                        name='angle-double-right'
                                        size={24}
                                        color='black'
                                    />  View Reviews</Text>}>
                                        
                                        <View style={styles.collapsibleItem} >
                                            <Text style={{color: '#fff'}} >Hello Collapsable List :)</Text>
                                        </View>
                                        <View style={{}}>
                                            <Card title='HELLO WORLD' >
                                                <Text style={{ marginBottom: 10 }}>
                                                    The idea with React Native Elements is more about component structure than actual design.
                                                </Text>
                                            </Card>
                                        </View>
                                        <View>
                                            <Card title='HELLO WORLD 2' >
                                                <Text style={{ marginBottom: 10 }}>
                                                    The idea with React Native Elements is more about component structure than actual design.
                                                </Text>
                                            </Card>
                                        </View>
                                        {/* <View style={styles.collapsibleItem}>
                                            <Text>Collapsable List Item</Text>
                                        </View>
                                        <View style={styles.collapsibleItem}>
                                            <Text>Collapsable List Item</Text>
                                        </View> */}
                                    </CollapsibleList>
                                </Card>
                                
                            );
                        })
                    }
                {/* </Card> */}
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
    viewCollapsible: {
        backgroundColor: '#03A9F4',
        width: "100%", 
        fontSize: 20,
        paddingTop: 5,
        paddingBottom: 5,
        textAlign: 'center',
        color: "#fff",
        marginTop: 20
    }
});
