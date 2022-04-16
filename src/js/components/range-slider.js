import noUiSlider from 'nouislider';

const rangeSlider = document.querySelectorAll('.range-slider');

const initSlider = slider => {

  const self = slider.closest('.filter-slider')

  // Переменные минимального и максимального диапазона
  let min = Number(slider.dataset.min)
  let max = Number(slider.dataset.max)


  //Инициализация слайдера
  noUiSlider.create(slider, {
    start: [min, max],
    connect: true,
    step: 1,
    range: {
      'min': min,
      'max': max
    }
  });

  const input0 = self.querySelector('.input-0');
  const input1 = self.querySelector('.input-1');
  const inputs = [input0, input1];

  slider.noUiSlider.on('update', values => {
    inputs[0].value = `от ${Math.round(values[0])}`;
    inputs[1].value = `до ${Math.round(values[1])}`;
  });

  const setRangeSlider = (i, value) => {
    let arr = [null, null];
    arr[i] = value;

    slider.noUiSlider.set(arr);
  };

  inputs.forEach((el, index) => {
    el.addEventListener('change', (e) => {
      setRangeSlider(index, e.currentTarget.value);
    });
  });
}

rangeSlider?.forEach(el => initSlider(el))
