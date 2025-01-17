import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import imagepath from '../images/Images'
import { ScrollView } from 'react-native-gesture-handler'
import { Dropdown } from 'react-native-element-dropdown';
import { useNavigation } from '@react-navigation/native'

const locations = [
    { location: 'Botox', value: '1' },
    { location: 'Hair Removal', value: '2' },
    { location: 'Filler', value: '3' },

];

const BookingAppointment = () => {
    const navigation = useNavigation();
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);
    return (
        <SafeAreaView style={{flex: 1}}>
        <View style={styles.rootContainer}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                <TouchableOpacity onPress={() => {
                    navigation.goBack();
                }}>
                    <Image style={{ width: 50, height: 50, marginHorizontal: 10 }} source={imagepath.backButtonImage} marginLeft={true} />
                </TouchableOpacity>

               <TouchableOpacity onPress={() => {
                    navigation.navigate('MyProfile');
                }}>
               <Image style={{ width: 40, height: 40, marginRight: 25 }} source={imagepath.profileImage} marginLeft={true} />
               </TouchableOpacity>
              
            </View>
            <ScrollView>
                <View style={{ height: 350 }}>
                    <View style={{ height: 250, marginTop: 30 }}>
                        <Image style={styles.imageContainer} source={imagepath.bestBotoxImage} />
                    </View>
                    <View style={styles.titleContainer}>
                        <View style={{
                            width: 191, height: 38, backgroundColor: 'rgba(77, 77,77, 0.3)',
                            borderRadius: 20,
                            justifyContent: 'center'
                        }}>
                            <Text style={{
                                width: '100%', height: 24, color: '#FFFFFF', fontWeight: "600",
                                fontFamily: "Poppins-Regular",
                                fontSize: 16,
                                textAlign: 'center'
                            }}>Story</Text>
                        </View>
                        <View>
                            <Image style={{ width: 38, height: 38, resizeMode: 'cover' }} source={imagepath.hurtBgImage} />
                            <Image style={{ width: 18, height: 18, position: 'absolute', marginLeft: 10, marginTop: 11 }} source={imagepath.hurtIcon} />

                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', height: 50 }}>
                        <View style={{ width: 171, height: 25, marginTop: 10, marginLeft: 10 }}>
                            <Text style={{
                                color: '#607274', fontWeight: "500",
                                fontFamily: "Poppins-Regular",
                                fontSize: 16,
                                textAlign: 'center'
                            }}>Booking Appointment</Text>
                        </View>

                        <View style={styles.kmTxt}>
                            <View style={{
                                width: '100%', height: '100%', flexDirection: 'column'
                            }}>
                                <View style={{ height: '50%', flexDirection: 'row', }}>
                                    <Image style={{ width: 56, height: 56, marginLeft: 10, marginTop: 5 }} source={imagepath.awardImage} />
                                    <View style={{ flexDirection: 'column', marginTop: 10 }}>
                                        <Text style={{
                                            width: 101, height: 25, color: '#17202A', fontWeight: "700",
                                            fontFamily: "Poppins-Regular",
                                            fontSize: 22,
                                            textAlign: 'center'
                                        }}>10 Years</Text>
                                        <Text style={{
                                            width: 89, height: 25, color: '#7C7C7C', fontWeight: "400",
                                            fontFamily: "Poppins-Regular",
                                            fontSize: 14,
                                            textAlign: 'center'
                                        }}>Exprience</Text>
                                    </View>
                                </View>
                                <View style={{ height: '50%', backgroundColor: '#607274', borderBottomLeftRadius: 10, flexDirection: 'row', justifyContent: 'space-between', }}>
                                    <View style={{ height: "100%", flexDirection: "column", marginLeft: 10, justifyContent: 'center' }}>
                                        <Text style={{
                                            width: 71, height: 25, color: '#FFFFFF', fontWeight: "700",
                                            fontFamily: "Poppins-Regular",
                                            fontSize: 22, textAlign: 'center'
                                        }}>1000+</Text>
                                        <Text style={{
                                            width: 71, height: 25, color: '#CCCCFF', fontWeight: "400",
                                            fontFamily: "Poppins-Regular",
                                            fontSize: 14, textAlign: 'center'
                                        }}>Clients</Text>
                                    </View>
                                    <View style={{ height: "100%", flexDirection: "column", marginRight: 10, justifyContent: 'center' }}>
                                        <View style={{ width: 71, height: 25, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                            <Text style={{
                                                color: '#FFFFFF', fontWeight: "700",
                                                fontFamily: "Poppins-Regular",
                                                fontSize: 22, textAlign: 'center'
                                            }}>5.9</Text>
                                            <Image style={{ width: 11, height: 11, marginLeft: 5 }} source={imagepath.ratingStarImage} />
                                        </View>

                                        <View style={{ width: 75, height: 25, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                            <Text style={{
                                                color: '#CCCCFF', fontWeight: "400",
                                                fontFamily: "Poppins-Regular",
                                                fontSize: 14, textAlign: 'center'
                                            }}>123</Text>
                                            <Text style={{
                                                color: '#CCCCFF', fontWeight: "400",
                                                fontFamily: "Poppins-Regular",
                                                fontSize: 14, textAlign: 'center', marginLeft: 3
                                            }}>reviews</Text>
                                        </View>

                                    </View>
                                </View>

                            </View>

                        </View>
                    </View>


                </View>
                <View>
                    <Text style={{
                        width: 154, height: 25, marginLeft: 21, color: '#17202A', fontWeight: "500",
                        fontFamily: "Poppins-Regular",
                        fontSize: 18
                    }}>Select Treatment</Text>
                    <View style={{ height: 70, marginHorizontal: 20, marginTop: 10 }}>
                        <View style={{ width: '100%', height: 50, backgroundColor: 'white', padding: 10, borderRadius: 5, elevation: 10 }}>
                            <Dropdown
                                style={[styles.dropdown, isFocus && { backgroundColor: "white" }]}
                                placeholderStyle={[styles.placeholderStyle, isFocus && { color: "#607274" }]}
                                selectedTextStyle={[styles.selectedTextStyle, isFocus && { color: "#607274" }]}
                                inputSearchStyle={styles.inputSearchStyle}
                                iconStyle={[styles.iconStyle, isFocus && { width: 20, height: 20, tintColor: "#607274" }]}
                                data={locations}
                                search
                                maxHeight={300}
                                labelField="location"
                                valueField="value"
                                placeholder={!isFocus ? 'Select from our 70 different treatments' : 'Select'}
                                searchPlaceholder="Search..."
                                value={value}
                                onFocus={() => setIsFocus(true)}
                                onBlur={() => setIsFocus(false)}
                                onChange={item => {
                                    setValue(item.value);
                                    setIsFocus(false);
                                }}

                            />
                        </View>
                    </View>

                </View>

            </ScrollView>
        </View>
        </SafeAreaView>
    )
}

export default BookingAppointment

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1
    },
    imageContainer: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
        resizeMode: 'cover'
    },
    kmTxt: {
        width: 180,
        height: 130,
        backgroundColor: 'white',
        position: 'absolute',
        bottom: 0,
        right: 7,
        elevation: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        flexDirection: 'row',
        marginTop: 25
    },

    titleContainer: {
        width: '100%',
        height: 70,
        position: 'absolute',
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10
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
    },
    placeholderStyle: {
        fontSize: 16,
        color: "#607274"
    },
    selectedTextStyle: {
        fontSize: 16,
        color: "#607274"
    },
})