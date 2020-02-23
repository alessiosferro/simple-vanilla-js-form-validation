import checkRequired from './check-required.js';
import showSuccess from './show-success.js';
import validateField from './validate-field.js';

export default formFieldElements => {
  for (const field in formFieldElements) {
    const inputElement = formFieldElements[field];

    if (checkRequired(inputElement) && validateField(inputElement, field)) {
      showSuccess(inputElement);
    }
  }
};
