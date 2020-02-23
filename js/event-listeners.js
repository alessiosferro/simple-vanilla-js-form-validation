import validateForm from './helpers/validate-form.js';

export function addSubmitFormEventListener(formElement) {
  formElement.addEventListener('submit', e => {
    e.preventDefault();

    validateForm();
  });
}
