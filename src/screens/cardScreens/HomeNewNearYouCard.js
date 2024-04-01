import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react'
import imagepath from '../../images/Images';
import { useNavigation } from '@react-navigation/native';

const HomeNewNearYouCard = ({ item }) => {
    const navigation = useNavigation();
    return (
        <View style={styles.cardRoot}>
            <TouchableOpacity onPress={() => navigation.navigate('ClinicsDetailsScreen') }>
            <View style={styles.card}>
                <Image style={styles.image} source={item.image} />
                <View style={styles.cardContent}>
                    <Text numberOfLines={2} style={styles.clinicContainer}>{item.clinic_name}</Text>
                    <View style={{ height: "100%", marginLeft: 40, flexDirection: "column", marginTop: 15 }}>
                        <Text style={styles.clientValue}>{item.clients}</Text>
                        <Text style={styles.clientsTxt}>Clients</Text>
                    </View>
                    <View style={{ height: "100%", marginLeft: 20, flexDirection: "column", marginTop: 15 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={styles.clientValue}>{item.rating}</Text>
                            <Image style={{ width: 11, height: 11, marginLeft: 5 }} source={imagepath.ratingStarImage} />
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={styles.clientsTxt}>{item.reviewTxt}</Text>
                            <Text style={[styles.clientsTxt, { marginLeft: 3 }]}>reviews</Text>
                        </View>

                    </View>
                </View>
            </View>
            </TouchableOpacity>
           
        </View>

    )
}

export default HomeNewNearYouCard

const styles = StyleSheet.create({
    cardRoot:{
        width: 265,
        height: 190,
        backgroundColor: '#fff',
        borderRadius: 15,
        overflow: 'hidden',
        margin: 10,
        elevation: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    card: {
        width: 250,
        height: 175,
        backgroundColor: '#fff',
        borderRadius: 15,
        overflow: 'hidden',
        
    },
    image: {
        width: '100%',
        height: 120,

    },
    cardContent: {
        width: '100%',
        height: '100%',
        backgroundColor: "#DED0B6",
        flexDirection: 'row',

    },
    clinicContainer: {
        width: 80,
        height: 50,
        fontWeight: "600",
        fontFamily: "Poppins-Bold",
        fontSize: 15,
        color: "white",
        marginTop: 12,
        marginLeft: 15,
        
    
    },
    clientsTxt: {
        fontWeight: "400",
        fontFamily: "Poppins-Regular",
        fontSize: 10,
        color: "black",
    },
    clientValue: {
        fontWeight: "600",
        fontFamily: "Poppins-Bold",
        fontSize: 12,
        color: "white",
    }
})