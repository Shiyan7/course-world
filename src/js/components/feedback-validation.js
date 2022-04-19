import vars from '../_vars';
import JustValidate from "just-validate";

document.addEventListener("DOMContentLoaded", () => {
  const feedbackFormEl = document.querySelector('#feedback-form')

  if (feedbackFormEl) {
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
        errorMessage: vars.defaultErrorMessage,
      }])
      .addField('.validate-email', [{
          rule: 'required',
          errorMessage: vars.defaultErrorMessage
        },
        {
          rule: 'email',
          errorMessage: 'введите коректный email',
        }
      ])
      .addField('.validate-message', [{
        rule: 'required',
        errorMessage: vars.defaultErrorMessage,
      }])
      .onSuccess(() => {
        feedbackFormEl?.submit()
      });
  }
})
