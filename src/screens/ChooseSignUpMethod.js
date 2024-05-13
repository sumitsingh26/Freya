import {
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Touchable,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import imagepath from '../images/Images';
import CustomButton from '../custom_button/CustomButton';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
import {appColors} from '../utils/constant';

const ChooseSignUpMethod = () => {
  const navigation = useNavigation();
  const {t} = useTranslation();
  const goToAnotherScreen = () => {
    navigation.navigate('SignInScreen');
  };
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={imagepath.main_bg_image}
        resizeMode="stretch"
        style={styles.image}
      />
      <View
        style={{
          marginHorizontal: 10,
        }}>
        <CustomButton />
        <View style={styles.containerTextRow}>
          <Text style={styles.text1}>{t('Already have an account?')}</Text>
          <TouchableOpacity onPress={goToAnotherScreen}>
            <Text style={styles.underlineText}>{t('Sign in')}</Text>
          </TouchableOpacity>
          <Text style={styles.textHere}>{t('here')}</Text>
        </View>
        <View style={styles.text2}>
          <Text style={styles.text2Style}>
            {t(`By continuing the process, you're to Freya's`)}
          </Text>
          <View style={styles.containerTextRow2}>
            <Text style={styles.underlineText}>{t('Terms & Conditions')}</Text>
            <Text style={styles.text1}> {t('and')} </Text>
            <Text style={styles.underlineText}>{t('Privacy Policy')}</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ChooseSignUpMethod;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    // alignSelf: 'center',
  },
  containerTextRow: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  containerTextRow2: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
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
  textHere: {
    fontSize: 14,
    color: appColors.Text,
    marginLeft: 3,
    fontFamily: 'Poppins-Regular',
  },
  text2: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 8,
  },
  text2Style: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: appColors.Text,
  },
  image: {
    flex: 1,
    resizeMode: 'stretch',
    width: '95%',
    alignSelf: 'center',
  },
});
