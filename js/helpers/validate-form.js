import checkRequired from './check-required.js';
import showSuccess from './show-success.js';
import validateInputField from './validate-field.js';
import getFormFieldElements from './get-form-field-elements.js';

export default () => {
  let formFieldElements = getFormFieldElements();

  for (const field in formFieldElements) {
    const inputElement = formFieldElements[field];

    if (
      checkRequired(inputElement) &&
      validateInputField(inputElement, field)
    ) {
      showSuccess(inputElement);
    }
  }
};
