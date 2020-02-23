import getFormFieldElements from './helpers/get-form-field-elements.js';
import FORM_ELEMENT_IDS from './constants/form-element-ids.js';
import { addFormSubmitEventListener } from './event-listeners.js';

const FORM_ID = 'form';

const Main = () => {
  let formElement = document.getElementById(FORM_ID);
  let formFieldElements = getFormFieldElements(FORM_ELEMENT_IDS);

  addFormSubmitEventListener(formElement, formFieldElements);
};

Main();
