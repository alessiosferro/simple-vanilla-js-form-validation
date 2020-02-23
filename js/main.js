import getFormFieldElements from './helpers/get-form-field-elements.js';
import { FORM_ID, FORM_ELEMENT_IDS } from './_constants.js';
import { addFormSubmitEventListener } from './_event-listeners.js';

let formElement = document.getElementById(FORM_ID);
let formFieldElements = getFormFieldElements(FORM_ELEMENT_IDS);

addFormSubmitEventListener(formElement, formFieldElements);
