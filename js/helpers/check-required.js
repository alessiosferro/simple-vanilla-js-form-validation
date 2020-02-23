import showError from './show-error.js';
import showSuccess from './show-success.js';
import capitalize from './capitalize.js';
import replaceCamelCase from './replace-camel-case.js';

export default inputElement => {
  if (inputElement.value.trim() === '') {
    showError(
      inputElement,
      `${capitalize(replaceCamelCase(inputElement.name))} is required.`
    );

    return false;
  }

  showSuccess(inputElement);
  return true;
};
