document.addEventListener("DOMContentLoaded", () => {
  const searchBtn = document.querySelector(".search-btn");
  const searchWindow = document.querySelector(".search-window")

  function toggleSearchWindow () {
    this.classList.toggle('active')
    searchWindow.classList.toggle('open')
  }

  searchBtn.addEventListener("click", toggleSearchWindow)
})
