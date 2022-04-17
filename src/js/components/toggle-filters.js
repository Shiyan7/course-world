import { disableScroll } from '../functions/disable-scroll';
import { enableScroll } from '../functions/enable-scroll';

document.addEventListener("DOMContentLoaded", () => {

  const filtersToggle = document.querySelector(".catalog__filters-toggle");
  const filtersClose = document.querySelector(".filters__close");
  const filters = document.querySelector(".filters");

  function toggleFilters() {
    filters.classList.add("open");
    disableScroll()
  }

  function hiddenFilters() {
    filters.classList.remove("open");
    enableScroll()
  }

  filtersToggle?.addEventListener("click", toggleFilters);
  filtersClose?.addEventListener("click", hiddenFilters);
})
