import VALIDATION_CLASSES from '../constants/validation-classes.js';

export default function showSuccess(input, message) {
  const { FORM_GROUP_SUCCESS, FORM_GROUP_ERROR } = VALIDATION_CLASSES;

  let formGroupDivElement = input.parentElement;

  formGroupDivElement.classList.remove(FORM_GROUP_ERROR);
  formGroupDivElement.classList.add(FORM_GROUP_SUCCESS);
}
