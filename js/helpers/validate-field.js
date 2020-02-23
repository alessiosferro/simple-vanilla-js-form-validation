import checkFieldIsValid from './check-valid-field.js';
import isValidEmail from './is-valid-email.js';
import checkLength from './check-length.js';
import FORM_ELEMENT_IDS from '../constants/form-element-ids.js';
import passwordMatch from './password-match.js';

const PASSWORD_MIN_LENGTH = 6;
const PASSWORD_MAX_LENGTH = 25;

const USERNAME_MIN_LENGTH = 3;
const USERNAME_MAX_LENGTH = 15;

export default (inputElement, field) => {
  switch (field) {
    case FORM_ELEMENT_IDS.USERNAME_ID:
      return checkLength(
        inputElement,
        USERNAME_MIN_LENGTH,
        USERNAME_MAX_LENGTH
      );

    case FORM_ELEMENT_IDS.PASSWORD_ID:
      return checkLength(
        inputElement,
        PASSWORD_MIN_LENGTH,
        PASSWORD_MAX_LENGTH
      );

    case FORM_ELEMENT_IDS.EMAIL_ID:
      return checkFieldIsValid(inputElement, isValidEmail);

    case FORM_ELEMENT_IDS.PASSWORD_CONFIRM_ID:
      return checkFieldIsValid(inputElement, passwordMatch);
  }
};
