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
import {globalFontStyle, globalStyle} from '../utils/styles';
import {appColors} from '../utils/constant';
import Icon from 'react-native-vector-icons/FontAwesome';
import {TouchableOpacity} from 'react-native-gesture-handler';

const AppTextInput = (props: CustomTextInputType) => {
  const handleOnChangeTextEvent = (text: string) => {
    props.onChangeText(text);
  };
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View
      style={{
        flex: props.showOnRow ? 1 : 0,
        marginBottom: 10,
        // marginStart: scaleSize(15),
        // marginEnd: scaleSize(props?.showOnRow ? 0 : 15),
      }}>
      <Text style={globalStyle.textStyle}>{props.text}</Text>
      <View style={appTextInputStyle.rowContainer}>
        <TextInput
          {...props}
          style={[appTextInputStyle.container, props.style]}
          onChangeText={handleOnChangeTextEvent}
          value={props.value}
          placeholder={props.placeHolder ? props?.placeHolder : props.text}
          secureTextEntry={showPassword}
          placeholderTextColor={appColors.SilverFoil}
        />
        {props.isPassword && props.value && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Icon
              name={showPassword ? 'eye' : 'eye-slash'}
              size={22}
              color={appColors.SilverFoil}
              style={{paddingEnd: 15}}
            />
          </TouchableOpacity>
        )}
      </View>
      {props?.showError && (
        <Text style={globalStyle.errorMessageStyle}>{props.errorMessage}</Text>
      )}
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
  isDOB: boolean;
  showOnRow: boolean;
  editable: boolean;
  showError: boolean;
}

export default AppTextInput;

export const appTextInputStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.TextPrimary,
    height: scaleHeight(50),
    padding: scaleSize(8),
    ...globalFontStyle(16, '400', appColors.SilverFoil).text,
  },
  rowContainer: {
    flexDirection: 'row',
    borderRadius: scaleHeight(8),
    alignItems: 'center',
    backgroundColor: appColors.TextPrimary,
    overflow: 'hidden',
  },
});
