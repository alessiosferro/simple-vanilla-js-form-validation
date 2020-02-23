import showError from './helpers/show-error.js';
import showSuccess from './helpers/show-success.js';

export function addFormSubmitEventListener(formElement, formFieldElements) {
  formElement.addEventListener('submit', e => {
    e.preventDefault();

    const {
      username,
      email,
      password,
      passwordConfirmation
    } = formFieldElements;

    if (!username.value.length) {
      showError(username, 'Username is required.');
    } else {
      showSuccess(username);
    }
  });
}
