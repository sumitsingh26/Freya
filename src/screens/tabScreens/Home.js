import {
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import imagepath from '../../images/Images';
import {ScrollView} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
import AppImageSlider from '../../components/AppImageSlider';
import {useDispatch, useSelector} from 'react-redux';
import AppLoader from '../../components/AppLoader';
import {LoadingType} from '../../services/api/constant';
import AppBotoxListView from '../../components/AppBotoxListView';
import CustomKeyBoardAvoidingView from '../../components/CustomKeyBoardAvoidingView';
import CustomNavBar from '../../components/CustomNavBar';

const Home = () => {
  const {t} = useTranslation();
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const {loading} = useSelector(state => state.home);

  useEffect(() => {
    // dispatch(fetchGetHomeApiData());
  }, [dispatch]);

  const images = [
    {
      id: '1',
      image: imagepath.sliderImage,
    },
    {
      id: '2',
      image: imagepath.bestBotoxImage,
    },
  ];
  const bestBotox = [
    {
      id: '1',
      image: imagepath.bestBotoxImage,
      clinic_name: 'Story',
      clients: '1000+',
      reviewTxt: '121',
      rating: '5.0',
    },
    {
      id: '2',
      image: imagepath.fillerImage,
      clinic_name: 'Sisu Clinic',
      clients: '1000+',
      reviewTxt: '121',
      rating: '5.0',
    },
    {
      id: '3',
      image: imagepath.newNearImage,
      clinic_name: 'SMR \n Aesthetics',
      clients: '1000+',
      reviewTxt: '121',
      rating: '5.0',
    },
  ];
  const newNearYou = [
    {
      id: '1',
      image: imagepath.newNearImage,
      clinic_name: 'SMR\nAesthetics',
      clients: '1000+',
      reviewTxt: '121',
      rating: '5.0',
    },
    {
      id: '2',
      image: imagepath.bestBotoxImage,
      clinic_name: 'Story',
      clients: '1000+',
      reviewTxt: '121',
      rating: '5.0',
    },
    {
      id: '3',
      image: imagepath.newNearImage,
      clinic_name: 'SMR \n Aesthetics',
      clients: '1000+',
      reviewTxt: '121',
      rating: '5.0',
    },
  ];
  const fillerFav = [
    {
      id: '1',
      image: imagepath.fillerImage,
      clinic_name: 'Sisu Clinic',
      clients: '1000+',
      reviewTxt: '121',
      rating: '5.0',
    },
    {
      id: '2',
      image: imagepath.laserImage,
      clinic_name: 'Copenhagen\nCosmetics',
      clients: '1000+',
      reviewTxt: '121',
      rating: '5.0',
    },
    {
      id: '3',
      image: imagepath.newNearImage,
      clinic_name: 'SMR \n Aesthetics',
      clients: '1000+',
      reviewTxt: '121',
      rating: '5.0',
    },
  ];
  const laserHair = [
    {
      id: '1',
      image: imagepath.laserImage,
      clinic_name: 'Copenhagen\nCosmetics',
      clients: '1000+',
      reviewTxt: '121',
      rating: '5.0',
    },
    {
      id: '2',
      image: imagepath.bestBotoxImage,
      clinic_name: 'Story',
      clients: '1000+',
      reviewTxt: '121',
      rating: '5.0',
    },
    {
      id: '3',
      image: imagepath.newNearImage,
      clinic_name: 'SMR \n Aesthetics',
      clients: '1000+',
      reviewTxt: '121',
      rating: '5.0',
    },
  ];

  return (
    <View style={styles.rootContainer}>
      {loading === LoadingType.pending ? <AppLoader openModal={true} /> : null}
      <CustomNavBar isFirstScreen={true} />
      <CustomKeyBoardAvoidingView>
        <ScrollView>
          <View style={styles.titleContainer}>
            <Text style={styles.titleTextContainer}>
              {t('discover_our_clinics')}
            </Text>
            <View
              style={{
                width: '25%',
                flexDirection: 'row',
                justifyContent: 'flex-end',
                marginTop: 10,
              }}>
              <View style={{marginRight: 10}}>
                <Image
                  style={{width: 32, height: 32, resizeMode: 'cover'}}
                  source={imagepath.bgRound}
                />
                <Image
                  style={{
                    width: 13.21,
                    height: 16.94,
                    position: 'absolute',
                    marginLeft: 9,
                    marginTop: 4,
                  }}
                  source={imagepath.locationWhiteIcon}
                />
              </View>

              <View>
                <Image
                  style={{width: 32, height: 32, resizeMode: 'cover'}}
                  source={imagepath.bgRound}
                />
                <Image
                  style={{
                    width: 13.21,
                    height: 16.94,
                    position: 'absolute',
                    marginLeft: 9,
                    marginTop: 4,
                  }}
                  source={imagepath.filterIcon}
                />
              </View>
            </View>
          </View>

          <AppImageSlider slides={images} />
          <AppBotoxListView
            name={`${t('best_botox_around')} 💉`}
            data={bestBotox}
          />
          <AppBotoxListView
            name={`${t('whats_new_near_you')} ✨`}
            data={newNearYou}
            isNearMeBotox={true}
            onPress={() => navigation.navigate('ClinicsDetailsScreen')}
          />
          <AppBotoxListView
            name={`✨ ${t('filler_favourites')} 💉`}
            data={fillerFav}
          />
          <AppBotoxListView
            name={`${t('laser_hair_removal')}`}
            data={laserHair}
            iconSource={imagepath.laserIcon}
          />
        </ScrollView>
      </CustomKeyBoardAvoidingView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  searchContainer: {
    width: 310,
    height: 50,
    backgroundColor: '#607274',
    borderRadius: 40,
  },
  searchTextContainer: {
    width: '50%',
    fontWeight: '300',
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: 'white',
    marginTop: 5,
  },
  titleContainer: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
    marginLeft: 15,
  },
  titleTextContainer: {
    width: 240,
    fontWeight: '600',
    fontFamily: 'Poppins-Bold',
    fontSize: 24,
    color: '#607274',
    marginLeft: 10,
  },

  image: {
    width: Dimensions.get('window').width,
    height: 200, // Adjust the height as needed
  },
  pagination: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 10,
    alignSelf: 'center',
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'white',
    margin: 5,
  },

  bestBotoxFlat: {
    borderRadius: 20,
    resizeMode: 'center',
  },
  mapContainer: {
    height: 250,
    marginTop: 20,
    marginBottom: 20,
  },
});
