// FilterView.tsx
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import AppTagListView from './AppTagListView';
import { appColors, tmpFilterData, tmpPriceData, tmpShortByData } from '../utils/constant';
import { globalStyle } from '../utils/styles';
import { scaleFontSize } from '../utils/screenUtils';

const AppFilterView = ({ onClose }) => {
  return (
    <View style={{ flex: 1, paddingVertical: 10 }}>
      <Text style={style.title}>Filter:</Text>
      <AppTagListView tags={tmpFilterData} />
      <View style={globalStyle.dividerStyle} />
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <Text style={style.text}>PRICE</Text>
        <AppTagListView tags={tmpPriceData} singleLine />
      </View>
      <View style={globalStyle.dividerStyle} />
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <Text style={style.text}>SORT BY</Text>
        <AppTagListView tags={tmpShortByData} singleLine />
      </View>
      <Button title="Close" onPress={onClose} />
    </View>
  );
};

export default AppFilterView;
const style = StyleSheet.create({
  title: {
    fontWeight: '600',
    fontSize: scaleFontSize(25),
    lineHeight: 37.5,
    color: appColors.Primary,
  },
  text: {
    fontWeight: '600',
    fontSize: scaleFontSize(16),
    lineHeight: 24,
    color: appColors.Primary,
    flex: 0.4
  }
})

