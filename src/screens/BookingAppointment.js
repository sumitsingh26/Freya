import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import imagepath from '../images/Images';
import {ScrollView} from 'react-native-gesture-handler';
import {Dropdown} from 'react-native-element-dropdown';
import {useNavigation} from '@react-navigation/native';
import {appColors, appScreens, tmpImageSliderData} from '../utils/constant';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  IAppointment,
  IAvailableDates,
  TimeSlotPicker,
} from '@dgreasi/react-native-time-slot-picker';
import AppCornerRectangle from '../components/AppCornerRectangle';
import Moment from 'moment';
import {defaultFormat} from 'moment';
import {useTranslation} from 'react-i18next';
import AppButton, {AppExtraButtons} from '../components/AppButton';
import AppSelectionModal from '../components/AppSelectionModal';
import AppKeyBoardAvoidingView from '../components/AppKeyBoardAvoidingView';
import {globalFontStyle, globalStyle} from '../utils/styles';
import AppNavBar from '../components/AppNavBar';
import AppImageSlider from '../components/AppImageSlider';
import {
  deviceWidth,
  scaleFontSize,
  scaleHeight,
  scaleSize,
} from '../utils/screenUtils';
import {AppRatingTextView} from '../components/AppBotoxListView';
import AppBlurredOverlay from '../components/AppBlurredOverlay';
import LottieView from 'lottie-react-native';
import appLottie from '../images/lotties';
import ZigzagView from 'react-native-zigzag-view';
import DashedLine from '../components/DashLine';

const locations = [
  {label: 'Botox', value: '1'},
  {label: 'Hair Removal', value: '2'},
  {label: 'Filler', value: '3'},
];

