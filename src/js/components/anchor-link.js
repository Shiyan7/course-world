document.addEventListener("DOMContentLoaded", () => {
  const anchorLinks = document.querySelectorAll(".anchor-link");

  anchorLinks?.forEach(el => {
    el.addEventListener("click", function (e) {

      const blockID = el.getAttribute("href").substr(1);
      const block = document.getElementById(blockID)
      const blockHeight = block.offsetTop - 80;

      document.documentElement.style.scrollBehavior = 'smooth';

      anchorLinks.forEach(el => el.classList.remove('active'))

      e.preventDefault();

      e.currentTarget.classList.add('active')

      window.scrollTo(0, blockHeight)
    });
  });
});
