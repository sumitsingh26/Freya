import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import React, {useRef} from 'react';
import imagepath from '../images/Images';
import {ScrollView} from 'react-native-gesture-handler';
import ClinicDetailsCard from './cardScreens/ClinicDetailsCard';
import {useNavigation} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
import AppNavBar from '../components/AppNavBar';
import AppSearchBar from '../components/AppSearchBar';
import {globalFontStyle, globalStyle} from '../utils/styles';
import {appColors} from '../utils/constant';
import AppBottomSheetContent from '../components/AppBottomSheetContent';
import AppFilterView from '../components/AppFilterView';
import Icon from 'react-native-vector-icons/Ionicons';

const ViewAllClinics = () => {
  const {t} = useTranslation();
  const navigation = useNavigation();
  const bottomSheetRef = useRef();
  const clinicList = [
    {
      id: '1',
      image: imagepath.laserImage,
      clinic_name: 'Copenhagen Cosmetics',
      clients: '1000+',
      reviewTxt: '121',
      rating: '5.0',
      location: 'Vognmagergade 23 A54',
      km: '1.8 KM',
    },
    {
      id: '2',
      image: imagepath.bestBotoxImage,
      clinic_name: 'Story',
      clients: '1000+',
      reviewTxt: '121',
      rating: '5.0',
      location: 'Vognmagergade 23 A54',
      km: '2.0 KM',
    },
    {
      id: '3',
      image: imagepath.newNearImage,
      clinic_name: 'SMR Aesthetics',
      clients: '1000+',
      reviewTxt: '121',
      rating: '5.0',
      location: 'Vognmagergade 23 A54',
      km: '10.0 KM',
    },
  ];
  const renderItem = ({item}) => <ClinicDetailsCard item={item} />;
  const openFilterView = () => {
    console.log('tapped...');
    bottomSheetRef.current?.open();
  };

  const closeFilterView = () => {
    bottomSheetRef.current?.close();
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <AppNavBar />
      <ScrollView
        style={{marginHorizontal: 20}}
        showsVerticalScrollIndicator={false}>
        <AppSearchBar />
        <View style={styles.titleContainer}>
          <Text style={styles.titleTextContainer} numberOfLines={1}>
            {t('whats_new_near_you')}✨
          </Text>

            {/* <TouchableOpacity onPress={() => openFilterView()}>
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
            </TouchableOpacity> */}
            <Icon
              color={ appColors.TextPrimary}
              name={'options-outline'}
              size={20}
              style={globalStyle.round}
            />
        </View>
        <FlatList
          scrollEnabled={false}
          keyExtractor={index => {
            return index.id;
          }}
          data={clinicList}
          renderItem={renderItem}></FlatList>
      </ScrollView>
      <AppBottomSheetContent ref={bottomSheetRef}>
        <AppFilterView onClose={closeFilterView} />
      </AppBottomSheetContent>
    </SafeAreaView>
  );
};

export default ViewAllClinics;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  searchContainer: {
    width: '90%',
    height: 50,
    backgroundColor: '#607274',
    marginTop: 20,
    borderRadius: 40,
    marginLeft: 15,
    justifyContent: 'center',
  },
  searchTextContainer: {
    width: '24%',
    fontWeight: '300',
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: 'white',
    marginTop: 5,
  },
  titleContainer: {
    flex : 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  titleTextContainer: {
    flex: 1,
    ...globalFontStyle(24, '700', appColors.Primary).text,
  },
  icon: {

  }
});
