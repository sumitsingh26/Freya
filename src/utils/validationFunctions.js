import {emailRegex, specialCharacters} from './constant';
import {showToast} from './helperFunctions';
const validateEmail = (email, errorMessage) => {
  if (!emailRegex.test(email)) {
    // showToast({errorMessage: errorMessage, type: 'error'});
    return false;
  }
  return true;
};

const validatePassword = (password, errorMessage) => {
  // if (password.length < 8) {
  //   return false;
  // }

  // if (!specialCharacters.test(password)) {
  //   return false;
  // }
  return true;
};

const validateRequiredField = (value, errorMessage) => {
  if (!value) {
    // showToast({
    //   errorMessage: errorMessage,
    //   type: 'error',
    // });
    return false;
  }
  return true;
};

export {validateEmail, validatePassword, validateRequiredField};
