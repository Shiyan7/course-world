import Swiper, { Grid } from 'swiper';

new Swiper('.popular-schools__slider', {
  modules: [Grid],
  slidesPerView: 'auto',
  spaceBetween: 10,
  slidesPerGroup: 2,
  grid: {
    rows: 2
  },
  breakpoints: {

    577: {
      slidesPerView: 'auto',
      spaceBetween: 20,
      slidesPerGroup: 1,
    },

    769: {
      slidesPerView: 'auto',
      spaceBetween: 20,
      slidesPerGroup: 1,
    },

    1025: {
      slidesPerView: 5,
      spaceBetween: 30,
      slidesPerGroup: 1,
    },
}
});
