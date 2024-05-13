import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import imagepath from '../images/Images';
import {ScrollView} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {getStoredLocal, removeStoredValue} from '../utils/helperFunctions';
import {
  appColors,
  appKeys,
  appScreens,
  tmpGuestUserProfileList,
  tmpUserProfileList,
} from '../utils/constant';
import LanguageSelectionModal from '../components/LanguageSelectionModal';
import {useDispatch, useSelector} from 'react-redux';
import {clearUser} from '../redux/features/auth/authSlice';
import {useTranslation} from 'react-i18next';
import AppNavBar from '../components/AppNavBar';
import {globalFontStyle, globalStyle} from '../utils/styles';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {scaleHeight, scaleSize} from '../utils/screenUtils';

const MyProfile = () => {
  const {t} = useTranslation();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {user} = useSelector(state => state.auth);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleLogoutBtnClick = () => {
    dispatch(clearUser());
    navigation.reset({
      index: 0,
      routes: [{name: appScreens.signupMethod}],
    });
  };
  console.log(user);
  const renderInfoView = () => {
    return (
      <View style={styles.infoContainer}>
        <Icon
          name={'edit'}
          size={22}
          color={appColors.Primary}
          style={{
            alignSelf: 'flex-end',
          }}
          onPress={() => navigation.navigate('EditProfile')}
        />

        <View style={globalStyle.rowCenterContent}>
          <Image
            style={{
              width: 100,
              aspectRatio: 1 / 1,
            }}
            source={imagepath.profileImage}
          />
          <View style={styles.infoDetails}>
            <Text style={styles.name} numberOfLines={1}>
              Ida Andersson
            </Text>
            <Text style={styles.infoText} numberOfLines={1}>
              Female
            </Text>
            <Text style={styles.infoText} numberOfLines={1}>
              Stockhlom, Sweden
            </Text>
            <Text style={styles.infoText} numberOfLines={1}>
              +44 90418281
            </Text>
          </View>
        </View>
      </View>
    );
  };

  const renderGuestInfoView = () => {
    return (
      <View style={styles.infoContainer}>
        <View style={[styles.circle]}>
          <Icon
            name={'user'}
            size={scaleHeight(75)}
            color={appColors.Primary}
            onPress={() => navigation.navigate('EditProfile')}
          />
        </View>
        <Text style={styles.loginText} onPress={handleLogoutBtnClick}>
          {t('Sign in')}
        </Text>
      </View>
    );
  };

  const renderTabs = () => {
    return (
      <FlatList
        scrollEnabled={false}
        data={user ? tmpUserProfileList : tmpGuestUserProfileList}
        renderItem={({item}) => <TabItem item={item} />}
        keyExtractor={item => item?.name}
        numColumns={1}
        style={{
          ...styles.infoContainer,
        }}
        contentContainerStyle={{}}
        ItemSeparatorComponent={
          <View
            style={{
              height: 1,
              width: '100%',
              backgroundColor: '#EAEAEA',
            }}
          />
        }
      />
    );
  };

  const TabItem = ({item}) => {
    const handleClick = () => {
      switch (item?.name) {
        case 'Account':
          console.log('Account btn tapped');
          break;

        case 'Bookings':
          console.log('Bookings btn tapped');
          break;

        case 'Saved Places':
          console.log('Saved Places btn tapped');
          break;

        case 'Contact Us':
          console.log('Contact Us btn tapped');
          break;

        case 'Privacy Policy':
          console.log('Privacy Policy btn tapped');
          break;

        case 'Language':
          console.log('Language btn tapped');
          setIsModalVisible(true);
          break;

        case 'Logout':
          console.log('Logout btn tapped');
          handleLogoutBtnClick();
          break;

        default:
          break;
      }
    };
    return (
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          marginHorizontal: 15,
          paddingVertical: 15,
        }}
        onPress={handleClick}>
        <Image source={item?.image} style={{width: 20, height: 20}} />
        <Text style={styles.tabText}>{t(`${item?.name}`)}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={globalStyle.screenContainer}>
      <AppNavBar isProfile />
      <ScrollView>
        <View style={{margin: 15}}>
          <Text
            style={globalFontStyle(25, '600', appColors.Primary).centerText}>
            {t('My Profile')}
          </Text>
          {user ? renderInfoView() : renderGuestInfoView()}
          {renderTabs()}
          {user && (
            <View style={styles.infoContainer}>
              {
                <TabItem
                  item={{
                    name: 'Logout',
                    image: imagepath.logoutIcon,
                    authRequired: false,
                  }}
                />
              }
            </View>
          )}
        </View>
      </ScrollView>
      <LanguageSelectionModal
        isVisible={isModalVisible}
        onClose={() => setIsModalVisible(!isModalVisible)}
      />
    </SafeAreaView>
  );
};

export default MyProfile;

const styles = StyleSheet.create({
  infoText: {
    ...globalFontStyle(16, '300', appColors.Text).text,
    marginVertical: 2,
  },
  name: {
    ...globalFontStyle(20, '600', appColors.Text).text,
    marginBottom: 4,
  },
  infoContainer: {
    marginVertical: 10,
    borderRadius: 20,
    backgroundColor: appColors.LightBackGround,
    padding: 15,
  },
  infoDetails: {marginHorizontal: 15, flex: 1},
  tabText: {
    ...globalFontStyle(16, '400', appColors.Primary).text,
    marginStart: 20,
  },
  circle: {
    borderRadius: 999, // Use a large value to make a perfect circle
    alignItems: 'center',
    justifyContent: 'center',
    height: scaleHeight(100),
    aspectRatio: 1 / 1,
    backgroundColor: appColors.Secondary,
    alignSelf: 'center',
  },
  loginText: {
    ...globalFontStyle(20, '600', appColors.Text).centerText,
    margin: scaleHeight(20),
    backgroundColor: appColors.LightPrimary,
    width: '50%',
    alignSelf: 'center',
    borderRadius: 10,
    overflow: 'hidden',
    padding: scaleHeight(15),
    textAlign: 'center',
    color: appColors.TextPrimary,
  },
});
