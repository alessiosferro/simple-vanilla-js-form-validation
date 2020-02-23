import showError from './show-error.js';
import showSuccess from './show-success.js';
import capitalize from './capitalize.js';
import replaceCamelCase from './replace-camel-case.js';

export default inputElement => {
  if (inputElement.value.trim() === '') {
    let errorMessage = `${capitalize(
      replaceCamelCase(inputElement.name)
    )} is required.`;

    showError(inputElement, errorMessage);

    return false;
  }

  return true;
};
