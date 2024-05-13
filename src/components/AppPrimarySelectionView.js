import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import Icon from 'react-native-vector-icons/Ionicons';
import {globalFontStyle, globalStyle} from '../utils/styles';
import {appColors} from '../utils/constant';
import {scaleHeight} from '../utils/screenUtils';

const data = [
  {label: 'Item 1', value: '1'},
  {label: 'Item 2', value: '2'},
  {label: 'Item 3', value: '3'},
  {label: 'Item 4', value: '4'},
  {label: 'Item 5', value: '5'},
  {label: 'Item 6', value: '6'},
  {label: 'Item 7', value: '7'},
  {label: 'Item 8', value: '8'},
];

const AppPrimarySelectionView = ({
  title,
  data,
  value,
  onChangeValue,
  primary,
  iconName,
  showError,
  errorMessage,
}) => {
  const [isFocus, setIsFocus] = useState(false);
  const customStyle = styles(primary, isFocus);

  const renderItem = item => {
    return (
      <View style={customStyle.item}>
        <Text style={customStyle.label}>{item.label}</Text>
        <Text style={customStyle.value}>{item.price}</Text>
      </View>
    );
  };

  const renderItemWithIcon = item => {
    return (
      <View style={customStyle.item}>
        {item?.flag}
        <Text style={[customStyle.value]}>{item.label}</Text>
      </View>
    );
  };
  return (
    <View style={customStyle.container}>
      {primary && <Text style={customStyle.title}>{title}</Text>}
      <Dropdown
        style={customStyle.dropdown}
        placeholderStyle={customStyle.placeholderStyle}
        selectedTextStyle={customStyle.selectedTextStyle}
        inputSearchStyle={customStyle.inputSearchStyle}
        iconStyle={customStyle.iconStyle}
        data={data}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!primary && title ? title : 'Select'}
        searchPlaceholder="Search..."
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          onChangeValue(item.value);
          setIsFocus(false);
        }}
        renderItem={primary ? renderItemWithIcon : renderItem}
        renderLeftIcon={item => {
          const selectedValueData = data.find(item => item['value'] === value);
          return selectedValueData && selectedValueData?.flag ? (
            selectedValueData?.flag
          ) : (
            <Icon
              style={customStyle.icon}
              color={isFocus ? appColors.TextPrimary : appColors.Primary}
              name={iconName}
              size={20}
            />
          );
        }}
      />
      {showError && errorMessage && (
        <Text style={globalStyle.errorMessageStyle}>{errorMessage}</Text>
      )}
    </View>
  );
};

export default AppPrimarySelectionView;

const styles = (primary, focus) =>
  StyleSheet.create({
    container: {},
    dropdown: {
      height: 50,
      borderRadius: 8,
      backgroundColor:
        !focus && primary ? appColors.LightBackGround : appColors.Primary,
      paddingHorizontal: 15,
      marginBottom: 10,
    },
    icon: {
      marginRight: 5,
    },
    label: {
      position: 'absolute',
      backgroundColor: 'white',
      left: 22,
      top: 8,
      zIndex: 999,
      paddingHorizontal: 8,
      fontSize: 14,
    },
    placeholderStyle: {
      fontSize: 16,
      color: !focus && primary ? appColors.Primary : appColors.TextPrimary,
    },
    selectedTextStyle: {
      fontSize: 16,
      color: !focus && primary ? appColors.Primary : appColors.TextPrimary,
    },
    iconStyle: {
      width: 20,
      height: 20,
      tintColor: !focus && primary ? appColors.Primary : appColors.TextPrimary,
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
    },
    item: {
      flexDirection: 'row',
      justifyContent: primary ? 'flex-start' : 'space-between',
      alignItems: 'center',
      padding: 10,
      marginStart: 10,
    },
    label: {
      fontSize: 16,
    },
    value: {
      ...globalFontStyle(14, '400', appColors.Text).text,
    },
    title: {
      ...globalFontStyle(16, '400', appColors.Text).text,
      marginTop: scaleHeight(16),
      marginBottom: scaleHeight(8),
    },
  });
