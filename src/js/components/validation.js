import JustValidate from 'just-validate';
import Inputmask from "inputmask";

const initValidation = form => {
  const validation = new JustValidate(form, {
    errorFieldCssClass: 'is-invalid',
    errorLabelStyle: {
      color: '#F8483A',
    },
  });

  validation
    .addField('.validate-input', [{
      rule: 'required',
      errorMessage: 'это поле должно быть заполнено'
    }]);
}

const validateForms = document.querySelectorAll(".validate-form");

validateForms?.forEach(form => initValidation(form))
