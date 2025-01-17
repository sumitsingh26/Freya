import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { startTransition } from 'react'
import imagepath from '../../images/Images'
import { useNavigation } from '@react-navigation/native'

const ClinicDetailsCard = ({ item }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={{ width: '90%', height: 250 }}>
        <Image style={styles.mainLayout} source={item.image} />
        <View style={styles.kmTxt}>
          <Text style={{
            fontWeight: "600",
            fontFamily: "Poppins-Bold",
            fontSize: 18,
            color: "#607274",
            marginLeft: 7,
            marginRight: 5,
            maxHeight: 20
          }}>{item.km}</Text>
          <Text style={{
            fontWeight: "400",
            fontFamily: "Poppins-Regular",
            fontSize: 14,
            color: "#607274",
            marginLeft: 15
          }}>Away</Text>
        </View>
      </View>

      <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'space-between', marginRight: 15 }}>
        <View style={{ flexDirection: 'column', marginHorizontal: 15 }}>
          <Text style={styles.clinic_txt}>{item.clinic_name}</Text>
          <View style={{ flexDirection: 'row', }}>
            <Image style={{ width: 14, height: 13, marginTop: 3 }} source={imagepath.ratingNormalStarImage} />
            <Text style={{
              fontWeight: "500",
              fontFamily: "Poppins-Bold",
              fontSize: 14,
              color: "#494949",
              marginLeft: 5,
            }}>{item.rating}</Text>
            <Text style={{
              fontWeight: "500",
              fontFamily: "Poppins-Regular",
              fontSize: 14,
              color: "#494949",
              marginLeft: 5
            }}>({item.reviewTxt} reviews)</Text>
          </View>

          <View style={{ flexDirection: 'row', marginTop: 3 }}>
            <Image style={{ width: 15, height: 20, }} source={imagepath.locationIcon} />
            <Text style={{
              fontWeight: "300",
              fontFamily: "Poppins-Regular",
              fontSize: 14,
              color: "#494949",
              marginLeft: 5
            }}>{item.location}</Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('AppointmentScreen') }>
        <View style={styles.forwardContainer}>
         <Image style={{width: 24, height: 14}}source={imagepath.forwardArrowImage}/>
        </View>
        </TouchableOpacity>
      </View>
    </View>


  )
}

export default ClinicDetailsCard

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 350,
    flexDirection: 'column'
  },
  mainLayout: {
    width: '100%',
    height: 250,
    backgroundColor: 'black',
    borderRadius: 10,
    marginLeft: 20,
    resizeMode: 'cover'
  },
  clinic_txt: {
    fontWeight: "500",
    fontFamily: "Poppins-Bold",
    fontSize: 16,
    color: "#17202A",
    maxHeight: 25
  },
  kmTxt: {
    height: 41,
    backgroundColor: '#DED0B6',
    position: 'absolute',
    bottom: 0,
    right: -20,
    marginBottom: 20,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10
  },
  forwardContainer: {
    width: 50,
    height: 42,
    backgroundColor: '#607274',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
  }
})