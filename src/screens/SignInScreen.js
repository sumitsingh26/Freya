import { ActivityIndicator, ImageBackground, KeyboardAvoidingView, StyleSheet, Text, TouchableOpacity, View, Modal } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'
import imagepath from '../images/Images'
import { useNavigation } from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import { loginUser } from './network/Api';
import AsyncStorage from '@react-native-async-storage/async-storage';


const SignInScreen = () => {
    const navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [isEmailValid, setIsEmailValid] = useState(true);

    const [password, setPassword] = useState('');
    const [isPasswoedValid, setIsPaswordValid] = useState(true);

    const [errors, setErrors] = useState({});

    const [modalVisible, setModalVisible] = useState(false);
    const openModal = () => {
      setModalVisible(true);
    };
  
    const closeModal = () => {
      setModalVisible(false);
    };

    const validate = () => {
        let errors = {};
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        if (email == ''){
            setIsEmailValid(false)
            setIsPaswordValid(true)
            Toast.show({
                type: "error",
                text1: "Error",
                text2: "Enter your email id."
              })
        }else if (reg.test(email) === false){
            setIsEmailValid(false)
            setIsPaswordValid(true)
            Toast.show({
                type: "error",
                text1: "Error",
                text2: "Enter your valid email id."
              })
        }else if (password == ''){
            setIsPaswordValid(false)
            setIsEmailValid(true)
            Toast.show({
                type: "error",
                text1: "Error",
                text2: "Enter your password."
              })
        }else{
            setIsPaswordValid(true)
            setIsEmailValid(true)
            setErrors(errors);
            return Object.keys(errors).length === 0;
        }
    };

    const handleSubmit = () => {
        if (validate()) {
            openModal();
            let data = {
              "email":email,
              "password":password
          }
              console.log(data);
              let endPoint = "api/auth/user/Login";
              loginUser(data,endPoint).then((response) => {
                console.log(response);
                if (response.Success){
                  closeModal();
                  Toast.show({
                    type: "success",
                    text1: "Success",
                    text2: response?.Message
                  })
                  console.log("token :" + response.resultData.token);
                  AsyncStorage.setItem('token',response.resultData.token);
                  AsyncStorage.setItem('isLoggedIn', "true");
                  navigation.navigate('Dashboard'); // Navigate to the 'Login' screen
                }else{
                  closeModal();
                  Toast.show({
                    type: "error",
                    text1: "Failed",
                    text2: response?.Message
                  })
                }
        
              })
        }
      };


    const goToAnotherScreen = async () => {
      navigation.navigate('SignUpScreen'); // Navigate to the 'Login' screen
    };
  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
    <ImageBackground style={{width: "100%", height: "100%"}} resizeMode={"cover"} source={imagepath.loginBgImage}>

    <View style={styles.rootContainer}>
       <Text style={styles.loginTxtStyle}>Login</Text>
       <Text style={styles.emailTxtStyle}>Email</Text>
       <TextInput placeholder='Enter email address'
       style={[styles.textInputStyle, !isEmailValid && styles.invalidInput]}
       value={email}
       autoCapitalize="none" 
       onChangeText={setEmail}
       keyboardType='email-address'/>

       <Text style={styles.emailTxtStyle}>Password</Text>
       <TextInput placeholder='Enter password'
       style={[styles.textInputStyle, !isPasswoedValid && styles.invalidInput]}
       multiline={false}
       value={password}
       autoCapitalize="none" 
       onChangeText={setPassword}/>  

       <TouchableOpacity onPress={handleSubmit}>
       <View style={styles.buttonViewStyle}>
        <Text style={styles.buttonTxtStyle}>Send Verification Code</Text>       
        </View>  
       </TouchableOpacity>

       <View style={styles.text2}>
            <View style={styles.containerTextRow2}>
              <Text style={styles.text1}>Don't have an accoutn?</Text>
              <TouchableOpacity onPress={goToAnotherScreen}>
                <Text style={styles.underlineText}>Sign Up</Text>
              </TouchableOpacity>
              <Text style={styles.text1}> here</Text>
            </View>
          </View>

          <Modal animationType="fade" visible={modalVisible} onRequestClose={closeModal} transparent={true}>
            <View style={{ justifyContent: "center", alignItems: "center", flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
              <ActivityIndicator size={'large'} color={'#DED0B6'}/>

            </View>
          </Modal>
       
    </View>
    </ImageBackground>
    </KeyboardAvoidingView>
    
  )
}

export default SignInScreen

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: "center",
        padding: "8%"
    },
    loginTxtStyle: {
        fontWeight: "600",
        fontFamily: "Poppins-Regular",
        fontSize: 28,
        color: "white",
        textAlign: "center"
    },
    emailTxtStyle: {
        fontWeight: "600",
        fontFamily: "Poppins-Regular",
        fontSize: 16,
        color: "white",
        marginTop: 10
    },
    textInputStyle: {
        backgroundColor: "white",
        width: "100%",
        height: 50,
        borderRadius: 6,
        marginTop: 10,
        fontFamily: "Poppins-Regular",
        paddingHorizontal:10

        
    },
    buttonViewStyle: {
        width: "100%",
        height: 50,
        backgroundColor: "#607274",
        borderRadius: 6,
        marginTop: 50,
        justifyContent: "center"
    },
    buttonTxtStyle: {
        fontWeight: "600",
        fontFamily: "Poppins-Regular",
        fontSize: 16,
        color: "white",
        textAlign: "center"
    
    },
    text2: {
      justifyContent: "center",
      alignItems: "center",
      margin: 20
    },
    containerTextRow2: {
      width: "100%",
      flexDirection: "row",
      justifyContent: "center",
  
    },
    text1: {
      fontSize: 14,
      color: "#494949",
      alignItems: "center",
      fontFamily: "Poppins-Regular",
    },
    underlineText: {
      textDecorationLine: 'underline',
      fontFamily: "Poppins-Regular",
      fontSize: 14,
      color: "#607274",
      marginLeft: 3
    },  
    invalidInput: {
        borderColor: 'red',
        borderRadius: 6,
        borderWidth: 1
      },
})