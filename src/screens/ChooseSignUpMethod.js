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
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useTranslation} from 'react-i18next';

const ChooseSignUpMethod = () => {
  const navigation = useNavigation();
  const {t} = useTranslation();
  const goToAnotherScreen = () => {
    navigation.navigate('SignInScreen'); // Navigate to the 'Login' screen
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1}}>
          <Image style={styles.image} source={imagepath.main_bg_image} />
          <CustomButton style={styles.buttonStyle} />
          <View style={{flex: 1, justifyContent: 'flex-end'}}>
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
                <Text style={styles.underlineText}>
                  {t('Terms & Conditions')}
                </Text>
                <Text style={styles.text1}> {t('and')} </Text>
                <Text style={styles.underlineText}>{t('Privacy Policy')}</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default ChooseSignUpMethod;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
  },
  containerTextRow: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 6,
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
    color: '#494949',
    alignItems: 'center',
    fontFamily: 'Poppins-Regular',
  },
  textHere: {
    fontSize: 14,
    color: '#494949',
    marginLeft: 3,
    fontFamily: 'Poppins-Regular',
  },
  text2: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
  },
  text2Style: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#494949',
  },
  image: {
    width: '100%',
  },
});
