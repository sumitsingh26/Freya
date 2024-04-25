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
import React from 'react';
import imagepath from '../images/Images';
import {ScrollView} from 'react-native-gesture-handler';
import ClinicDetailsCard from './cardScreens/ClinicDetailsCard';
import {useNavigation} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';

const ClinicsDetailsScreen = () => {
  const {t} = useTranslation();
  const navigation = useNavigation();
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
  return (
    <SafeAreaView style={{flex: 1}}>
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
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('MyProfile');
            }}>
            <Image
              style={{width: 40, height: 40, marginRight: 25}}
              source={imagepath.profileImage}
              marginLeft={true}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.searchContainer}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              style={{width: 17, height: 17}}
              source={imagepath.searchIcon}
            />
            <TextInput
              placeholder={t('search')}
              placeholderTextColor={'white'}
              style={styles.searchTextContainer}
            />
          </View>
        </View>
        {/* <ScrollView style={{marginTop: 10}}> */}
        <View style={styles.titleContainer}>
          <Text style={styles.titleTextContainer}>
            {t('whats_new_near_you')}✨
          </Text>
          <View
            style={{
              width: '25%',
              flexDirection: 'row',
              justifyContent: 'flex-end',
              marginTop: 10,
            }}>
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
        <FlatList
          style={{marginTop: 20}}
          keyExtractor={index => {
            return index.id;
          }}
          data={clinicList}
          renderItem={renderItem}></FlatList>
        {/* </ScrollView> */}
      </View>
    </SafeAreaView>
  );
};

export default ClinicsDetailsScreen;

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
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
    marginLeft: 15,
  },
  titleTextContainer: {
    width: 240,
    fontWeight: '700',
    fontFamily: 'Poppins-Regular',
    fontSize: 24,
    color: '#607274',
    marginLeft: 10,
  },
});
