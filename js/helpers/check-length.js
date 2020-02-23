import showError from './show-error.js';
import capitalize from './capitalize.js';

export default (inputElement, minLength, maxLength) => {
  const inputName = capitalize(inputElement.name);

  if (inputElement.value.trim().length < minLength) {
    showError(
      inputElement,
      `${inputName} must be at least ${minLength} characters.`
    );

    return false;
  }

  if (inputElement.value.trim().length > maxLength) {
    showError(
      inputElement,
      `${inputName} must be less than ${maxLength + 1} characters.`
    );

    return false;
  }

  return true;
};
