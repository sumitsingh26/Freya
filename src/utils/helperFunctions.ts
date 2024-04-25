import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast, {ToastType} from 'react-native-toast-message';

export async function setStoredValue(key: string, value: any) {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    // save error
  }
}

export const getStoredLocal = async (key: string) => {
  try {
    const data = await AsyncStorage.getItem(key);
    if (data !== null) {
      // Data exists
      console.log('Data:', data);
      return JSON.parse(data);
      // Parse data if necessary (data is stored as a string)
      // const parsedData = JSON.parse(data);
    } else {
      // Data doesn't exist
      console.log('No data found');
    }
  } catch (error) {
    console.error('Error retrieving data:', error);
  }
};

export async function removeStoredValue(key: string) {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    // save error
  }
}

export const showToast = (props: AppToastType) => {
  const {title, type, errorMessage} = props;
  Toast.show({
    type: type || 'success', // Default to 'success' if type is not provided
    text1: title || type.charAt(0).toUpperCase() + type.slice(1) || '',
    text2: errorMessage || 'Default Description',
  });
};

interface AppToastType {
  errorMessage: string;
  title: string;
  type: ToastType;
}
