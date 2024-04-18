import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import React, {useState} from 'react';
import imagepath from '../images/Images';
import {ScrollView} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {getStoredLocal, removeStoredValue} from '../utils/helperFunctions';
import {appKeys, appScreens} from '../utils/constant';
import LanguageSelectionModal from '../components/LanguageSelectionModal';

const MyProfile = () => {
  const navigation = useNavigation();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const goToSignInScreen = () => {
    // AsyncStorage.setItem('isLoggedIn', ' ');
    removeStoredValue(appKeys.accessToken);
    removeStoredValue(appKeys.user);
    navigation.reset({
      index: 0,
      routes: [{name: appScreens.signin}],
    });
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.rootContainer}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 20,
          }}>
          <TouchableOpacity
            onPress={() => {
              navigation.replace('Dashboard');
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
              marginTop: 20,
              fontWeight: '600',
              fontFamily: 'Poppins-Bold',
              fontSize: 25,
              color: '#607274',
            }}>
            My Profile
          </Text>
        </View>
        <View style={{padding: 20}}>
          <View
            style={{
              width: '100%',
              height: 230,
              backgroundColor: '#F7F7F7',
              borderRadius: 20,
            }}>
            <View style={{padding: 20}}>
              <View
                style={{
                  width: '100%',
                  flexDirection: 'row',
                  justifyContent: 'flex-end',
                }}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('EditProfile')}>
                  <Image
                    style={{width: 17, height: 17}}
                    source={imagepath.editIcon}
                  />
                </TouchableOpacity>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <View>
                  <Image
                    style={{
                      width: 152,
                      height: 152,
                      marginTop: 20,
                    }}
                    source={imagepath.profileImage}
                  />
                </View>
                <View style={{flexDirection: 'column'}}>
                  <Text
                    style={{
                      width: 147,
                      height: 30,
                      fontWeight: '600',
                      fontFamily: 'Poppins-Bold',
                      fontSize: 20,
                      color: '#494949',
                    }}>
                    Ida Andersson
                  </Text>
                  <Text
                    style={{
                      width: 59,
                      height: 24,
                      fontWeight: '300',
                      fontFamily: 'Poppins-Regular',
                      fontSize: 16,
                      color: '#494949',
                    }}>
                    Female
                  </Text>
                  <Text
                    style={{
                      width: 154,
                      height: 24,
                      fontWeight: '300',
                      fontFamily: 'Poppins-Regular',
                      fontSize: 16,
                      color: '#494949',
                    }}>
                    Stockhlom, Sweden
                  </Text>
                  <Text
                    style={{
                      width: 103,
                      height: 24,
                      fontWeight: '300',
                      fontFamily: 'Poppins-Regular',
                      fontSize: 16,
                      color: '#494949',
                    }}>
                    +44 90418281
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <ScrollView>
          <View style={{padding: 20}}>
            <View
              style={{
                width: '100%',
                height: 340,
                backgroundColor: '#F7F7F7',
                borderRadius: 10,
              }}>
              <View style={{padding: 20, flexDirection: 'column'}}>
                <View
                  style={{
                    width: '100%',
                    height: 50,
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Image
                    style={{width: 15, height: 15}}
                    source={imagepath.accountIcon}
                  />
                  <Text
                    style={{
                      width: 67,
                      height: 24,
                      fontWeight: '400',
                      fontFamily: 'Poppins-Regular',
                      fontSize: 16,
                      color: '#494949',
                      marginLeft: 30,
                    }}>
                    Account
                  </Text>
                </View>
                <View
                  style={{width: '100%', height: 2, backgroundColor: '#EAEAEA'}}
                />
                <View
                  style={{
                    width: '100%',
                    height: 50,
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Image
                    style={{width: 15, height: 15}}
                    source={imagepath.bookingIcon}
                  />
                  <Text
                    style={{
                      width: 67,
                      height: 24,
                      fontWeight: '400',
                      fontFamily: 'Poppins-Regular',
                      fontSize: 16,
                      color: '#494949',
                      marginLeft: 30,
                    }}>
                    Bookings
                  </Text>
                </View>
                <View
                  style={{width: '100%', height: 2, backgroundColor: '#EAEAEA'}}
                />
                <View
                  style={{
                    width: '100%',
                    height: 50,
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Image
                    style={{width: 16, height: 15}}
                    source={imagepath.savePlaceIcon}
                  />
                  <Text
                    style={{
                      width: 107,
                      height: 24,
                      fontWeight: '400',
                      fontFamily: 'Poppins-Regular',
                      fontSize: 16,
                      color: '#494949',
                      marginLeft: 30,
                    }}>
                    Saved Place
                  </Text>
                </View>
                <View
                  style={{width: '100%', height: 2, backgroundColor: '#EAEAEA'}}
                />
                <View
                  style={{
                    width: '100%',
                    height: 50,
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Image
                    style={{width: 15, height: 17}}
                    source={imagepath.contactUsIcon}
                  />
                  <Text
                    style={{
                      width: 89,
                      height: 24,
                      fontWeight: '400',
                      fontFamily: 'Poppins-Regular',
                      fontSize: 16,
                      color: '#494949',
                      marginLeft: 30,
                    }}>
                    Contact Us
                  </Text>
                </View>
                <View
                  style={{width: '100%', height: 2, backgroundColor: '#EAEAEA'}}
                />
                <View
                  style={{
                    width: '100%',
                    height: 50,
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Image
                    style={{width: 15, height: 16}}
                    source={imagepath.privacyPolicyIcon}
                  />
                  <Text
                    style={{
                      width: 109,
                      height: 24,
                      fontWeight: '400',
                      fontFamily: 'Poppins-Regular',
                      fontSize: 16,
                      color: '#494949',
                      marginLeft: 30,
                    }}>
                    Privacy Policy
                  </Text>
                </View>
                <View
                  style={{width: '100%', height: 2, backgroundColor: '#EAEAEA'}}
                />
                <TouchableOpacity onPress={() => setIsModalVisible(true)}>
                  <View
                    style={{
                      width: '100%',
                      height: 50,
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <Image
                      style={{width: 18, height: 16}}
                      source={imagepath.languageIcon}
                    />
                    <Text
                      style={{
                        width: 81,
                        height: 24,
                        fontWeight: '400',
                        fontFamily: 'Poppins-Regular',
                        fontSize: 16,
                        color: '#494949',
                        marginLeft: 30,
                      }}>
                      Language
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            <TouchableOpacity onPress={goToSignInScreen}>
              <View
                style={{
                  width: '100%',
                  height: 70,
                  backgroundColor: '#F7F7F7',
                  marginTop: 20,
                  borderRadius: 10,
                  flexDirection: 'row',
                  alignItems: 'center',
                  padding: 20,
                }}>
                <Image
                  style={{width: 15, height: 16}}
                  source={imagepath.logoutIcon}
                />
                <Text
                  style={{
                    width: 81,
                    height: 24,
                    fontWeight: '400',
                    fontFamily: 'Poppins-Regular',
                    fontSize: 16,
                    color: '#494949',
                    marginLeft: 30,
                  }}>
                  Logout
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>

        <LanguageSelectionModal
          isVisible={isModalVisible}
          onClose={() => setIsModalVisible(!isModalVisible)}
        />
      </View>
    </SafeAreaView>
  );
};

export default MyProfile;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'column',
  },
});
