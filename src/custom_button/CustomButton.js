import { Image, StyleSheet, Text, Touchable, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import imagepath from '../images/Images'
import { useNavigation } from '@react-navigation/native';

const CustomButton = () => {
  const navigation = useNavigation();

  const goToAnotherScreen = () => {
    navigation.navigate('SignInScreen'); // Navigate to the 'Login' screen
  };

  return (
    <View>
        <TouchableOpacity style={styles.buttonGoogleTop}>
    <View style={styles.buttonGoogle}>
      <Image style={styles.buttonText}source={imagepath.continueWithGoogle}/>
    </View>
    </TouchableOpacity>

    <TouchableOpacity style={styles.buttonAppleTop}>
    <View style={styles.buttonApple}>
      <Image style={styles.buttonText}source={imagepath.continueWithApple}/>
    </View>
    </TouchableOpacity>

    <TouchableOpacity style={styles.buttonEmailTop}>
    <View style={styles.buttonEmail}>
      <Image style={styles.buttonText}source={imagepath.continueWithEmail}/>
    </View>
    </TouchableOpacity>
    </View>
    

    
   
  )
}

export default CustomButton

const styles = StyleSheet.create({
    buttonGoogle: {
        width: "100%",                            
        borderRadius: 8,
        paddingVertical: 14,
        paddingHorizontal: 10,
        backgroundColor: "#DED0B6"

    },
    buttonApple:{
        width: "100%",                            
        borderRadius: 8,
        paddingVertical: 14,
        paddingHorizontal: 10,
        backgroundColor: "#607274"
    },
    buttonEmail:{
        width: "100%",  
        borderWidth: 1,
        borderColor: "#607274",                        
        borderRadius: 8,
        paddingVertical: 14,
        paddingHorizontal: 10,
        backgroundColor: "white"
    },

    buttonText: {
       alignSelf: 'center'
    },
    buttonGoogleTop: {
        marginTop: 8
    },
    buttonAppleTop:{
        marginTop: 10
    },
    buttonEmailTop:{
        marginTop: 15
    }

})