import {
  ActivityIndicator,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Modal,
  Image,
  FlatList,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import imagepath from '../images/Images';
import {useNavigation} from '@react-navigation/native';
import {Dropdown} from 'react-native-element-dropdown';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment-timezone';
import Toast from 'react-native-toast-message';
import {Api} from './network/Api';
import {useTranslation} from 'react-i18next';
import AppKeyBoardAvoidingView from '../components/AppKeyBoardAvoidingView';
import AppTextInput from '../components/AppTextInput';
import AppDatePicker from '../components/AppDatePicker';
import {AppPhoneTextInputView} from '../components/AppPhoneTextInputView';
import AppButton from '../components/AppButton';
import {scaleHeight, scaleSize} from '../utils/screenUtils';
import {
  validateEmail,
  validatePassword,
  validateRequiredField,
} from '../utils/validationFunctions';
import AppSelectionModal from '../components/AppSelectionModal';
import {
  appColors,
  appGenderData,
  appScreens,
  tmpLanguage,
  tmpLocations,
} from '../utils/constant';
import AppBlurredOverlay from '../components/AppBlurredOverlay';
import {globalFontStyle, globalStyle} from '../utils/styles';
import Icon from 'react-native-vector-icons/Ionicons';
import AppPrimarySelectionView from '../components/AppPrimarySelectionView';
import {useDispatch, useSelector} from 'react-redux';
import {registerUser, setUser} from '../redux/features/auth/authSlice';
import useLocation from '../services/location/useLocation';
import {LoadingType} from '../services/api/constant';
import AppLoader from '../components/AppLoader';

const SignUpScreen = () => {
  const {t} = useTranslation();
  const navigation = useNavigation();
  const {
    location: UserLocation,
    error: UserLocationError,
    requestLocationPermission,
  } = useLocation();
  const [firstName, setFirstName] = useState('Shivam');
  const [lastName, setLastName] = useState('jasoliya');
  const [email, setEmail] = useState('shivam@gmail.com');
  const [dob, setDob] = useState(null);
  const [gender, setGender] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState('+91 7201018158');
  const [password, setPassword] = useState('shivam@123');
  const [language, setLanguage] = useState();
  const [location, setLocation] = useState();
  const [showErrorInField, setShowErrorInField] = useState(false);
  const [showLanguageSelectionModal, setShowLanguageSelectionModal] =
    useState(false);
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  const goToAnotherScreen = () => {
    navigation.navigate('OtpEmailScreen', {
      email: email,
      mobile_no: phoneNumber,
    }); // Navigate to the 'Login' screen
  };

  const handlePhoneNumberUpdate = error => {
    return error ? false : true;
  };

  const handleNextBtn = () => {
    console.log('btn tapped');
    if (
      validateRequiredField(firstName, t('Enter first name')) &&
      validateRequiredField(lastName, t('Enter last name')) &&
      validateEmail(email, t('Please Enter Valid Email')) &&
      validateRequiredField(dob, t('Enter DOB')) &&
      validateRequiredField(gender, t('Select gender')) &&
      validateRequiredField(phoneNumber, t('Enter phone number')) &&
      validatePassword(
        password,
        t('Password must contain at least 8 character and 1 special character'),
      ) &&
      handlePhoneNumberUpdate()
    ) {
      let data = {
        firstname: firstName,
        lastname: lastName,
        email: email,
        dob: dob,
        phonenumber: phoneNumber,
        password: password,
        language: language,
        lat: '38.8951',
        long: '-77.0364',
        country: 'India',
      };
      setShowErrorInField(false);
      setShowLanguageSelectionModal(true);
    } else {
      setShowErrorInField(true);
    }
  };

  const handleSignUp = () => {
    let params = {
      firstname: firstName,
      lastname: lastName,
      email: email,
      dob: dob,
      phonenumber: phoneNumber,
      password: password,
      language: language,
      lat: '38.8951',
      long: '-77.0364',
      country: 'India',
    };

    // dispatch(registerUser(params))
    //   .unwrap()
    //   .then(response => {
    //     console.log('RESPONSE : ', response);
    //     setShowLanguageSelectionModal(false);
    //     navigation.navigate('OtpEmailScreen', {
    //       email: email,
    //       mobile_no: phoneNumber,
    //     });
    //   })
    //   .catch(error => {});

    // if (validateLocLang()) {
    //   openLoaderModel();
    //   let data = {
    // firstname: firstName,
    // lastname: lastName,
    // email: email,
    // dob: dob,
    // phonenumber: phoneNumber,
    // password: password,
    // language: valueLanguage,
    // lat: '38.8951',
    // long: '-77.0364',
    // country: 'India',
    //   };
    //   console.log(data);
    //   let endPoint = 'api/auth/new/Registration';
    //   Api(data, endPoint).then(response => {
    //     console.log(response);
    //     if (response.Success == true) {
    //       cloaseLoaderModel();
    //       Toast.show({
    //         type: 'success',
    //         text1: 'Success',
    //         text2: response?.Message,
    //       });
    //       setResponseData(response?.otp);
    //       let otp = response?.otp;
    //       console.log('Response OTp: ' + otp);
    //       goToAnotherScreen();
    //     } else {
    //       cloaseLoaderModel();
    //       Toast.show({
    //         type: 'error',
    //         text1: 'Failed',
    //         text2: response?.Message,
    //       });
    //     }
    //   });
    // } else {
    //   console.log('Please correct them.');
    // }
  };

  const handleExtraDetails = () => {
    console.log({UserLocation, UserLocationError});
    if (
      validateRequiredField(location, '') &&
      validateRequiredField(language, '')
    ) {
      setShowErrorInField(false);
      let data = {
        firstname: firstName,
        lastname: lastName,
        email: email,
        dob: dob,
        phonenumber: phoneNumber,
        password: password,
        language: language,
        lat: '38.8951',
        long: '-77.0364',
        country: 'India',
      };
      console.log(data);
      setShowLanguageSelectionModal(false);
      handleSignUp();
    } else {
      setShowErrorInField(true);
    }
  };

  const renderSelectionView = () => {
    return (
      <View
        style={{
          backgroundColor: 'white',
          marginHorizontal: scaleSize(15),
          padding: scaleSize(25),
          width: '80%',
          borderRadius: 15,
          overflow: 'hidden',
        }}>
        <View style={modalStyle.content}>
          <Text style={modalStyle.title}>
            {`Select your \n language & location`}
          </Text>
        </View>
        <Icon
          name={'close'}
          size={30}
          color={appColors.Primary}
          style={modalStyle.closeIcon}
          onPress={() => setShowLanguageSelectionModal(false)}
        />
        <AppPrimarySelectionView
          title={t('Your Location')}
          data={tmpLocations}
          value={location}
          onChangeValue={setLocation}
          errorMessage={t('Select Location')}
          showError={showErrorInField && !validateRequiredField(location, '')}
          primary
          iconName={'location'}
        />

        <AppPrimarySelectionView
          title={t('Preferred Language')}
          data={tmpLanguage}
          value={language}
          onChangeValue={setLanguage}
          errorMessage={t('Select Language')}
          showError={showErrorInField && !validateRequiredField(language, '')}
          primary
          iconName={'language-outline'}
        />
        <AppButton title={t('Select')} primary click={handleExtraDetails} />
      </View>
    );
  };

  return (
    // <ImageBackground
    //   style={{width: '100%', height: '100%'}}
    //   resizeMode={'cover'}
    //   source={imagepath.loginBgImage}>
    //   <View style={styles.rootContainer}>
    //     <SafeAreaView>
    //       <KeyboardAwareScrollView style={{padding: 10}}>
    //         <Text style={styles.loginTxtStyle}>{t('Create Your Account')}</Text>
    //         <View style={[styles.containerTextRow2, {marginTop: 30}]}>
    //           <View style={{width: '46%'}}>
    //             <Text style={styles.emailTxtStyle}>{t('first_name')}</Text>
    //             <TextInput
    //               style={[
    //                 styles.textInputStyle,
    //                 !isFirstValid && styles.invalidInput,
    //               ]}
    //               value={firstName}
    //               onChangeText={setFirstName}
    //             />
    //           </View>

    //           <View style={{width: '46%'}}>
    //             <Text style={styles.emailTxtStyle}>{t('last_name')}</Text>
    //             <TextInput
    //               style={[
    //                 styles.textInputStyle,
    //                 !isLastValid && styles.invalidInput,
    //               ]}
    //               value={lastName}
    //               onChangeText={setLastName}
    //             />
    //           </View>
    //         </View>

    //         <View style={{marginTop: 20}}>
    //           <Text style={styles.emailTxtStyle}>{t('e_mail')}</Text>
    //           <TextInput
    //             style={[
    //               styles.textInputStyle,
    //               !isEmailValid && styles.invalidInput,
    //             ]}
    //             value={email}
    //             onChangeText={setEmail}
    //           />
    //         </View>

    //         <View style={[styles.containerTextRow2, {marginTop: 20}]}>
    //           <View style={{width: '46%'}}>
    //             <Text style={styles.emailTxtStyle}>{t('your_birth_day')}</Text>
    //             <TouchableOpacity
    //               onPress={() => {
    //                 showDatePicker();
    //               }}>
    //               <View
    //                 style={[
    //                   styles.textInputStyle,
    //                   {justifyContent: 'center'},
    //                   !isDobValid && styles.invalidInput,
    //                 ]}>
    //                 <Text>{selectedDate}</Text>
    //               </View>
    //             </TouchableOpacity>
    //           </View>

    //           <View style={{width: '46%'}}>
    //             <Text style={styles.emailTxtStyle}>{t('gender')}</Text>
    //             <Dropdown
    //               style={[
    //                 styles.dropdown,
    //                 {marginTop: 10},
    //                 !isGenderValid && styles.invalidInput,
    //               ]}
    //               placeholderStyle={[
    //                 styles.placeholderStyle,
    //                 !isGenderValid && {color: '#607274'},
    //               ]}
    //               selectedTextStyle={[
    //                 styles.selectedTextStyle,
    //                 !isGenderValid && {color: '#607274'},
    //               ]}
    //               inputSearchStyle={styles.inputSearchStyle}
    //               iconStyle={[
    //                 styles.iconStyle,
    //                 !isGenderValid && {
    //                   width: 20,
    //                   height: 20,
    //                   tintColor: '#607274',
    //                 },
    //               ]}
    //               data={gender}
    //               search
    //               labelField="gender"
    //               valueField="value"
    //               placeholder={genderName}
    //               searchPlaceholder={t('search')}
    //               value={genderName}
    //               // onFocus={() => setIsGenderValid(true)}
    //               // onBlur={() => setIsGenderValid(false)}
    //               onChange={item => {
    //                 setGenderName(item.value);
    //               }}
    //             />
    //           </View>
    //         </View>

    //         <Text style={[styles.emailTxtStyle, {marginTop: 20}]}>
    //           {t('phone_no')}
    //         </Text>
    //         <View style={styles.containerTextRow2}>
    //           <View style={{width: '30%'}}>
    //             <TextInput placeholder="+45" style={styles.textInputStyle} />
    //           </View>
    //           <View style={{width: '65%'}}>
    //             <TextInput
    //               style={[
    //                 styles.textInputStyle,
    //                 !isPhoneValid && styles.invalidInput,
    //               ]}
    //               keyboardType="numeric"
    //               value={phoneNumber}
    //               onChangeText={setphoneNumber}
    //             />
    //           </View>
    //         </View>

    //         <View>
    //           <Text style={[styles.emailTxtStyle, {marginTop: 20}]}>
    //             {t('password')}
    //           </Text>
    //           <TextInput
    //             style={[
    //               styles.textInputStyle,
    //               !isPasswordValid && styles.invalidInput,
    //             ]}
    //             value={password}
    //             onChangeText={setPassword}
    //           />
    //         </View>
    //         <TouchableOpacity onPress={handleSubmit}>
    //           <View style={styles.buttonViewStyle}>
    //             <Text style={styles.buttonTxtStyle}>{t('Next')}</Text>
    //           </View>
    //         </TouchableOpacity>

    //         <View style={styles.text2}>
    //           <View style={styles.alreadyText}>
    //             <Text style={styles.text1}>
    //               {t('Already have an account?')}
    //             </Text>
    //             <TouchableOpacity onPress={goToSignInScreen}>
    //               <Text style={styles.underlineText}>{t('Sign in')}</Text>
    //             </TouchableOpacity>
    //             <Text style={styles.text1}> {t('here')}</Text>
    //           </View>
    //         </View>
    //         <Modal
    //           animationType="fade"
    //           visible={modalVisible}
    //           onRequestClose={closeModal}
    //           transparent={true}>
    //           <View
    //             style={{
    //               justifyContent: 'center',
    //               alignItems: 'center',
    //               flex: 1,
    //               backgroundColor: 'rgba(0, 0, 0, 0.5)',
    //             }}>
    //             <View style={styles.modelView}>
    //               <View style={{width: '100%', flexDirection: 'row'}}>
    //                 <View style={styles.alertTextView}>
    //                   <Text style={styles.alertSelectText}>
    //                     {t('Select Your')}
    //                   </Text>
    //                   <Text style={styles.alertLLText}>
    //                     {t('Language and Location')}
    //                   </Text>
    //                 </View>
    //                 <TouchableOpacity
    //                   onPress={() => {
    //                     setModalVisible(false);
    //                   }}>
    //                   <Image
    //                     style={styles.alertCancle}
    //                     source={imagepath.cancelIcon}
    //                   />
    //                 </TouchableOpacity>
    //               </View>
    //               <View style={styles.alertView}>
    //                 <Text style={styles.txtLocation}>{t('Your Location')}</Text>
    //                 <Dropdown
    //                   style={[
    //                     styles.dropdown,
    //                     !isLocationValid && styles.invalidInput,
    //                   ]}
    //                   placeholderStyle={[
    //                     styles.placeholderStyle,
    //                     !isLocationValid && {color: '#607274'},
    //                   ]}
    //                   selectedTextStyle={[
    //                     styles.selectedTextStyle,
    //                     !isLocationValid && {color: '#607274'},
    //                   ]}
    //                   inputSearchStyle={styles.inputSearchStyle}
    //                   iconStyle={[
    //                     styles.iconStyle,
    //                     !isLocationValid && {
    //                       width: 20,
    //                       height: 20,
    //                       tintColor: '#607274',
    //                     },
    //                   ]}
    //                   data={locations}
    //                   search
    //                   maxHeight={300}
    //                   labelField="location"
    //                   valueField="value"
    //                   placeholder={valueLocation}
    //                   searchPlaceholder={t('search')}
    //                   value={valueLocation}
    //                   // onFocus={() => setIsFocus(true)}
    //                   // onBlur={() => setIsFocus(false)}
    //                   onChange={item => {
    //                     setValueLocation(item.value);
    //                   }}
    //                 />

    //                 <Text style={styles.txtLocation}>
    //                   {t('preferred_language')}
    //                 </Text>
    //                 <Dropdown
    //                   style={[
    //                     styles.dropdown,
    //                     !isLanguageValid && styles.invalidInput,
    //                   ]}
    //                   placeholderStyle={[
    //                     styles.placeholderStyle,
    //                     !isLanguageValid && {color: '#607274'},
    //                   ]}
    //                   selectedTextStyle={[
    //                     styles.selectedTextStyle,
    //                     !isLanguageValid && {color: '#607274'},
    //                   ]}
    //                   inputSearchStyle={styles.inputSearchStyle}
    //                   iconStyle={[
    //                     styles.iconStyle,
    //                     !isLanguageValid && {
    //                       width: 20,
    //                       height: 20,
    //                       tintColor: '#607274',
    //                     },
    //                   ]}
    //                   data={language}
    //                   search
    //                   maxHeight={300}
    //                   labelField="language"
    //                   valueField="value"
    //                   placeholder={valueLanguage}
    //                   searchPlaceholder={t('search')}
    //                   value={valueLanguage}
    //                   // onFocus={() => setIsFocusLanguage(true)}
    //                   // onBlur={() => setIsFocusLanguage(false)}
    //                   onChange={item => {
    //                     setValueLanguage(item.value);
    //                   }}
    //                 />
    //                 <TouchableOpacity onPress={handleSignUp}>
    //                   <View style={styles.modeButtonViewStyle}>
    //                     <Text style={styles.buttonTxtStyle}>
    //                       {t('sign_up')}
    //                     </Text>
    //                   </View>
    //                 </TouchableOpacity>
    //               </View>
    //             </View>
    //           </View>
    //         </Modal>
    // <DateTimePickerModal
    //   isVisible={isDatePickerVisible}
    //   mode="date"
    //   onConfirm={handleDateConfirm}
    //   onCancel={hideDatePicker}
    // />
    //       </KeyboardAwareScrollView>
    //     </SafeAreaView>
    //   </View>

    //   <Modal
    //     animationType="fade"
    //     visible={loaderModelVisible}
    //     onRequestClose={cloaseLoaderModel}
    //     transparent={true}>
    //     <View
    //       style={{
    //         justifyContent: 'center',
    //         alignItems: 'center',
    //         flex: 1,
    //         backgroundColor: 'rgba(0, 0, 0, 0.5)',
    //       }}>
    //       <ActivityIndicator size={'large'} color={'#DED0B6'} />
    //     </View>
    //   </Modal>
    // </ImageBackground>
    <AppKeyBoardAvoidingView imageBackground={true}>
      {showLanguageSelectionModal && (
        <AppBlurredOverlay>{renderSelectionView()}</AppBlurredOverlay>
      )}
      <ScrollView style={styles.rootContainer} scrollToOverflowEnabled>
        <Text style={styles.loginTxtStyle}>{t('Create Your Account')}</Text>
        <View style={{margin: 15}}>
          <View style={styles.containerTextRow2}>
            <AppTextInput
              value={firstName}
              required
              text={t('first_name')}
              placeHolder=""
              onChangeText={setFirstName}
              showOnRow
              errorMessage={t('Enter first name')}
              showError={
                showErrorInField && !validateRequiredField(firstName, '')
              }
            />
            <View style={{width: 10}} />
            <AppTextInput
              value={lastName}
              required
              text={t('last_name')}
              placeHolder=""
              onChangeText={setLastName}
              showOnRow
              errorMessage={t('Enter last name')}
              showError={
                showErrorInField && !validateRequiredField(lastName, '')
              }
            />
          </View>

          <AppTextInput
            value={email}
            required
            text={t('e_mail')}
            placeHolder=""
            onChangeText={setEmail}
            errorMessage={t('Please Enter Valid Email')}
            showError={showErrorInField && !validateEmail(email, '')}
          />

          <View style={styles.containerTextRow2}>
            <AppDatePicker
              text={t('Your Birth Day')}
              date={dob}
              setDate={setDob}
              errorMessage={t('Enter DOB')}
              showError={showErrorInField && !validateRequiredField(dob, '')}
            />
            <View style={{width: 10}} />
            <AppSelectionModal
              title={t('Gender')}
              data={appGenderData}
              value={gender}
              onChangeValue={setGender}
              errorMessage={t('Select gender')}
              showError={showErrorInField && !validateRequiredField(gender, '')}
            />
          </View>

          <AppPhoneTextInputView
            value={phoneNumber}
            handlePhoneNumberUpdate={handlePhoneNumberUpdate}
            onChangeValue={setPhoneNumber}
            showError={
              showErrorInField && !validateRequiredField(phoneNumber, '')
            }
          />

          <AppTextInput
            value={password}
            required
            text={t('password')}
            placeHolder=""
            onChangeText={setPassword}
            isPassword={true}
            errorMessage={t(
              'Password must contain at least 8 character and 1 special character',
            )}
            showError={showErrorInField && !validatePassword(password, '')}
          />
          <AppButton title={t('Next')} primary click={handleNextBtn} />
        </View>
        {loading === LoadingType.pending ? (
          <AppLoader openModal={true} />
        ) : null}
      </ScrollView>
    </AppKeyBoardAvoidingView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginTop: 50,
  },
  loginTxtStyle: {
    fontWeight: '600',
    fontFamily: 'Poppins-Regular',
    fontSize: 28,
    color: 'white',
    textAlign: 'center',
    marginVertical: 30,
  },
  containerTextRow2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  alreadyText: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  emailTxtStyle: {
    fontWeight: '600',
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: 'white',
  },
  textInputStyle: {
    backgroundColor: 'white',
    width: '100%',
    height: 50,
    borderRadius: 6,
    marginTop: 10,
    fontFamily: 'Poppins-Regular',
    paddingHorizontal: 10,
  },
  buttonViewStyle: {
    width: '100%',
    height: 50,
    backgroundColor: '#607274',
    borderRadius: 6,
    marginTop: 50,
    justifyContent: 'center',
  },

  modeButtonViewStyle: {
    width: '100%',
    height: 50,
    backgroundColor: '#607274',
    borderRadius: 6,
    justifyContent: 'center',
    marginTop: 20,
  },
  buttonTxtStyle: {
    fontWeight: '600',
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
  },
  text2Style: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: appColors.Text,
  },
  text2: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
  },
  underlineText: {
    textDecorationLine: 'underline',
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#607274',
    marginLeft: 3,
  },
  text1: {
    fontSize: 14,
    color: appColors.Text,
    alignItems: 'center',
    fontFamily: 'Poppins-Regular',
  },

  modelView: {
    width: '75%',
    backgroundColor: 'white',
    borderRadius: 20,
  },
  alertTextView: {
    width: '67%',
    marginTop: 30,
    marginLeft: 30,
  },
  alertSelectText: {
    fontWeight: '400',
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
    color: '#607274',
    textAlign: 'center',
  },
  alertLLText: {
    fontWeight: '400',
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
    color: '#607274',
    textAlign: 'center',
    marginLeft: 5,
  },
  alertCancle: {
    width: 14,
    height: 14,
    marginLeft: 15,
    marginTop: 40,
  },
  alertView: {
    width: '100%',
    padding: 20,
  },
  txtLocation: {
    fontWeight: '400',
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#607274',
  },

  dropdown: {
    height: 50,
    // borderColor: 'gray',
    // borderWidth: 0.5,
    backgroundColor: appColors.LightBackGround,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginBottom: 18,
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
    color: '#607274',
  },
  selectedTextStyle: {
    fontSize: 16,
    color: '#607274',
  },
  iconStyle: {
    width: 20,
    height: 20,
    tintColor: '#607274',
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },

  invalidInput: {
    borderColor: 'red',
    borderRadius: 6,
    borderWidth: 1,
  },
  errorText: {
    fontWeight: '600',
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: 'red',
    marginTop: 10,
  },
});

const modalStyle = StyleSheet.create({
  content: {
    ...globalStyle.rowCenterContent,
    flex: 0,
    marginBottom: scaleHeight(15),
  },
  closeIcon: {
    height: 30,
    width: 30,
    position: 'absolute',
    right: 15,
    top: 15,
  },
  title: {
    ...globalFontStyle(20, '400', appColors.Primary).centerText,
  },
  text: {
    ...globalFontStyle(16, '400', appColors.Text).text,
  },
});
