import JustValidate from 'just-validate';

const initValidation = form => {

  const defaultErrorMessage = 'это поле должно быть заполнено';
  const feedbackFormEl = document.querySelector('.feedback-form')

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
    .onSuccess(() => {
      form?.submit()
    });

  if(feedbackFormEl) {
    const feedbackFormValidation = new JustValidate(feedbackFormEl, {
      errorFieldCssClass: 'is-invalid',
      errorLabelStyle: {
        color: '#F8483A',
      },
      errorFieldStyle: {
        border: '2px solid #F8483A',
        backgroundColor: '#FFEDEC'
      },
    })

    feedbackFormValidation
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
      .addRequiredGroup('.validate-rating', false)
      .addField('.validate-message', [{
        rule: 'required',
        errorMessage: defaultErrorMessage,
      }])
      .onSuccess((ev) => {
        feedbackFormEl?.submit()
      });
  }
}

const validateForms = document.querySelectorAll(".validate-form");

validateForms?.forEach(form => initValidation(form))
