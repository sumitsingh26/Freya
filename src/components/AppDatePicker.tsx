import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import AppTextInput, {appTextInputStyle} from './AppTextInput';
import {useTranslation} from 'react-i18next';
import {globalStyle} from '../utils/styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import {appColors} from '../utils/constant';
import {deviceWidth, scaleSize} from '../utils/screenUtils';
import moment from 'moment';

const AddDatePicker = (props: CustomAppDatePicker) => {
  const {date, setDate, handleDateConfirm} = props;
  const {t} = useTranslation();
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date: Date) => {
    console.log('A date has been picked: ', moment(date).format('DD/MM/YYYY'));
    setDate(moment(date).format('YYYY-MM-DD'));
    hideDatePicker();
  };

  return (
    <View>
      <View style={{}}>
        <Text style={globalStyle.textStyle}>{props.text}</Text>
        <View style={appTextInputStyle.rowContainer}>
          <View style={[appTextInputStyle.container, {flex: 0}]}>
            <Text
              style={[
                appTextInputStyle.container,
                {color: appColors.SilverFoil},
              ]}>
              {date || 'dd/mm/yyyy'}
            </Text>
          </View>
          <Icon
            name="calendar"
            size={22}
            color={appColors.SilverFoil}
            style={{paddingEnd: 15}}
            onPress={showDatePicker}
          />
        </View>
        {props?.showError && (
          <Text style={globalStyle.errorMessageStyle}>
            {props.errorMessage}
          </Text>
        )}
      </View>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        maximumDate={new Date()}
      />
    </View>
  );
};

interface CustomAppDatePicker {
  text: string;
  date: string;
  setDate: (value: string) => void;
  isDatePickerVisible: boolean;
  handleDateConfirm: (date: Date) => void;
  setDatePickerVisibility: (value: boolean) => void;
  errorMessage: string;
  showError: boolean;
}
export default AddDatePicker;
