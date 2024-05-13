import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import CountryPicker from 'react-native-country-picker-modal';
import {appColors} from '../utils/constant';
import {scaleHeight, scaleSize} from '../utils/screenUtils';
import {useTranslation} from 'react-i18next';
import {globalFontStyle, globalStyle} from '../utils/styles';
import {appTextInputStyle} from './AppTextInput';

const PhoneInput = ({
  countryCode,
  phone,
  onChangeCountry,
  onChangePhone,
  preferredCountries,
  error,
  label,
  errorMessage = '',
  clearErrorMessage,
  handlePhoneNoUpdate,
  hasError,
}) => {
  const {t} = useTranslation();
  const handleChangeCountry = country => {
    onChangeCountry(country);
    clearErrorMessage?.();
  };

  const handleChangeText = value => {
    onChangePhone(value);
    clearErrorMessage?.();
  };

  return (
    <View style={{paddingTop: 10}}>
      <Text style={globalStyle.textStyle}>{label}</Text>
      <View style={styles.row}>
        <CountryPicker
          preferredCountries={['IN', 'US']}
          countryCodes={['IN', 'US']}
          containerButtonStyle={[styles.countryPickerButton]}
          countryCode={countryCode}
          withFilter
          withFlag
          withCallingCodeButton
          withFlagButton={false}
          withCloseButton
          withAlphaFilter={false}
          withCallingCode
          onSelect={handleChangeCountry}
        />
        <TextInput
          style={[appTextInputStyle.container, hasError && styles.errorInput]}
          keyboardType="phone-pad"
          autoCorrect={false}
          autoComplete="tel"
          textContentType="telephoneNumber"
          onChangeText={handleChangeText}
          value={phone}
          placeholder={t('phone_no')}
          onBlur={() => handlePhoneNoUpdate()}
          placeholderTextColor={appColors.Primary}
        />
      </View>
      <Text style={globalStyle.errorMessageStyle}>{errorMessage}</Text>
    </View>
  );
};

export default PhoneInput;

const styles = StyleSheet.create({
  container: {},
  label: {
    color: '#333',
    fontSize: 18,
    marginBottom: 8,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'stretch',
  },
  countryPickerButton: {
    borderRadius: 8,
    marginRight: 8,
    backgroundColor: appColors.TextPrimary,
    height: scaleHeight(50),
    justifyContent: 'center',
    paddingHorizontal: 15,
    ...globalFontStyle(16, '400', appColors.SilverFoil).centerText,
  },
  errorBorder: {
    borderColor: '#FF0000',
  },
  textInput: {
    backgroundColor: '#FFF',
    borderRadius: 8,
    padding: 12,
    flex: 1,
    color: appColors.Primary,
  },
  errorInput: {
    borderColor: '#FF0000',
  },
  errorText: {
    color: '#FF0000',
    fontSize: 14,
    marginTop: 4,
  },
});
