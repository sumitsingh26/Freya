import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import authReducer from './features/auth/authSlice';
import homeReducer from './features/home/homeSlice';
import savedItemsReducer from './features/save/saveSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';

const appPersistConfig = key => {
  return {
    key: key,
    storage: AsyncStorage,
  };
};

const rootReducer = combineReducers({
  auth: persistReducer(appPersistConfig('auth'), authReducer),
  home: persistReducer(appPersistConfig('home'), homeReducer),
  savedItems: persistReducer(appPersistConfig('savedItems'), savedItemsReducer),
});

export default rootReducer;