const BookingAppointment = () => {
  const {t} = useTranslation();
  const navigation = useNavigation();
  const [treatmentValue, setTreatmentValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [description, setDescription] = useState(null);
  const [dateOfAppointment, setDateOfAppointment] = useState({
    appointmentDate: '',
    appointmentTime: '',
  });
  const [appointmentStatus, setAppointmentStatus] = useState('');

  const customCalenderView = () => {
    const style = calenderStyle;
    const calenderIcon = (
      <Icon name="calendar" size={22} color={appColors.SilverFoil} />
    );

    return (
      <View style={style.container}>
        <View style={style.titleContainer}>
          <View>
            <Text style={style.titleText}>{t('Date')}</Text>
            <Text style={style.subTitleText}>
              {t('These_are_our_available_dates')}
            </Text>
          </View>
          <View style={style.calenderIcon}>{calenderIcon}</View>
        </View>
        <TimeSlotPicker
          setDateOfAppointment={setDateOfAppointment}
          timeSlotsBackgroundColor={appColors.Secondary}
          mainColor={appColors.Secondary}
          datePickerBackgroundColor={'transparent'}
        />
        {selectedAppointmentDetails()}
      </View>
    );
  };

  const selectedAppointmentDetails = useCallback(() => {
    const appointmentDate = dateOfAppointment?.appointmentDate;
    const appointmentTime = dateOfAppointment?.appointmentTime;

    const style = calenderStyle;
    return (
      <View style={[style.titleContainer, {marginVertical: 20, flex: 1}]}>
        <View style={{flex: 1}}>
          <Text style={style.titleText}>{t('Your appointment')}</Text>
          <Text style={style.dateText}>
            {Moment(appointmentDate).format('DD dddd')}
          </Text>
          <Text style={style.dateText}>
            {Moment(appointmentDate).format('MMMM')}
          </Text>
          <Text style={style.timeText}>{appointmentTime}</Text>
        </View>

        <AppCornerRectangle content={Moment(appointmentDate).format('DD')} />
      </View>
    );
  }, [dateOfAppointment]);

  const renderSelectTreatment = () => {
    return (
      <View style={{marginVertical: scaleSize(10)}}>
        <Text style={[globalStyle.font18500]}>{t('Select Treatments')}</Text>
        <View style={{marginTop: 10}}>
          <AppSelectionModal
            data={locations}
            value={treatmentValue}
            placeholder={t('Select from our 70 different treatments')}
            shadow
            onChangeValue={item => {
              console.log({item});
              setTreatmentValue(item);
              setIsFocus(false);
            }}
          />
        </View>
      </View>
    );
  };

  const renderDescriptionView = () => {
    return (
      <View style={styles.container}>
        <Text style={[globalStyle.font18500, {color: appColors.Primary}]}>
          Brief your concern
        </Text>

        <TextInput
          style={styles.input}
          value={description}
          onChangeText={text => setDescription(text)}
          multiline={true}
        />
      </View>
    );
  };

  const renderHighLightedView = () => {
    return (
      <View style={highlightedStyle.container}>
        <View
          style={[
            globalStyle.rowCenterContent,
            {
              marginVertical: 10,
              backgroundColor: 'white',
            },
          ]}>
          <Image
            style={{
              width: scaleSize(50),
              height: scaleSize(50),
              marginLeft: 10,
            }}
            source={imagepath.awardImage}
          />
          <View style={{marginStart: 5 , flex : 1}}>
            <Text style={globalFontStyle(22, '600', '#17202A').text} numberOfLines={2}>
              10 {t('Years')} 
            </Text>
            <Text style={globalFontStyle(14, '400', '#7C7C7C').text}>
              {t('Experience')}
            </Text>
          </View>
        </View>
        <View
          style={{
            height: scaleHeight(63),
            backgroundColor: appColors.Primary,
          }}>
          <AppRatingTextView
            textStyle={globalFontStyle(14, '400', '#CCCCFF').text}
            numberStyle={globalFontStyle(20, '600', '#FFFFFF').text}
            item={{
              clients: '1000+',
              clinic_name: 'Copenhagen Cosmetics',
              id: '1',
              image: 31,
              rating: '5.0',
              reviewTxt: '121',
            }}
          />
        </View>
      </View>
    );
  };

  const handleConfirmButtonPress = () => {
    setAppointmentStatus('PENDING'); // Change state value when button is pressed
    setTimeout(() => {
      setAppointmentStatus('CONFIRM'); // Change state value back after 10 seconds
    }, 9000); // 10 seconds in milliseconds
  };

  const renderAppointmentPending = () => {
    return (
      <View style={{margin: 20, alignItems: 'center'}}>
        <Text
          style={[
            globalFontStyle(24, '700', '#FFFFFF').text,
            {textAlign: 'center', marginBottom: 15},
          ]}
          numberOfLines={2}>
          Your appointment has been sent
        </Text>
        <Text
          style={globalFontStyle(13, '400', '#FFFFFF').text}
          numberOfLines={2}>
          Story will confirm you booking shortly
        </Text>

        <Image
          source={imagepath.bestBotoxImage}
          style={{
            height: scaleHeight(161),
            width: scaleSize(281),
            borderRadius: scaleSize(15),
            marginVertical: 20,
          }}
        />
        <LottieView
          source={appLottie.done}
          autoPlay
          loop
          style={{width: scaleHeight(140), aspectRatio: 1 / 1}}
        />

        <Text
          style={[
            globalFontStyle(13, '400', '#FFFFFF').text,
            {textAlign: 'center', marginBottom: 15},
          ]}
          numberOfLines={4}>
          You can close this, we will notify you when the clinic has confirmed
          you appointment. You can find your appointment in your profile.
        </Text>
      </View>
    );
  };

  const renderAppointmentConfirm = () => {
    return (
      <View style={{margin: 20, alignItems: 'center'}}>
        <Text
          style={[
            globalFontStyle(24, '700', '#FFFFFF').text,
            {textAlign: 'center', marginBottom: 15},
          ]}
          numberOfLines={2}>
          Your booking is confirmed!
        </Text>
        <Text
          style={globalFontStyle(13, '400', '#FFFFFF').text}
          numberOfLines={2}>
          We have emailed you your booking details.
        </Text>
        <Image
          source={imagepath.bestBotoxImage}
          style={{
            height: scaleHeight(161),
            width: scaleSize(281),
            borderRadius: scaleSize(15),
            marginTop: 20,
          }}
        />
        <ZigzagView
          surfaceColor={appColors.Secondary}
          backgroundColor={'transparent'}
          top={false}>
          <View
            style={{
              justifyContent: 'center',
              paddingVertical: 30,
              backgroundColor: appColors.Secondary,
              width: scaleSize(175),
            }}>
            <View
              style={{
                alignContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={[
                  globalFontStyle(15, '600', '#FFFFFF').text,
                  {textAlign: 'center'},
                ]}>
                Appointment details
              </Text>
              <DashedLine
                width={deviceWidth * 0.4}
                height={1}
                color={appColors.TextPrimary}
              />
              <Text
                style={[
                  globalFontStyle(20, '400', '#FFFFFF').text,
                  {marginBottom: 15},
                ]}>
                Story Clinic
              </Text>
              <View style={{marginBottom: 15}}>
                <View style={{flexDirection: 'row'}}>
                  <Icon
                    name={'calendar'}
                    size={20}
                    color={appColors.TextPrimary}
                  />
                  <Text
                    style={[
                      globalFontStyle(16, '500', '#FFFFFF').text,
                      {
                        marginStart: 4,
                      },
                    ]}>
                    Oct 14
                  </Text>

                  <View style={{flexDirection: 'row', marginStart: 15}}>
                    <Icon
                      name={'clock-o'}
                      size={20}
                      color={appColors.TextPrimary}
                    />
                    <Text
                      style={[
                        globalFontStyle(16, '500', '#FFFFFF').text,
                        {
                          marginStart: 4,
                        },
                      ]}>
                      Oct 14
                    </Text>
                  </View>
                </View>
              </View>
              <Text style={globalFontStyle(16, '300', '#FFFFFF').text}>
                Treatment
              </Text>
              <Text style={globalFontStyle(16, '300', '#FFFFFF').text}>
                Lip Filler
              </Text>
            </View>
          </View>
        </ZigzagView>

        <AppButton
          primary
          title="Perfect!"
          style={{width: deviceWidth * 0.8}}
          click={() => navigation.navigate(appScreens.home)}
        />
      </View>
    );
  };

  return (
    <AppKeyBoardAvoidingView>
      {appointmentStatus == 'PENDING' && (
        <AppBlurredOverlay>{renderAppointmentPending()}</AppBlurredOverlay>
      )}
      {appointmentStatus == 'CONFIRM' && (
        <AppBlurredOverlay>{renderAppointmentConfirm()}</AppBlurredOverlay>
      )}
      <AppNavBar />
      <ScrollView style={globalStyle.screenContainer}>
        <AppImageSlider slides={tmpImageSliderData} />
        <View style={styles.titleContainer}>
          <Text style={[globalStyle.font18500, {color: appColors.Primary}]}>
            {t('Booking Appointment')}
          </Text>
          {renderHighLightedView()}
        </View>
        <View style={{marginHorizontal: 20}}>{renderSelectTreatment()}</View>
        {customCalenderView()}
        {renderDescriptionView()}
        <AppButton
          title="Confirm appointment"
          primary
          click={handleConfirmButtonPress}
        />
      </ScrollView>
    </AppKeyBoardAvoidingView>
  );
};

export default BookingAppointment;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  imageContainer: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    resizeMode: 'cover',
  },
  kmTxt: {
    width: 180,
    height: 130,
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    right: 7,
    elevation: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    flexDirection: 'row',
    marginTop: 25,
  },

  titleContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginStart: 20,
  },

  clientsTxt: {
    fontWeight: '400',
    fontFamily: 'Poppins-Regular',
    fontSize: 10,
    color: 'black',
  },
  clientValue: {
    fontWeight: '600',
    fontFamily: 'Poppins-Bold',
    fontSize: 12,
    color: 'white',
  },
  placeholderStyle: {
    fontSize: 16,
    color: '#607274',
  },
  selectedTextStyle: {
    fontSize: 16,
    color: '#607274',
  },
  container: {
    marginHorizontal: 20,
    marginBottom: 20,
  },
  input: {
    height: 100,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingTop: 10, // Add padding to the top for better spacing
    marginBottom: 50,
  },
  title: {
    color: '#17202A',
    fontWeight: '500',
    fontFamily: 'Poppins-Regular',
    fontSize: 18,
  },
});

const calenderStyle = StyleSheet.create({
  container: {
    // marginTop: 15,
    marginVertical: 15,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginBottom: 6,
  },
  title: {},
  titleText: {
    fontSize: 13,
    fontWeight: '600',
    lineHeight: 19.5,
    color: appColors.Primary,
  },
  subTitleText: {
    fontSize: 13,
    fontWeight: '300',
    lineHeight: 19.5,
    color: appColors.Primary,
  },
  calenderIcon: {
    justifyContent: 'center',
  },
  dateText: {
    fontSize: 32,
    fontWeight: '600',
    color: '#17202A',
  },
  timeText: {
    fontSize: 20,
    fontWeight: '300',
    color: '#17202A',
  },
});

const highlightedStyle = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'white',
    flex: 1,
    width: scaleSize(170),
    borderTopRightRadius: scaleSize(15),
    borderBottomStartRadius: scaleSize(15),
    right: 20,
    overflow: 'hidden',
    justifyContent: 'center',
  },
});
