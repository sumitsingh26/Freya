import {
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  TouchableOpacity,
  StatusBar,
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
import AppKeyBoardAvoidingView from '../../components/AppKeyBoardAvoidingView';
import AppNavBar from '../../components/AppNavBar';
import {
  appColors,
  tmpBotoxData,
  tmpFilterData,
  tmpImageSliderData,
  tmpLaserIPLData,
  tmpNearYouData,
} from '../../utils/constant';
import AppFilterView from '../../components/AppFilterView';
import {scaleHeight, scaleSize} from '../../utils/screenUtils';
import AppBottomSheetContent from '../../components/AppBottomSheetContent';
import {globalStyle} from '../../utils/styles';
const _ = require('lodash');
import Icon from 'react-native-vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';


const Home = () => {
  const {t} = useTranslation();
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const {loading} = useSelector(state => state.home);

  const bottomSheetRef = useRef();

  const openFilterView = () => {
    bottomSheetRef.current?.open();
  };

  const closeFilterView = () => {
    bottomSheetRef.current?.close();
  };

  useEffect(() => {
    // dispatch(fetchGetHomeApiData());
  }, [dispatch]);

  return (
    <View style={globalStyle.screenContainer}>
      {loading === LoadingType.pending ? <AppLoader openModal={true} /> : null}
      <AppNavBar  searchIncluded={true}/>
      <AppKeyBoardAvoidingView>
        <ScrollView>
          <View style={styles.titleContainer}>
            <Text style={styles.titleTextContainer} numberOfLines={1}>
              {t('discover_our_clinics')}
            </Text>
           
                 <Icon
              color={ appColors.TextPrimary}
              name={'location'}
              size={20}
                style={[globalStyle.round , {marginHorizontal : 5}]}
                onPress={openFilterView}
              />

              <Icon
              color={ appColors.TextPrimary}
              name={'options-outline'}
              size={20}
                style={globalStyle.round}
                onPress={openFilterView}
              />
          </View>
          <View
            style={{ marginHorizontal: scaleSize(15) , marginBottom : -20 }}
          >
            <AppImageSlider slides={tmpImageSliderData} showPagination={true} />
          </View>
          <AppBotoxListView
            name={`${t('best_botox_around')} 💉`}
            data={_.shuffle(tmpNearYouData)}
          />
          <AppBotoxListView
            name={`${t('whats_new_near_you')} ✨`}
            data={_.shuffle(tmpNearYouData)}
            isNearMeBotox={true}
          />
          <AppBotoxListView
            name={`✨ ${t('filler_favourites')} 💉`}
            data={_.shuffle(tmpNearYouData)}
          />
          <AppBotoxListView
            name={`${t('laser_hair_removal')}`}
           data={_.shuffle(tmpNearYouData)}
            iconSource={imagepath.laserIcon}
          />
        </ScrollView>
      </AppKeyBoardAvoidingView>
      <AppBottomSheetContent ref={bottomSheetRef}>
        <AppFilterView onClose={closeFilterView} />
      </AppBottomSheetContent>
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
    marginHorizontal: 15,
  },
  titleTextContainer: {
    fontWeight: '600',
    fontFamily: 'Poppins-Bold',
    fontSize: 24,
    color: '#607274',
    flex : 1
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
