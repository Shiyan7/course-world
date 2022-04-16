import JustValidate from 'just-validate';
import Inputmask from "inputmask";

const validateFormEl = document.querySelector("#validate-form");

if(validateFormEl) {
  const validation = new JustValidate(
    '#validate-form', {
      errorFieldCssClass: 'is-invalid',
      errorLabelStyle: {
        color: '#F8483A',
      },
    }
  );

  validation
    .addField('#validate-input', [{
      rule: 'required',
      errorMessage: 'это поле должно быть заполнено'
    }]);

}
