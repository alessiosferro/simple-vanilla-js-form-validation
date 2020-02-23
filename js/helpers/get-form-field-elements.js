export default function getFormFieldElements(FORM_ELEMENT_IDS) {
  const formFieldElements = {};

  for (const FIELD_ID in FORM_ELEMENT_IDS) {
    formFieldElements[FORM_ELEMENT_IDS[FIELD_ID]] = document.getElementById(
      FORM_ELEMENT_IDS[FIELD_ID]
    );
  }

  return formFieldElements;
}
