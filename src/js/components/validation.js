import JustValidate from 'just-validate';

const initValidation = form => {

  const defaultErrorMessage = 'это поле должно быть заполнено';
  const contactFormEl = document.querySelector('.contacts-form')

  const validation = new JustValidate(form, {
    errorFieldCssClass: 'is-invalid',
    errorLabelStyle: {
      color: '#F8483A',
    }
  });

  validation
    .addField('.validate-input', [{
      rule: 'required',
      errorMessage: defaultErrorMessage
    }])
    .onSuccess((ev) => {
      form?.submit()
    });

  if(contactFormEl) {
    const contactFormValidation = new JustValidate(contactFormEl, {
      errorFieldCssClass: 'is-invalid',
      errorLabelStyle: {
        color: '#F8483A',
      },
    })

    contactFormValidation
      .addField('.validate-input', [{
        rule: 'required',
        errorMessage: defaultErrorMessage,
      }])
      .addField('.validate-email', [
        {
          rule: 'required',
          errorMessage: defaultErrorMessage
        },
        {
          rule: 'email',
          errorMessage: 'введите коректный email',
        }
      ])
      .addField('.validate-message', [{
        rule: 'required',
        errorMessage: defaultErrorMessage,
      }])
      .onSuccess((ev) => {
        contactFormEl?.submit()
      });
  }
}

const validateForms = document.querySelectorAll(".validate-form");

validateForms?.forEach(form => initValidation(form))
