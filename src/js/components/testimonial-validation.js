import vars from '../_vars';
import JustValidate from "just-validate";
import GraphModal from '../vendor/graph-modal'

document.addEventListener("DOMContentLoaded", () => {

  const modal = new GraphModal();

  const testimonialFormEl = document.querySelector('#testimonial-form')

  if (testimonialFormEl) {
    const testimonialFormValidation = new JustValidate(testimonialFormEl, {
      errorFieldCssClass: 'is-invalid',
      errorLabelStyle: {
        color: '#F8483A',
      },
      errorFieldStyle: {
        border: '2px solid #F8483A',
        backgroundColor: '#FFEDEC'
      },
    })

    testimonialFormValidation
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
      .addRequiredGroup('.validate-rating', '')
      .addField('.validate-message', [{
        rule: 'required',
        errorMessage: vars.defaultErrorMessage,
      }])
      .onFail(() => {
        modal?.close()
      })
      .onSuccess(e => {
        modal?.open()
        testimonialFormEl?.reset()

        // testimonialFormEl?.submit()
      });
  }
})
