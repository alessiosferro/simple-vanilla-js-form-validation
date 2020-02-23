import FORM_ELEMENT_IDS from '../constants/form-element-ids.js';

export default passwordConfirm => {
  const passwordElement = document.getElementById(FORM_ELEMENT_IDS.PASSWORD_ID);

  if (passwordElement.parentElement.classList.contains('form-group--error')) {
    return {
      status: false,
      badStatusMessage: 'Password is invalid'
    };
  }

  return {
    status: passwordConfirm === passwordElement.value,
    badStatusMessage: 'Passwords do not match'
  };
};
