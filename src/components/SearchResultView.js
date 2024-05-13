import React from 'react';
import {FlatList, Image, StyleSheet} from 'react-native';
import {View, Text} from 'react-native';
import imagepath from '../images/Images';
import {scaleFontSize} from '../utils/screenUtils';
import {appColors} from '../utils/constant';
import {ScrollView} from 'react-native-gesture-handler';

const renderSearchItemView = ({item}) => {
  return (
    <View style={styles.resultItem}>
      <Image source={imagepath.bestBotoxImage} style={styles.img} />
      <Text style={styles.text} numberOfLines={2}>
        {item}
      </Text>
      <View style={styles.ratingView}>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.values}>5.0</Text>
          <Image
            style={{width: 11, height: 11, marginLeft: 5}}
            source={imagepath.ratingStarImage}
          />
        </View>
        <Text style={styles.values}>121 Reviews</Text>
      </View>
    </View>
  );
};

const SearchResultView = ({results}) => {
  return (
    <ScrollView>
      <FlatList
        scrollEnabled={false}
        data={results}
        renderItem={item => renderSearchItemView(item)}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={{flex: 1}}
      />
    </ScrollView>
  );
};

export default SearchResultView;

const styles = StyleSheet.create({
  resultItem: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
  },
  img: {
    flex: 1,
    aspectRatio: 1 / 1,
    alignSelf: 'center',
  },
  text: {
    flex: 2,
    alignSelf: 'center',
    color: appColors.Primary,
    fontWeight: 100,
    fontSize: scaleFontSize(14),
    marginHorizontal: 10,
  },
  ratingView: {
    flex: 1,
    alignSelf: 'center',
  },
  values: {
    color: appColors.Primary,
    fontWeight: 400,
    fontSize: scaleFontSize(10),
  },
});
