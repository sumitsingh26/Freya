import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {appColors} from '../utils/constant';
import {scaleFontSize, scaleHeight, scaleSize} from '../utils/screenUtils';
import {useTheme} from '@react-navigation/native';
import {globalStyle} from '../utils/styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import {TouchableOpacity} from 'react-native-gesture-handler';

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

interface CustomExtraButtonSType {
  ButtonList: [];
  click: (value: string) => void;
  style?: any;
}

const styles = (color: any, primary: boolean) =>
  StyleSheet.create({
    container: {
      backgroundColor: primary ? appColors.Primary : 'white',
      borderRadius: scaleHeight(6),
      marginVertical: scaleHeight(20),
      height: scaleHeight(50),
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: scaleSize(15),
    },
    title: {
      ...globalStyle.textStyle,
      color: primary ? 'white' : 'black',
      textAlign: 'center',
    },
  });

export const AppExtraButtons = (props: CustomExtraButtonSType) => {
  return (
    <FlatList
      scrollEnabled={false}
      data={props?.ButtonList}
      renderItem={({item}) => <ExtraButton item={item} />}
      keyExtractor={item => item?.name}
      numColumns={1} // Change to 3 for three items in a row
      style={{
        position: 'absolute',
        right: scaleSize(0),
        zIndex: 999,
      }}
    />
  );
};

const ExtraButton = ({item}) => {
  const button = {item};
  return (
    <View
      style={{
        height: 40,
        aspectRatio: 1 / 1,
        borderRadius: 20,
        backgroundColor: appColors.TextPrimary,
        opacity: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
      }}>
      <Icon name={item?.icon} size={25} color={appColors.Primary} />
    </View>
  );
};
export default AppButton;
