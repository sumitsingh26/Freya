import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import imagepath from '../images/Images';

const CustomCornerRectangle = ({content }) => {
  return (
    <View style={{height: 138, width: 109}}>
      <Image
        source={imagepath.subtrack_rectangle}
        style={{height: '100%', width: '100%'}}
      />
      <Text
        style={{
          position: 'absolute',
          // alignSelf: 'center',
          // alignContent: 'center',
          textAlign: 'center',
          height: '100%',
          width: '100%',
          top: 40,
          fontSize: 53,
          fontWeight: '600',
        }}>
        {content}
      </Text>
      <Image
        source={imagepath.round_frame}
        style={{
          position: 'absolute',
          height: 11,
          width: 79,
          top: 11,
          alignSelf: 'center',
        }}
      />
      <Image
        source={imagepath.half_rectangle}
        style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
        }}
      />
    </View>
  );
};

export default CustomCornerRectangle;

const styles = StyleSheet.create({});
