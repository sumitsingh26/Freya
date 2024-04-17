import {Alert, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import CustomKeyBoardAvoidingView from '../components/CustomKeyBoardAvoidingView';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';
import {appEndPoints, appKeys, appScreens, emailRegex} from '../utils/constant';
import {setStoredValue, showToast} from '../utils/helperFunctions';
import AppLoader from '../components/AppLoader';
import {useDispatch, useSelector} from 'react-redux';
import {loginUser, setUser} from '../redux/features/auth/authSlice';
import {loginUser1} from './network/Api';

const SignInScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('ranjansumit0000@gmail.com');
  const [password, setPassword] = useState('12345');

  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  const validateEmail = () => {
    if (!emailRegex.test(email)) {
      showToast({errorMessage: 'Please Enter Valid Email', type: 'error'});
      return false;
    }
    return true;
  };

  const validatePassword = () => {
    if (password.length < 3) {
      showToast({errorMessage: 'Please Enter Valid Password', type: 'error'});
      return false;
    }
    return true;
  };

  const handleSubmit = async () => {
    if (validateEmail() && validatePassword()) {
      let params = {
        email: email,
        password: password,
      };
      dispatch(loginUser(params))
        .unwrap()
        .then(response => {
          setStoredValue(appKeys.user, response?.resultData?.usersData);
          setStoredValue(appKeys.accessToken, response?.resultData?.token);
          navigation.navigate(appScreens.dashboard);
        })
        .catch(error => {
          // Alert.alert('Error', error.message);
          console.log({error});
          showToast({
            errorMessage: error.message,
            type: 'error',
          });
        });
    }
  };

  return (
    <CustomKeyBoardAvoidingView imageBackground={true}>
      <View style={styles.rootContainer}>
        <Text style={styles.loginTxtStyle}>Login</Text>
        <AppTextInput
          value={email}
          required
          text="Email"
          placeHolder="Please Enter Email"
          errorMessage={'Please enter email'}
          onChangeText={setEmail}
        />

        <AppTextInput
          value={password}
          required
          text="Password"
          placeHolder="Please Enter Password"
          errorMessage={'Please enter Password'}
          onChangeText={setPassword}
          secureTextEntry
        />

        <AppButton
          title="Send Verification Code"
          primary
          click={handleSubmit}
        />
      </View>
      {loading === 'pending' ? <AppLoader openModal={true} /> : null}
    </CustomKeyBoardAvoidingView>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: '8%',
  },
  loginTxtStyle: {
    fontWeight: '600',
    fontFamily: 'Poppins-Regular',
    fontSize: 28,
    color: 'white',
    textAlign: 'center',
  },
  emailTxtStyle: {
    fontWeight: '600',
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: 'white',
    marginTop: 10,
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
  buttonTxtStyle: {
    fontWeight: '600',
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
  },
  text2: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
  },
  containerTextRow2: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  text1: {
    fontSize: 14,
    color: '#494949',
    alignItems: 'center',
    fontFamily: 'Poppins-Regular',
  },
  underlineText: {
    textDecorationLine: 'underline',
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#607274',
    marginLeft: 3,
  },
  invalidInput: {
    borderColor: 'red',
    borderRadius: 6,
    borderWidth: 1,
  },
});
