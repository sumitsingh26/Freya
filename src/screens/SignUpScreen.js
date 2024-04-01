import { ActivityIndicator, ImageBackground, StyleSheet, Text, View, TextInput, TouchableOpacity, Modal, Image, FlatList, ScrollView, SafeAreaView } from 'react-native'
import React, { useRef, useState } from 'react'
import imagepath from '../images/Images'
import { useNavigation } from '@react-navigation/native';
import { Dropdown } from 'react-native-element-dropdown';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment-timezone';
import Toast from 'react-native-toast-message';
import { Api } from './network/Api';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';



const locations = [
  { location: 'Patna', value: '1' },
  { location: 'Banglore', value: '2' },
  { location: 'Pune', value: '3' },
  { location: 'Delhi', value: '4' },
  { location: 'Patna', value: '5' },
  { location: 'Banglore', value: '6' },
  { location: 'Pune', value: '7' },
  { location: 'Delhi', value: '8' },

];

const language = [
  { language: 'English', value: 'en' },
  { language: 'French', value: 'fn' }

];

const gender = [
  { gender: 'Male', value: '1' },
  { gender: 'Female', value: '2', },
  { gender: 'Other', value: '3' }
]

const SignUpScreen = () => {

  const [firstName, setFirstName] = useState('');
  const [isFirstValid, setIsFirstValid] = useState(true);

  const [lastName, setLastName] = useState('');
  const [isLastValid, setIsLastValid] = useState(true);

  const [emailName, setEmailName] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);

  const [dobName, setDobName] = useState('');
  const [isDobValid, setIsDobValid] = useState(true);

  const [genderName, setGenderName] = useState('Select');
  const [isGenderValid, setIsGenderValid] = useState(true);

  const [phoneNumber, setphoneNumber] = useState('');
  const [isPhoneValid, setIsPhoneValid] = useState(true);

  const [valueLocation, setValueLocation] = useState('Select');
  const [isLocationValid, setIsLocationValid] = useState(true);

  const [valueLanguage, setValueLanguage] = useState('Select');
  const [isLanguageValid, setIsLanguageValid] = useState(true);

  const [password, setPassword] = useState('');
  const [isPasswordValid, setIsPasswordValid] = useState(true);

  const [errors, setErrors] = useState({});
  const [errorsDialog, setErrorDialog] = useState({});

  const validateForm = () => {
    let errors = {};
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (firstName == "") {
      setIsFirstValid(false)
      setIsLastValid(true)
      setIsEmailValid(true);
      setIsDobValid(true);
      setIsGenderValid(true);
      setIsPhoneValid(true);
      setIsPasswordValid(true)
      //  ToastAndroid.show('Enter full name', ToastAndroid.LONG);
      Toast.show({
        type: "error",
        text1: "Error",
        text2: "Enter first name"
      })
    } else if (lastName == '') {
      setIsLastValid(false);
      setIsFirstValid(true);
      setIsEmailValid(true);
      setIsDobValid(true);
      setIsGenderValid(true);
      setIsPhoneValid(true);
      setIsPasswordValid(true)
      // ToastAndroid.show('Enter last name', ToastAndroid.LONG);
      Toast.show({
        type: "error",
        text1: "Error",
        text2: "Enter last name"
      })
    } else if (emailName == '') {
      setIsEmailValid(false);
      setIsFirstValid(true);
      setIsLastValid(true);
      setIsDobValid(true);
      setIsGenderValid(true);
      setIsPhoneValid(true);
      setIsPasswordValid(true)
      // ToastAndroid.show('Enter email id', ToastAndroid.LONG);
      Toast.show({
        type: "error",
        text1: "Error",
        text2: "Enter email id"
      })
    } else if (reg.test(emailName) === false) {
      setIsEmailValid(false);
      setIsFirstValid(true);
      setIsLastValid(true);
      setIsDobValid(true);
      setIsGenderValid(true);
      setIsPhoneValid(true);
      setIsPasswordValid(true)
      // ToastAndroid.show('Enter valid email id', ToastAndroid.LONG);
      Toast.show({
        type: "error",
        text1: "Error",
        text2: "Enter valid email id"
      })
    } else if (selectedDate == "Select DOB") {
      setIsDobValid(false);
      setIsFirstValid(true);
      setIsLastValid(true);
      setIsEmailValid(true);
      setIsGenderValid(true);
      setIsPhoneValid(true);
      setIsPasswordValid(true)
      // ToastAndroid.show('Enter DOB', ToastAndroid.LONG);
      Toast.show({
        type: "error",
        text1: "Error",
        text2: "Enter DOB"
      })
    } else if (genderName == 'Select') {
      setIsGenderValid(false);
      setIsFirstValid(true);
      setIsLastValid(true);
      setIsEmailValid(true);
      setIsDobValid(true);
      setIsPhoneValid(true);
      setIsPasswordValid(true)
      // ToastAndroid.show('Select gender', ToastAndroid.LONG);
      Toast.show({
        type: "error",
        text1: "Error",
        text2: "Select gender"
      })
    } else if (phoneNumber == '') {
      setIsPhoneValid(false);
      setIsFirstValid(true);
      setIsLastValid(true);
      setIsEmailValid(true);
      setIsDobValid(true);
      setIsGenderValid(true);
      setIsPasswordValid(true)
      // ToastAndroid.show('Enter phone no.', ToastAndroid.LONG);
      Toast.show({
        type: "error",
        text1: "Error",
        text2: "Enter phone number"
      })
    } else if (password == ''){
      setIsPasswordValid(false)
      setIsFirstValid(true);
      setIsLastValid(true);
      setIsEmailValid(true);
      setIsDobValid(true);
      setIsGenderValid(true);
      setIsPhoneValid(true);
      Toast.show({
        type: "error",
        text1: "Error",
        text2: "Enter password"
      })
    }else {
      setIsPhoneValid(true);
      setIsFirstValid(true);
      setIsLastValid(true);
      setIsEmailValid(true);
      setIsDobValid(true);
      setIsGenderValid(true);
      setIsPasswordValid(true)
      setErrors(errors);
      return Object.keys(errors).length === 0;
    }
  };

  const validateLocLang = () => {
    let errorsDialog = {};
    if (valueLocation == 'Select') {
      setIsLocationValid(false)
      setIsLanguageValid(true);
      Toast.show({
        type: "error",
        text1: "Error",
        text2: "Select Location"
      })
    } else if (valueLanguage == 'Select') {
      setIsLanguageValid(false)
      setIsLocationValid(true)
      Toast.show({
        type: "error",
        text1: "Error",
        text2: "Select Language"
      })
    } else {
      setIsLocationValid(true);
      setIsLanguageValid(true);
      setErrorDialog(errorsDialog);
      return Object.keys(errorsDialog).length === 0;
    }
  };


  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState('Select DOB');

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleDateConfirm = (date) => {
    // console.warn("A date has been picked: ", date);
    // const dt = new Date(date);
    // const x = dt.toISOString().split('T');
    // const x1 = x[0].split('-');
    // console.warn("Selected Date : ",x1[2] + '/' + x1[1] + '/' + x1[0]);
    const adjustedDate = moment(date).format('YYYY-MM-DD');
    setSelectedDate(adjustedDate);
    // console.warn("Selected Date : ",adjustedDate);
    hideDatePicker();
  };




  const [modalVisible, setModalVisible] = useState(false);
  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };
  
  const [loaderModelVisible, setLoaderModelVisible] = useState(false);
  const openLoaderModel=() => {
    setLoaderModelVisible(true);
  };
  const cloaseLoaderModel=() => {
    setLoaderModelVisible(false);
  }
  const navigation = useNavigation();

  const goToAnotherScreen = () => {
    setModalVisible(false);
    navigation.navigate('OtpEmailScreen', { email: emailName, mobile_no: phoneNumber }); // Navigate to the 'Login' screen
  };

  const goToSignInScreen = () => {
    navigation.navigate('SignInScreen')
  }

  const [responseData, setResponseData] = useState('')

  const handleSubmit = async () => {
    if (validateForm()) {
      openModal();
    } else {
      console.log('Form has errors. Please correct them.');
    }
  };

  const handleSignUp = () => {
    if (validateLocLang()) {
      closeModal();
      openLoaderModel();
      let data = {
        "firstname": firstName,
        "lastname": lastName,
        "email": emailName,
        "dob": selectedDate,
        "phonenumber": phoneNumber,
        "password": password,
        "language": valueLanguage, 
        "lat": "38.8951",
        "long": "-77.0364",
        "country": "India"  
      }
      console.log(data);
      let endPoint = "api/auth/new/Registration";
      Api(data,endPoint).then((response) => {
        console.log(response);
        if (response.Success == true){
          cloaseLoaderModel();
          Toast.show({
            type: "success",
            text1: "Success",
            text2: response?.Message
          })
          setResponseData(response?.otp);
          let otp = response?.otp;
          console.log("Response OTp: " +otp);
          goToAnotherScreen();
        }else{
          cloaseLoaderModel();
          Toast.show({
            type: "error",
            text1: "Failed",
            text2: response?.Message
          })
        }

      })
 
      
    } else {
      console.log('Please correct them.');
    }
  };


  // const [showAlert, setShowAlert] = useState(false);
  return (
    <ImageBackground style={{ width: "100%", height: "100%" }} resizeMode={"cover"} source={imagepath.loginBgImage}>
     
        <View style={styles.rootContainer}>
          <SafeAreaView>
          <KeyboardAwareScrollView style={{padding: 10}}>
          <Text style={styles.loginTxtStyle}>Create Your Account</Text>
          <View style={[styles.containerTextRow2, {marginTop: 30}]}>
            <View style={{ width: "46%"}}>
              <Text style={styles.emailTxtStyle}>First Name</Text>
              <TextInput
                placeholder='Enter'
                style={[styles.textInputStyle, !isFirstValid && styles.invalidInput]}
                value={firstName}
                onChangeText={setFirstName}
              />

            </View>

            <View style={{ width: "46%" }}>
              <Text style={styles.emailTxtStyle}>Last Name</Text>
              <TextInput
                placeholder='Enter' style={[styles.textInputStyle, !isLastValid && styles.invalidInput]}
                value={lastName}
                onChangeText={setLastName} />

            </View>

          </View>


          <View style={{marginTop: 20}}>
            <Text style={styles.emailTxtStyle}>Email</Text>
            <TextInput placeholder='Enter'
              style={[styles.textInputStyle, !isEmailValid && styles.invalidInput]}
              value={emailName}
              onChangeText={setEmailName} />

          </View>

          <View style={[styles.containerTextRow2, {marginTop: 20}]}>
            <View style={{ width: "46%"}}>
              <Text style={styles.emailTxtStyle}>Your Birth Day</Text>
              <TouchableOpacity onPress={() => {
                showDatePicker();
              }}>
                <View style={[styles.textInputStyle,{justifyContent: 'center'}, !isDobValid && styles.invalidInput]}>
                  <Text >{selectedDate}</Text>
                </View>
              </TouchableOpacity>


            </View>

            <View style={{ width: "46%" }}>
              <Text style={styles.emailTxtStyle}>Gender</Text>
              <Dropdown
                style={[styles.dropdown, { marginTop: 10 }, !isGenderValid && styles.invalidInput]}
                placeholderStyle={[styles.placeholderStyle, !isGenderValid && { color: "#607274" }]}
                selectedTextStyle={[styles.selectedTextStyle, !isGenderValid && { color: "#607274" }]}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={[styles.iconStyle, !isGenderValid && { width: 20, height: 20, tintColor: "#607274" }]}
                data={gender}
                search
        
                labelField="gender"
                valueField="value"
                placeholder={genderName}
                searchPlaceholder="Search..."
                value={genderName}
                // onFocus={() => setIsGenderValid(true)}
                // onBlur={() => setIsGenderValid(false)}
                onChange={item => {
                  setGenderName(item.value);
                }}

              />
            </View>

          </View>

          <Text style={[styles.emailTxtStyle, {marginTop: 20}]}>Phone No.</Text>
          <View style={styles.containerTextRow2}>
            <View style={{ width: "30%"}}>
              <TextInput placeholder='+45' style={styles.textInputStyle} />
            </View>
            <View style={{ width: "65%" }}>
              <TextInput placeholder='Enter'
                style={[styles.textInputStyle, !isPhoneValid && styles.invalidInput]}
                keyboardType='numeric'
                value={phoneNumber}
                onChangeText={setphoneNumber} />

            </View>
          </View>

          <View>
            <Text style={[styles.emailTxtStyle, {marginTop: 20}]}>Password</Text>
            <TextInput placeholder='Enter'
              style={[styles.textInputStyle, !isPasswordValid && styles.invalidInput]}
              value={password}
              onChangeText={setPassword} 
              />

          </View>
          <TouchableOpacity onPress={handleSubmit}>
            <View style={styles.buttonViewStyle}>
              <Text style={styles.buttonTxtStyle}>Next</Text>
            </View>
          </TouchableOpacity>

          <View style={styles.text2}>
            <View style={styles.alreadyText}>
              <Text style={styles.text1}>Already have an accoutn?</Text>
              <TouchableOpacity onPress={goToSignInScreen}>
                <Text style={styles.underlineText}>Sign in</Text>
              </TouchableOpacity>
              <Text style={styles.text1}> here</Text>
            </View>
          </View>
          <Modal animationType="fade" visible={modalVisible} onRequestClose={closeModal} transparent={true}>
            <View style={{ justifyContent: "center", alignItems: "center", flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
              <View style={styles.modelView}>
                <View style={{ width: "100%", flexDirection: "row" }}>
                  <View style={styles.alertTextView}>
                    <Text style={styles.alertSelectText}>Select Your</Text>
                    <Text style={styles.alertLLText}>Language and Location</Text>
                  </View>
                  <TouchableOpacity onPress={() => {
                    setModalVisible(false);
                  }}>
                    <Image style={styles.alertCancle} source={imagepath.cancelIcon} />

                  </TouchableOpacity>

                </View>
                <View style={styles.alertView}>
                  <Text style={styles.txtLocation}>Your Location</Text>
                  <Dropdown
                    style={[styles.dropdown, !isLocationValid && styles.invalidInput]}
                    placeholderStyle={[styles.placeholderStyle, !isLocationValid && { color: "#607274" }]}
                    selectedTextStyle={[styles.selectedTextStyle, !isLocationValid && { color: "#607274" }]}
                    inputSearchStyle={styles.inputSearchStyle}
                    iconStyle={[styles.iconStyle, !isLocationValid && { width: 20, height: 20, tintColor: "#607274" }]}
                    data={locations}
                    search
                    maxHeight={300}
                    labelField="location"
                    valueField="value"
                    placeholder={valueLocation}
                    searchPlaceholder="Search..."
                    value={valueLocation}
                    // onFocus={() => setIsFocus(true)}
                    // onBlur={() => setIsFocus(false)}
                    onChange={item => {
                      setValueLocation(item.value);
                    }}

                  />

                  <Text style={styles.txtLocation}>Preferred Language</Text>
                  <Dropdown
                    style={[styles.dropdown, !isLanguageValid && styles.invalidInput]}
                    placeholderStyle={[styles.placeholderStyle, !isLanguageValid && { color: "#607274" }]}
                    selectedTextStyle={[styles.selectedTextStyle, !isLanguageValid && { color: "#607274" }]}
                    inputSearchStyle={styles.inputSearchStyle}
                    iconStyle={[styles.iconStyle, !isLanguageValid && { width: 20, height: 20, tintColor: "#607274" }]}
                    data={language}
                    search
                    maxHeight={300}
                    labelField="language"
                    valueField="value"
                    placeholder={valueLanguage}
                    searchPlaceholder="Search..."
                    value={valueLanguage}
                    // onFocus={() => setIsFocusLanguage(true)}
                    // onBlur={() => setIsFocusLanguage(false)}
                    onChange={item => {
                      setValueLanguage(item.value);

                    }}

                  />
                  <TouchableOpacity onPress={handleSignUp}>
                    <View style={styles.modeButtonViewStyle}>
                      <Text style={styles.buttonTxtStyle}>Sign Up</Text>
                    </View>
                  </TouchableOpacity>

                </View>


              </View>

            </View>
          </Modal>
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleDateConfirm}
            onCancel={hideDatePicker}
          />
           </KeyboardAwareScrollView>
          </SafeAreaView>
        
        </View>

        <Modal animationType="fade" visible={loaderModelVisible} onRequestClose={cloaseLoaderModel} transparent={true}>
            <View style={{ justifyContent: "center", alignItems: "center", flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
              <ActivityIndicator size={'large'} color={'#DED0B6'}/>
            </View>
          </Modal>

     

    </ImageBackground>

  )
}

export default SignUpScreen

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",

  },
  loginTxtStyle: {
    fontWeight: "600",
    fontFamily: "Poppins-Regular",
    fontSize: 28,
    color: "white",
    textAlign: "center"
  },
  containerTextRow2: {
    width: "100%",
    flexDirection: "row",
    justifyContent: 'space-between',

  },
  alreadyText: {
    width: "100%",
    flexDirection: "row",
    justifyContent: 'center',

  },
  emailTxtStyle: {
    fontWeight: "600",
    fontFamily: "Poppins-Regular",
    fontSize: 16,
    color: "white"
  },
  textInputStyle: {
    backgroundColor: "white",
    width: "100%",
    height: 50,
    borderRadius: 6,
    marginTop: 10,
    fontFamily: "Poppins-Regular",
    paddingHorizontal: 10
  },
  buttonViewStyle: {
    width: "100%",
    height: 50,
    backgroundColor: "#607274",
    borderRadius: 6,
    marginTop: 50,
    justifyContent: "center"
  },

  modeButtonViewStyle: {
    width: "100%",
    height: 50,
    backgroundColor: "#607274",
    borderRadius: 6,
    justifyContent: "center",
    marginTop: 20
  },
  buttonTxtStyle: {
    fontWeight: "600",
    fontFamily: "Poppins-Regular",
    fontSize: 16,
    color: "white",
    textAlign: "center"

  },
  text2Style: {
    fontFamily: "Poppins-Regular",
    fontSize: 14,
    color: "#494949",

  },
  text2: {
    justifyContent: "center",
    alignItems: "center",
    margin: 20
  },
  underlineText: {
    textDecorationLine: 'underline',
    fontFamily: "Poppins-Regular",
    fontSize: 14,
    color: "#607274",
    marginLeft: 3
  },
  text1: {
    fontSize: 14,
    color: "#494949",
    alignItems: "center",
    fontFamily: "Poppins-Regular",
  },

  modelView: {
    width: "75%",
    backgroundColor: "white",
    borderRadius: 20,
  },
  alertTextView: {
    width: "67%",
    marginTop: 30,
    marginLeft: 30,
  },
  alertSelectText: {
    fontWeight: "400",
    fontFamily: "Poppins-Bold",
    fontSize: 16,
    color: "#607274",
    textAlign: "center",
  },
  alertLLText: {
    fontWeight: "400",
    fontFamily: "Poppins-Bold",
    fontSize: 16,
    color: "#607274",
    textAlign: "center",
    marginLeft: 5
  },
  alertCancle: {
    width: 14,
    height: 14,
    marginLeft: 15,
    marginTop: 40
  },
  alertView: {
    width: "100%",
    padding: 20,
  },
  txtLocation: {
    fontWeight: "400",
    fontFamily: "Poppins-Regular",
    fontSize: 16,
    color: "#607274",
  },

  dropdown: {
    height: 50,
    // borderColor: 'gray',
    // borderWidth: 0.5,
    backgroundColor: '#F9F9F9',
    borderRadius: 8,
    paddingHorizontal: 8,
    marginBottom: 18
  },
  icon: {
    marginRight: 5,

  },
  label: {
    position: 'absolute',
    backgroundColor: '#607274',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
    color: "#607274"
  },
  selectedTextStyle: {
    fontSize: 16,
    color: "#607274"
  },
  iconStyle: {
    width: 20,
    height: 20,
    tintColor: "#607274"
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },

  invalidInput: {
    borderColor: 'red',
    borderRadius: 6,
    borderWidth: 1
  },
  errorText: {
    fontWeight: "600",
    fontFamily: "Poppins-Regular",
    fontSize: 14,
    color: "red",
    marginTop: 10
  }


})