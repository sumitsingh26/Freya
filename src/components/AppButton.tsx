import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {appColors} from '../utils/constant';
import {scaleFontSize, scaleHeight, scaleSize} from '../utils/screenUtils';
import {useTheme} from '@react-navigation/native';
import {globalStyle} from '../utils/styles';

const AppButton = (props: CustomButtonType) => {
  const {colors} = useTheme();
  const componentStyle = styles(colors, props.primary);

  return (
    <>
      <Pressable
        style={({pressed}) => [
          [componentStyle.container, props.style],
          {
            opacity: pressed ? 0.5 : 1.0,
          },
        ]}
        onPress={props.click}>
        <Text style={componentStyle.title}>{props.title}</Text>
      </Pressable>
    </>
  );
};

interface CustomButtonType {
  primary?: boolean;
  title: string;
  click: (value: string) => void;
  style?: any;
}

export default AppButton;

const styles = (color: any, primary: boolean) =>
  StyleSheet.create({
    container: {
      backgroundColor: primary ? appColors.Primary : 'white',
      borderRadius: scaleHeight(6),
      marginVertical: scaleHeight(20),
      height: scaleHeight(50),
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      ...globalStyle.textStyle,
      color: primary ? 'white' : 'black',
      textAlign: 'center',
    },
  });
