import {
  StyleSheet,
  Text,
  TextInput,
  View,
  ReturnKeyType,
  KeyboardType,
  StyleProp,
  ViewStyle,
} from 'react-native';
import React, {useState} from 'react';
import {scaleFontSize, scaleHeight, scaleSize} from '../utils/screenUtils';
import {globalStyle} from '../utils/styles';
import {appColors} from '../utils/constant';

const AppTextInput = (props: CustomTextInputType) => {
  const [visible, setVisible] = useState(false);
  const handleOnChangeTextEvent = (text: string) => {
    console.log({text});
    props.onChangeText(text);
  };
  return (
    <View style={{marginVertical: 10}}>
      <Text style={globalStyle.textStyle}>{props.text}</Text>
      <TextInput
        {...props}
        style={[styles.container, props.style]}
        onChangeText={handleOnChangeTextEvent}
        value={props.value}
        placeholder={props.text}
        secureTextEntry={props.secureTextEntry || visible}
        placeholderTextColor={appColors.SilverFoil}
      />
      {/* {props.required && props.showValidations && !props.value && (
        <Text style={globalStyle.errorMessageStyle}>{props.errorMessage}</Text>
      )} */}
    </View>
  );
};

interface CustomTextInputType {
  text: string;
  value: string;
  isPrimary?: boolean;
  onChangeText: (value: string) => void;
  isPassword?: boolean;
  errorMessage?: string;
  showValidations?: boolean;
  required?: boolean;
  secureTextEntry?: boolean;
  keyboardType?: KeyboardType;
  returnKeyType?: ReturnKeyType;
  style?: ViewStyle;
  placeHolder: string;
}

export default AppTextInput;

const styles = StyleSheet.create({
  container: {
    backgroundColor: appColors.TextPrimary,
    height: scaleHeight(50),
    padding: scaleSize(8),
    borderRadius: scaleHeight(5),
    fontSize: scaleFontSize(16),
    fontWeight: '400',
    color: appColors.SilverFoil,
    marginVertical: scaleHeight(5),
  },
  titleText: {},
});
