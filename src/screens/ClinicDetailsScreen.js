import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import AppNavBar from '../components/AppNavBar';
import AppImageSlider from '../components/AppImageSlider';
import {
  appColors,
  appScreens,
  tmpBotoxData,
  tmpContactData,
  tmpFilterSelectData,
  tmpImageSliderData,
  tmpLaserIPLData,
  tmpSocialData,
} from '../utils/constant';
import {globalStyle} from '../utils/styles';
import imagepath from '../images/Images';
import {useTranslation} from 'react-i18next';
import {
  deviceWidth,
  scaleFontSize,
  scaleHeight,
  scaleSize,
} from '../utils/screenUtils';
import AppPrimarySelectionView from '../components/AppPrimarySelectionView';
import Icon from 'react-native-vector-icons/FontAwesome';
import {TouchableOpacity} from 'react-native-gesture-handler';
import AppButton, {AppExtraButtons} from '../components/AppButton';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

export const TitleView = ({children}) => {
  return (
    <View style={{flexDirection: 'row', marginVertical: 10}}>
      <View style={{marginRight: 20}}>{children}</View>
      <View
        style={{
          height: 0.5,
          backgroundColor: appColors.Primary,
          alignSelf: 'center',
          flex: 1,
          justifyContent: 'flex-end',
        }}></View>
    </View>
  );
};

export const ListItem = ({item}) => {
  return (
    <View style={contactStyle.item}>
      <View style={contactStyle.iconContainer}>
        <Icon name={item.icon} size={20} color={appColors.Secondary} />
      </View>
      {/* <View style={contactStyle.textContainer}> */}
      <Text style={contactStyle.name}>{item.name}</Text>
      <Text style={contactStyle.email}>{item.email}</Text>
      {/* </View> */}
    </View>
  );
};

