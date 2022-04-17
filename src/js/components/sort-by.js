document.addEventListener("DOMContentLoaded", () => {

  const sortItems = document.querySelectorAll(".sort-by");

  const visibleSort = e => {
    const self = e.target;
    const parent = self.closest(".sort-by");
    const sortByCurrent = parent.querySelector('.sort-by__current');
    const sortByItems = parent.querySelectorAll(".sort-by__item")
    const text = self.textContent;
    parent.classList.add("open")

    if (self.classList.contains("sort-by__item")) {
      sortByItems.forEach(el => el.classList.remove("active"))
      self.classList.add("active");
      sortByCurrent.textContent = text;
      hiddenSortItems()
    }
  }

  const hiddenSortItems = () => {
    sortItems?.forEach(el => el.classList.remove("open"))
  }

  document.addEventListener("click", (e) => {

    if (e.target.closest(".open-sort-by")) {
      visibleSort(e);
    } else if (e.target !== e.target.classList.contains('sort-by')) {
      hiddenSortItems();
    }
  });
});
