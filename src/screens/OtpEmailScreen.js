import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useRef, useState} from 'react';
import imagepath from '../images/Images';
import {useNavigation, useRoute} from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import {otpEmail} from './network/Api';
import {useTranslation} from 'react-i18next';
import {appColors, appScreens} from '../utils/constant';
import AppKeyBoardAvoidingView from '../components/AppKeyBoardAvoidingView';
import {useDispatch, useSelector} from 'react-redux';
import AppLoader from '../components/AppLoader';
import AppButton from '../components/AppButton';
import {LoadingType} from '../services/api/constant';
import {globalFontStyle, globalStyle} from '../utils/styles';
import {scaleSize} from '../utils/screenUtils';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import {emailVerification} from '../redux/features/auth/authSlice';

const OtpEmailScreen = () => {
  const {t} = useTranslation();
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: 4});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const loading = useSelector(state => state.auth.loading);

  const goToAnotherScreen = () => {
    if (value?.length == 4) {
      let data = {
        email: 'shivamjasoliya1920@gmail.com',
        otp: value,
      };
      console.log(data);
      dispatch(emailVerification(data))
        .unwrap()
        .then(response => {
          console.log({response});
          // dispatch(setUser(response));
          // navigation.navigate(appScreens.dashboard);
        })
        .catch(error => {});
      // let endPoint = 'api/auth/otp/email';
      // otpEmail(data, endPoint).then(response => {
      //   console.log(response);
      //   if (response.Success == true) {
      //     cloaseLoaderModel();
      //     Toast.show({
      //       type: 'success',
      //       text1: 'Success',
      //       text2: response?.Message,
      //     });
      //     navigation.replace(appScreens.mobileOTP, {mobileNo: mobile_no}); // Navigate to the 'Login' screen
      //   } else {
      //     cloaseLoaderModel();
      //     Toast.show({
      //       type: 'error',
      //       text1: 'Failed',
      //       text2: response?.Message,
      //     });
      //   }
      // });
    } else {
      console.log('failed');
    }
  };

  return (
    <AppKeyBoardAvoidingView imageBackground={true}>
      <View style={styles.rootContainer}>
        <Image
          style={{alignSelf: 'center'}}
          source={imagepath.otpImage}></Image>
        <Text style={styles.titleStyle}>{t('Check your email.')}</Text>
        <Text style={styles.text}>
          {t(
            'an_email_with_verification_code_has_been_sent_to_your_email_id_write_the_code_below_to_continue',
          )}
        </Text>

        <CodeField
          ref={ref}
          {...props}
          value={value}
          onChangeText={setValue}
          cellCount={4}
          rootStyle={styles.codeFieldRoot}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          autoComplete={Platform.select({
            android: 'sms-otp',
            default: 'one-time-code',
          })}
          testID="my-code-input"
          renderCell={({index, symbol, isFocused}) => (
            <View style={styles.cell}>
              <Text
                key={index}
                style={styles.focusCell}
                onLayout={getCellOnLayoutHandler(index)}>
                {symbol || (isFocused ? <Cursor /> : null)}
              </Text>
            </View>
          )}
        />

        <Text style={styles.text2}>
          {t(`Didn’t recived it yet?`)}{' '}
          <Text
            style={styles.boldText}
            onPress={() => navigation.navigate(appScreens.signup)}>
            {t('Resend')}
          </Text>
          <Text style={styles.text2}> {t('code')}</Text>
        </Text>

        <AppButton title={t('Continue')} primary click={goToAnotherScreen} />
        <Text style={styles.text2}>
          {t(`Already have an account?`)}{' '}
          <Text
            style={styles.underlineText}
            onPress={() => navigation.navigate(appScreens.signup)}>
            {t('Sign in')}
          </Text>
          <Text style={styles.text2}> {t('here')}</Text>
        </Text>
        {loading === LoadingType.pending ? (
          <AppLoader openModal={true} />
        ) : null}
      </View>
    </AppKeyBoardAvoidingView>
  );
};

export default OtpEmailScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginHorizontal: 15,
    justifyContent: 'center',
  },
  titleStyle: {
    ...globalFontStyle(28, '600', appColors.TextPrimary).centerText,
    marginVertical: scaleSize(15),
  },
  text: {
    ...globalFontStyle(18, '500', appColors.TextPrimary).centerText,
  },
  text2: {
    ...globalFontStyle(14, '400', appColors.Text).centerText,
  },
  underlineText: {
    textDecorationLine: 'underline',
    ...globalFontStyle(14, '400', appColors.Primary).centerText,
  },
  boldText: {
    ...globalFontStyle(14, '700', appColors.Primary).text,
  },
  codeFieldRoot: {margin: 20},
  cell: {
    width: 63,
    height: 85,
    backgroundColor: appColors.TextPrimary,
    flex: 1,
    justifyContent: 'center', // Center the content vertically
    alignItems: 'center',
    margin: 8,
    ...Platform.select({
      ios: {
        shadowColor: '#000000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 4,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  focusCell: {
    ...globalFontStyle(26, '500', appColors.Primary).centerText,
  },
});
