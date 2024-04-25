import {
  StyleSheet,
  Text,
  View,
  Image,
  KeyboardAvoidingView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import imagepath from '../images/Images';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';

const EditProfile = () => {
  const {t} = useTranslation();
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <KeyboardAvoidingView style={{flex: 1}}>
        <View style={styles.rootContainer}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 20,
            }}>
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}>
              <Image
                style={{width: 50, height: 50, marginHorizontal: 10}}
                source={imagepath.backButtonImage}
                marginLeft={true}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                marginTop: 30,
                fontWeight: '600',
                fontFamily: 'Poppins-Bold',
                fontSize: 25,
                color: '#607274',
              }}>
              {t('Edit My Profile')}
            </Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <Image
              style={{
                width: 152,
                height: 152,
                marginTop: 20,
              }}
              source={imagepath.profileImage}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: 10,
            }}>
            <Text
              style={{
                width: 140,
                height: 21,
                fontWeight: '400',
                fontFamily: 'Poppins-Regular',
                fontSize: 14,
                color: '#494949',
              }}>
              {t('Change my photo')}
            </Text>
          </View>

          <ScrollView style={{width: '100%', padding: 30}}>
            <View style={{flexDirection: 'column'}}>
              <Text
                style={{
                  width: 49,
                  height: 24,
                  fontWeight: '500',
                  fontFamily: 'Poppins-Regular',
                  fontSize: 14,
                  color: '#494949',
                }}>
                {t('Name')}
              </Text>
              <View
                style={{
                  width: '100%',
                  height: 48,
                  borderColor: '#CCCCFF',
                  borderWidth: 1,
                  borderRadius: 5,
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <TextInput
                  style={{width: 120, height: '100%', marginLeft: 10}}
                  placeholder="Sumit Ranjan"></TextInput>
                <Image
                  style={{
                    width: 16,
                    height: 16,
                    tintColor: '#CCCCFF',
                    marginRight: 10,
                  }}
                  source={imagepath.accountIcon}
                />
              </View>
            </View>

            <View style={{flexDirection: 'column', marginTop: 20}}>
              <Text
                style={{
                  width: 55,
                  height: 24,
                  fontWeight: '500',
                  fontFamily: 'Poppins-Regular',
                  fontSize: 14,
                  color: '#494949',
                }}>
                {t('gender')}
              </Text>
              <View
                style={{
                  width: '100%',
                  height: 48,
                  borderColor: '#CCCCFF',
                  borderWidth: 1,
                  borderRadius: 5,
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <TextInput
                  style={{width: 120, height: '100%', marginLeft: 10}}
                  placeholder="Female"></TextInput>
                <Image
                  style={{
                    width: 16,
                    height: 16,
                    tintColor: '#CCCCFF',
                    marginRight: 10,
                  }}
                  source={imagepath.genderIcon}
                />
              </View>
            </View>

            <View style={{flexDirection: 'column', marginTop: 20}}>
              <Text
                style={{
                  width: 49,
                  height: 24,
                  fontWeight: '500',
                  fontFamily: 'Poppins-Regular',
                  fontSize: 14,
                  color: '#494949',
                }}>
                {t('City')}
              </Text>
              <View
                style={{
                  width: '100%',
                  height: 48,
                  borderColor: '#CCCCFF',
                  borderWidth: 1,
                  borderRadius: 5,
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <TextInput
                  style={{
                    width: 280,
                    height: '100%',
                    marginLeft: 10,
                    maxWidth: 280,
                  }}
                  placeholder="Stockholm, Sweden "></TextInput>
                <Image
                  style={{
                    width: 16,
                    height: 16,
                    tintColor: '#CCCCFF',
                    marginRight: 10,
                  }}
                  source={imagepath.cityIcon}
                />
              </View>
            </View>

            <View style={{flexDirection: 'column', marginTop: 20}}>
              <Text
                style={{
                  width: 49,
                  height: 24,
                  fontWeight: '500',
                  fontFamily: 'Poppins-Regular',
                  fontSize: 14,
                  color: '#494949',
                }}>
                {t('City')}
              </Text>
              <View style={{width: '100%', flexDirection: 'row'}}>
                <View
                  style={{
                    width: 69,
                    height: 48,
                    borderColor: '#CCCCFF',
                    borderWidth: 1,
                    borderRadius: 5,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      width: 31,
                      height: 24,
                      fontWeight: '300',
                      fontFamily: 'Poppins-Regular',
                      fontSize: 16,
                      color: '#494949',
                    }}>
                    +45
                  </Text>
                </View>

                <View
                  style={{
                    width: 254,
                    height: 48,
                    borderColor: '#CCCCFF',
                    borderWidth: 1,
                    borderRadius: 5,
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginLeft: 10,
                  }}>
                  <TextInput
                    style={{
                      width: 200,
                      height: '100%',
                      marginLeft: 10,
                      maxWidth: 200,
                    }}
                    placeholder="91408281"
                    keyboardType="number-pad"></TextInput>
                  <Image
                    style={{
                      width: 16,
                      height: 24,
                      tintColor: '#CCCCFF',
                      marginRight: 10,
                    }}
                    source={imagepath.mobileIcon}
                  />
                </View>
              </View>
            </View>

            <View style={{flexDirection: 'column', marginTop: 20}}>
              <Text
                style={{
                  width: 49,
                  height: 24,
                  fontWeight: '500',
                  fontFamily: 'Poppins-Regular',
                  fontSize: 14,
                  color: '#494949',
                }}>
                {t('e_mail')}
              </Text>
              <View
                style={{
                  width: '100%',
                  height: 48,
                  borderColor: '#CCCCFF',
                  borderWidth: 1,
                  borderRadius: 5,
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <TextInput
                  style={{width: 280, height: '100%', marginLeft: 10}}
                  placeholder="Idaandersson@gmail.com"></TextInput>
                <Image
                  style={{
                    width: 16,
                    height: 16,
                    tintColor: '#CCCCFF',
                    marginRight: 10,
                  }}
                  source={imagepath.emailIcon}
                />
              </View>
            </View>

            <View style={styles.buttonContainer}>
              <View style={styles.buttonBox}>
                <Text
                  style={{
                    width: 127,
                    height: 23,
                    fontWeight: '600',
                    fontFamily: 'Poppins-Bold',
                    fontSize: 17,
                    color: '#FFFFFF',
                  }}>
                  {t('Save Changes')}
                </Text>
              </View>
            </View>
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'column',
  },

  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 40,
    marginBottom: 50,
  },
  buttonBox: {
    width: '100%',
    height: 53,
    backgroundColor: '#607274',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
