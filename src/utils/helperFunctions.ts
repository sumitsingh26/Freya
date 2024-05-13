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
      return JSON.parse(data);
    } else {
      // Data doesn't exist
      return null;
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
