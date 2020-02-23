import showError from './show-error.js';

export default (inputElement, validationCallbackFn) => {
  const { value } = inputElement;
  let validationResponse = validationCallbackFn(value.trim());

  if (!validationResponse.status) {
    showError(inputElement, validationResponse.badStatusMessage);
    return false;
  }

  return true;
};
