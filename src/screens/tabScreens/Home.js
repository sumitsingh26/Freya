import { Image, StyleSheet, Text, View, Dimensions, FlatList, TextInput, Animated, TouchableOpacity, SafeAreaView } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
import imagepath from '../../images/Images'
import HomeBestBotoxCard from '../cardScreens/HomeBestBotoxCard'
import { ScrollView } from 'react-native-gesture-handler'
import HomeNewNearYouCard from '../cardScreens/HomeNewNearYouCard'
import HomeFillerFav from '../cardScreens/HomeFillerFav'
import HomeLaserHair from '../cardScreens/HomeLaserHair'
import { useNavigation } from '@react-navigation/native'

import '../../services/i18n';
import { useTranslation } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage'




const Home = () => {
  const {t, i18n} = useTranslation(); 
  
  const [currentLanguage,setLanguage] = useState('en');

  const storeData = async ( lang ) => {
    try {
      await AsyncStorage.setItem('myKey', lang);
      changeLanguage();
      console.log('Data stored successfully!');
    } catch (error) {
      console.log('Error storing data:', error);
    }
  };

  const changeLanguage = async () => { 
    const data = await AsyncStorage.getItem("myKey")
    console.log("Key :" +data);
    
    i18n 
      .changeLanguage(data) 
      .then(() => setLanguage(data)) 
      .catch(err => console.log(err)); 

  }; 

  useEffect(() => {
    const fetchLanguage = async () => {
      try {
        const language = await AsyncStorage.getItem('myKey');
        if (language) {
          // setLanguage(language);
          i18n 
          .changeLanguage(language) 
          .then(() => setLanguage(language)) 
          .catch(err => console.log(err)); 
        }
      } catch (error) {
        console.error('Error fetching language:', error);
      }
    };

    fetchLanguage();
    storeData('en');
  }, []);
 

  const screenWidth = Dimensions.get('window').width;
  const navigation = useNavigation();
  const images = [
    {
      id: "1",
      image: imagepath.sliderImage,
    },
    {
      id: "2",
      image: imagepath.sliderImage,
    }
  ];

  const bestBotox = [
    {
      id: "1",
      image: imagepath.bestBotoxImage,
      clinic_name: "Story",
      clients: "1000+",
      reviewTxt: "121",
      rating: "5.0"

    },
    {
      id: "2",
      image: imagepath.fillerImage,
      clinic_name: "Sisu Clinic",
      clients: "1000+",
      reviewTxt: "121",
      rating: "5.0"
    },
    {
      id: "3",
      image: imagepath.newNearImage,
      clinic_name: "SMR \n Aesthetics",
      clients: "1000+",
      reviewTxt: "121",
      rating: "5.0"
    }
  ];

  const newNearYou = [
    {
      id: "1",
      image: imagepath.newNearImage,
      clinic_name: "SMR\nAesthetics",
      clients: "1000+",
      reviewTxt: "121",
      rating: "5.0"

    },
    {
      id: "2",
      image: imagepath.bestBotoxImage,
      clinic_name: "Story",
      clients: "1000+",
      reviewTxt: "121",
      rating: "5.0"
    },
    {
      id: "3",
      image: imagepath.newNearImage,
      clinic_name: "SMR \n Aesthetics",
      clients: "1000+",
      reviewTxt: "121",
      rating: "5.0"
    }
  ];
  const fillerFav = [
    {
      id: "1",
      image: imagepath.fillerImage,
      clinic_name: "Sisu Clinic",
      clients: "1000+",
      reviewTxt: "121",
      rating: "5.0"

    },
    {
      id: "2",
      image: imagepath.laserImage,
      clinic_name: "Copenhagen\nCosmetics",
      clients: "1000+",
      reviewTxt: "121",
      rating: "5.0"
    },
    {
      id: "3",
      image: imagepath.newNearImage,
      clinic_name: "SMR \n Aesthetics",
      clients: "1000+",
      reviewTxt: "121",
      rating: "5.0"
    }
  ];
  const laserHair = [
    {
      id: "1",
      image: imagepath.laserImage,
      clinic_name: "Copenhagen\nCosmetics",
      clients: "1000+",
      reviewTxt: "121",
      rating: "5.0"

    },
    {
      id: "2",
      image: imagepath.bestBotoxImage,
      clinic_name: "Story",
      clients: "1000+",
      reviewTxt: "121",
      rating: "5.0"
    },
    {
      id: "3",
      image: imagepath.newNearImage,
      clinic_name: "SMR \n Aesthetics",
      clients: "1000+",
      reviewTxt: "121",
      rating: "5.0"
    }
  ];
  const renderItem = ({ item }) => <HomeBestBotoxCard item={item} />
  const renderItemNewNear = ({ item }) => <HomeNewNearYouCard item={item} />
  const renderFillerFav = ({ item }) => <HomeFillerFav item={item} />
  const renderLaserHair = ({ item }) => <HomeLaserHair item={item} />
  const [currentIndex, setCurrentIndex] = useState(0);
  const animatedScroll = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Adjust interval as needed

    return () => clearInterval(interval);
  }, []);

  const handleSnapTo = (index) => {
    Animated.spring(animatedScroll, {
      toValue: index * screenWidth,
      useNativeDriver: true,
    }).start();
  };
  return (
    <View style={styles.rootContainer}>
      <SafeAreaView>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 39, alignItems: 'center', marginHorizontal: 15 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center ' }}>
          <View style={[styles.searchContainer, {justifyContent: 'center'}]}>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', }}>
              <Image style={{ width: 17, height: 17, marginLeft: 100 }} source={imagepath.searchIcon} />
              <TextInput placeholder={t('search')} placeholderTextColor={"white"} style={styles.searchTextContainer} />
            </View>
          </View>
        </View>
        <TouchableOpacity onPress={() => {
          navigation.navigate('MyProfile');
        }}>
          <Image style={{ width: 40, height: 40}} source={imagepath.profileImage} marginLeft={true} />

        </TouchableOpacity>

      </View>


      <ScrollView style={{ marginTop: 10 }}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleTextContainer}>{t('discover_our_clinics')}</Text>
          <View style={{ width: "25%", flexDirection: 'row', justifyContent: 'flex-end', marginTop: 10 }}>
            <View style={{ marginRight: 10 }}>
              <Image style={{ width: 32, height: 32, resizeMode: 'cover' }} source={imagepath.bgRound} />
              <Image style={{ width: 13.21, height: 16.94, position: 'absolute', marginLeft: 9, marginTop: 4 }} source={imagepath.locationWhiteIcon} />
            </View>

            <View>
              <Image style={{ width: 32, height: 32, resizeMode: 'cover' }} source={imagepath.bgRound} />
              <Image style={{ width: 13.21, height: 16.94, position: 'absolute', marginLeft: 9, marginTop: 4 }} source={imagepath.filterIcon} />
            </View>
          </View>

        </View>

        <View style={{ marginTop: 30, marginHorizontal: 15 }}>
          <FlatList
            horizontal
            data={images}
            renderItem={({ item, index }) => (
              <View>
                <Image
                  style={{ width: screenWidth, height: 200, borderRadius: 40, resizeMode: 'center' }}
                  source={item.image}
                />
              </View>

            )}
            keyExtractor={(item) => item.id} // Ensure unique keys
            scrollPosition={currentIndex * screenWidth} // Set initial scroll position
            decelerationRate={0} // No momentum scrolling
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onScrollAnimated={animatedScroll}
            snapToInterval={screenWidth}
            snapToAlignment="center"
            onMomentumScrollEnd={(event) => {
              setCurrentIndex(Math.round(event.nativeEvent.contentOffset.x / screenWidth));
            }}
          />
        </View>
        <View style={{ flexDirection: 'column', marginHorizontal: 15 }}>
          <Text style={{
            fontWeight: "600",
            fontFamily: "Poppins-Bold",
            fontSize: 18,
            color: "#607274",
            padding: 5,
            marginLeft: 10,
            marginTop: 10
          }}>{t('best_botox_around')} 💉</Text>

          <FlatList
            horizontal
            keyExtractor={(index) => {
              return index.id;
            }}
            data={bestBotox}
            renderItem={renderItem}
            showsHorizontalScrollIndicator={false}>
          </FlatList>
        </View>

        <View >
          <Image style={styles.mapContainer} source={imagepath.googleMapImage} />
          <View style={{ position: 'absolute', marginLeft: 20, marginTop: 20, flexDirection: 'column' }}>
            <Text style={{
              fontWeight: "600",
              fontFamily: "Poppins-Bold",
              fontSize: 18,
              color: "#607274",
              marginLeft: 14,
              marginTop: 10
            }}>{t('whats_new_near_you')} ✨</Text>
            <FlatList
              horizontal
              keyExtractor={(index) => {
                return index.id;
              }}
              data={newNearYou}
              renderItem={renderItemNewNear}
              showsHorizontalScrollIndicator={false}>
            </FlatList>
          </View>
        </View>
        <View style={{ flexDirection: 'column', marginHorizontal: 15 }}>
          <Text style={{
            fontWeight: "600",
            fontFamily: "Poppins-Bold",
            fontSize: 18,
            color: "#607274",
            padding: 5,
            marginTop: 10
          }}>✨{t('filler_favourites')}💉</Text>

          <FlatList
            horizontal
            keyExtractor={(index) => {
              return index.id;
            }}
            data={fillerFav}
            renderItem={renderFillerFav}
            showsHorizontalScrollIndicator={false}>
          </FlatList>
        </View>
        <View style={{ flexDirection: 'column', marginHorizontal: 15 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{
              fontWeight: "600",
              fontFamily: "Poppins-Bold",
              fontSize: 18,
              color: "#607274",
              padding: 5,
              marginTop: 10
            }}>{t('laser_hair_removal')}</Text>
            <Image style={{ width: 42, height: 22, marginTop: 8 }} source={imagepath.laserIcon} />
          </View>


          <FlatList
            horizontal
            keyExtractor={(index) => {
              return index.id;
            }}
            data={laserHair}
            renderItem={renderLaserHair}
            showsHorizontalScrollIndicator={false}>
          </FlatList>
        </View>
      </ScrollView>
      </SafeAreaView>

    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1
  },
  searchContainer: {
    width: 310,
    height: 50,
    backgroundColor: "#607274",
    borderRadius: 40,

  },
  searchTextContainer: {
    width: "50%",
    fontWeight: "300",
    fontFamily: "Poppins-Regular",
    fontSize: 16,
    color: "white",
    marginTop: 5,
    
  },
  titleContainer: {
    flexDirection: 'row',
    width: "100%",
    alignItems: 'center',
    marginTop: 20,
    marginLeft: 15
  },
  titleTextContainer: {
    width: 240,
    fontWeight: "600",
    fontFamily: "Poppins-Bold",
    fontSize: 24,
    color: "#607274",
    marginLeft: 10
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
    resizeMode: 'center'
  },
  mapContainer: {
    height: 250,
    marginTop: 20,
    marginBottom: 20,

  }
})