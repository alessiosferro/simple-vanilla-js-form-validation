import { addSubmitFormEventListener } from './event-listeners.js';

const FORM_ID = 'form';

const Main = () => {
  let formElement = document.getElementById(FORM_ID);

  addSubmitFormEventListener(formElement);
};

Main();
