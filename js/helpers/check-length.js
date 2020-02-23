import showError from './show-error.js';
import capitalize from './capitalize.js';

export default (inputElement, minLength, maxLength) => {
  const inputName = capitalize(inputElement.name);

  let errorMessage;

  if (inputElement.value.trim().length < minLength) {
    errorMessage = `${inputName} must be at least ${minLength} characters.`;

    showError(inputElement, errorMessage);

    return false;
  }

  if (inputElement.value.trim().length > maxLength) {
    errorMessage = `${inputName} must be less than ${maxLength +
      1} characters.`;

    showError(inputElement, errorMessage);

    return false;
  }

  return true;
};