const ClinicDetailsScreen = () => {
  const {t} = useTranslation();
  const navigation = useNavigation();
  const {user} = useSelector(state => state.auth);
  const renderAvailabilityView = () => {
    return (
      <View style={availabilityStyle.container}>
        <Text style={availabilityStyle.title}>Availability</Text>
        <Text style={availabilityStyle.text}>Mon-Fri : 8:00 am- 5:00 pm</Text>
        <Text style={availabilityStyle.text}>Sat-Sunday : Closed</Text>
      </View>
    );
  };

  const renderAboutView = () => {
    return (
      <View>
        <TitleView>
          <Text style={availabilityStyle.title}>
            About{' '}
            <Text style={{color: appColors.Primary}}>Clinic De Hapiness</Text>
          </Text>
        </TitleView>
        <Text style={aboutStyle.text}>
          Your hair is an essential part of your identity and self-confidence.
          From nourishing hair masks to cutting-edge hair PCR treatments for
          personalized care, our team of experts is dedicated to helping you
          achieve the luscious, healthy hair you've always dreamed of. Your
          journey to gorgeous, vibrant hair begins here!
        </Text>
      </View>
    );
  };

  const renderServiceView = () => {
    return (
      <View style={{marginTop: 10}}>
        <TitleView>
          <Text style={availabilityStyle.title}>Our Services/Treatments</Text>
        </TitleView>
        <AppPrimarySelectionView
          data={tmpBotoxData}
          onChangeValue={value => console.log(value)}
          title={'Botox (10)'}
        />
        <AppPrimarySelectionView
          data={tmpFilterSelectData}
          onChangeValue={value => console.log(value)}
          title={'Filler'}
        />
        <AppPrimarySelectionView
          data={tmpLaserIPLData}
          onChangeValue={value => console.log(value)}
          title={'Laser/IPL'}
        />
      </View>
    );
  };

  const renderLocationView = () => {
    return (
      <View style={{marginTop: 10}}>
        <TitleView>
          <Text style={availabilityStyle.title}>Our Location</Text>
        </TitleView>
        <Text style={aboutStyle.text}>
          Nørre Farimagsgade 41, 1364 København
        </Text>
        <Image style={locationStyle.map} source={imagepath.googleMapImage} />
      </View>
    );
  };

  const renderChargesView = () => {
    return (
      <View style={{marginTop: 10}}>
        <TitleView>
          <Text style={availabilityStyle.title}>Our Charges</Text>
        </TitleView>
        <Text style={aboutStyle.text}>
          ** Please get in touch for pricing and customized services
        </Text>
      </View>
    );
  };

  const renderContactView = () => {
    return (
      <View style={{marginTop: 10}}>
        <TitleView>
          <Text style={availabilityStyle.title}>Contact Us</Text>
        </TitleView>
        <FlatList
          data={tmpContactData}
          renderItem={({item}) => <ListItem item={item} />}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.container}
          numColumns={1} // Change to 3 for three items in a row
        />
      </View>
    );
  };

  const renderJoinView = () => {
    return (
      <View style={{marginTop: 10}}>
        <TitleView>
          <Text style={availabilityStyle.title}>Join Us</Text>
        </TitleView>
        <View style={joinStyle.container}>
          {tmpSocialData.map((social, index) => (
            <TouchableOpacity
              key={index}
              style={[
                joinStyle.button,
                {backgroundColor: appColors.Secondary},
              ]}>
              <Icon
                name={social.icon}
                size={30}
                color="white"
                style={joinStyle.icon}
              />
            </TouchableOpacity>
          ))}
        </View>
      </View>
    );
  };

  const handleBookAppointmentBtn = () => {
    if (user) {
      navigation.navigate(appScreens.bookingAppointment);
    } else {
    }
    // user
    //   ? navigation.navigate(appScreens.bookingAppointment)
    //   : navigation.navigate(appScreens.signupMethod);
  };

  return (
    <View style={globalStyle.screenContainer}>
      <AppNavBar />
      <ScrollView scrollEnabled={true} style={{}}>
        <View style={{marginHorizontal: scaleHeight(15)}}>
          <AppImageSlider
            slides={tmpImageSliderData}
            extraButtons={[
              {
                name: 'SAVE',
                icon: 'heart-o',
                filledIcon: 'heart',
                filledColor: 'red',
              },
              {name: 'SHARE', icon: 'share-alt'},
            ]}
          />
        </View>

        <View style={{marginHorizontal: 20}}>
          <View style={styles.titleView}>
            <Text style={styles.title}>Story</Text>
            <View
              style={{
                flexDirection: 'row',
                alignSelf: 'center',
              }}>
              <Image
                style={{width: 14, height: 13, marginTop: 3}}
                source={imagepath.ratingNormalStarImage}
              />
              <Text style={[styles.titleRating, {fontWeight: '500'}]}>5.0</Text>
              <Text style={styles.titleRating}>(121 {t('reviews')})</Text>
            </View>
          </View>
          {renderAvailabilityView()}
          {renderAboutView()}
          {renderServiceView()}
          {renderLocationView()}
          {renderChargesView()}
          {renderContactView()}
          {renderJoinView()}
          <AppButton
            primary
            title="Book Appointment"
            click={() => handleBookAppointmentBtn()}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default ClinicDetailsScreen;

const styles = StyleSheet.create({
  titleView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontWeight: '700',
    fontFamily: 'Poppins',
    fontSize: scaleFontSize(18),
    color: '#17202A',
  },
  titleRating: {
    fontWeight: '300',
    fontSize: scaleFontSize(14),
    color: '#17202A',
  },
});

const availabilityStyle = StyleSheet.create({
  container: {
    margin: scaleSize(20),
    backgroundColor: appColors.LightBackGround,
    padding: scaleSize(10),
  },
  title: {
    fontWeight: '500',
    fontFamily: 'Poppins',
    fontSize: scaleFontSize(17),
    color: '#17202A',
    paddingBottom: 5,
  },
  text: {
    fontWeight: '400',
    fontFamily: 'Poppins',
    fontSize: scaleFontSize(16),
    color: appColors.SilverFoil,
  },
});

const aboutStyle = StyleSheet.create({
  text: {
    fontWeight: '300',
    fontSize: scaleFontSize(14),
    color: appColors.Text,
  },
});

const locationStyle = StyleSheet.create({
  map: {
    height: scaleHeight(157),
    width: '100%',
    marginVertical: 10,
  },
});

const contactStyle = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    flex: 1,
  },
  textContainer: {
    marginLeft: 12,
  },
  name: {
    fontWeight: '300',
    fontSize: scaleFontSize(14),
    color: '#17202A',
    flex: 1,
    marginHorizontal: 10,
  },
  email: {
    flex: 2,
    fontWeight: '300',
    fontSize: scaleFontSize(14),
    color: '#17202A',
    textAlign: 'right',
  },
  iconContainer: {
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const joinStyle = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 8,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
});
