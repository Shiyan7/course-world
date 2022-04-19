import vars from '../_vars';
import JustValidate from 'just-validate';

const initValidation = form => {

  const validation = new JustValidate(form, {
    errorFieldCssClass: 'is-invalid',
    errorLabelStyle: {
      color: '#F8483A',
    }
  });

  validation
    .addField('.validate-input', [{
      rule: 'required',
      errorMessage: vars.defaultErrorMessage
    }])
    .onSuccess(() => {
      form?.submit()
    });
}

const validateForms = document.querySelectorAll(".validate-form");

validateForms?.forEach(form => initValidation(form))
