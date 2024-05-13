import React, { useEffect, useState } from 'react';
import { Alert, Button, StatusBar, StyleSheet, Text, View } from 'react-native';
import { parsePhoneNumber } from 'libphonenumber-js/min';
import * as Yup from 'yup';
import PhoneInput from './PhoneInput';
import { useTranslation } from 'react-i18next';
import { globalStyle } from '../utils/styles';

function validPhone(phone) {
  if (phone == null || phone[0] == null || phone[1] == null) {
    return false;
  }
  const countryCode = phone[1];
  try {
    const parsed = parsePhoneNumber(phone[0], countryCode);
    if (parsed == null) {
      return false;
    }
    return parsed.isValid();
  } catch {
    return false;
  }
}

function phoneNotEmpty(phone) {
  return phone != null && !!phone[0] && !!phone[1];
}

function formatPhone(phone, countryCode) {
  try {
    const phoneNumber = parsePhoneNumber(phone, countryCode);
    return phoneNumber?.formatInternational();
  } catch (err) {
    return '';
  }
}

const phoneValidation = Yup.array()
  .of(Yup.string())
  .test('valid phone', 'Invalid phone number', validPhone)
  .test('valid phone', 'Phone number is required', phoneNotEmpty);

const ValidationSchema = Yup.object().shape({
  phone: phoneValidation,
});

const initialValues = {
  phone: ['', 'NG'],
};




export const AppPhoneTextInputView = ({ value, onChangeValue, errorMessage, showError, handlePhoneNumberUpdate }) => {
  const { t } = useTranslation()
  const [countryCode, setCountryCode] = useState('NG');
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});

  const validatePhoneNo = async (formValues) => {
    const formattedValues = {}
    const errors = {};
    try {
      await ValidationSchema.validate(formValues, { abortEarly: false });
      formattedValues = {
        ...formValues,
        phone: formatPhone(formValues.phone[0], countryCode),
      };
    } catch (validationErrors) {
      validationErrors?.inner?.forEach(error => {
        errors[error.path] = error.message;
      });
      setFormErrors(errors);
      return errors
    }
  }

  const handlePhoneNoUpdate = () => {
    validatePhoneNo(formValues)
    onChangeValue(formatPhone(formValues.phone[0], countryCode))
    handlePhoneNumberUpdate(formErrors)
  };

  const handleChangeCountry = country => {
    setCountryCode(country.cca2);
  };

  const handleChangePhone = phone => {
    setFormValues({
      ...formValues,
      phone: [phone, countryCode],
    });
    setFormErrors({
      ...formErrors,
      phone: undefined,
    });
  };

  useEffect(() => {
    showError && handlePhoneNoUpdate()
  }, [showError])

  return (
    <PhoneInput
      label={t('phone_no')}
      placeholder="Enter Phone"
      phone={formValues.phone[0] || value}
      onChangePhone={handleChangePhone}
      countryCode={countryCode}
      onChangeCountry={handleChangeCountry}
      error={showError && Boolean(formErrors.phone)}
      errorMessage={formErrors.phone}
      preferredCountries={["AF", "AL", "DZ", "AS"]}
      clearErrorMessage={() =>
        setFormErrors({ ...formErrors, phone: undefined })
      }
      style={undefined}
      outlineStyle={undefined}
      handlePhoneNoUpdate={handlePhoneNoUpdate}
      hasError={showError && Boolean(formErrors.phone)}
    />
  );
};