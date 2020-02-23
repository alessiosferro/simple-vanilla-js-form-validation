import validateForm from './helpers/validate-form.js';

export function addFormSubmitEventListener(formElement, formFieldElements) {
  formElement.addEventListener('submit', e => {
    e.preventDefault();

    validateForm(formFieldElements);
  });
}
