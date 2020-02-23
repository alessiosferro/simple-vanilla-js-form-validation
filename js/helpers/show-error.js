import { VALIDATION_CLASSES } from '../_constants.js';

export default function showError(input, message) {
  const {
    FORM_GROUP_ERROR,
    FORM_GROUP_SUCCESS,
    FORM_CONTROL_FEEDBACK
  } = VALIDATION_CLASSES;

  let formGroupDivElement = input.parentElement;
  formGroupDivElement.classList.remove(FORM_GROUP_SUCCESS);
  formGroupDivElement.classList.add(FORM_GROUP_ERROR);

  let feedbackSmallElement = formGroupDivElement.querySelector(
    `.${FORM_CONTROL_FEEDBACK}`
  );

  feedbackSmallElement.innerText = message;
}
