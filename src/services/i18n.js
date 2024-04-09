import i18n from 'i18next'; 
import {initReactI18next} from 'react-i18next'; 
import da from '../../assets/i18n/da.json';
import se from '../../assets/i18n/se.json';
import no from '../../assets/i18n/no.json';
import fi from '../../assets/i18n/fi.json';
import en from '../../assets/i18n/en.json';

  
i18n.use(initReactI18next).init({ 
compatibilityJSON: 'v3',
  lng: 'da', 
  fallbackLng: 'da', 
  resources: { 
    da: da, 
    se: se,
    no: no,
    fi: fi,
    en: en 
  }, 
  interpolation: { 
    escapeValue: false // react already safes from xss 
  } 
}); 
  
export default i18n; 