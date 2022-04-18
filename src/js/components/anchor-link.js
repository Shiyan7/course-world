document.addEventListener("DOMContentLoaded", () => {
  const anchorLinks = document.querySelectorAll(".anchor-link");

  anchorLinks?.forEach(el => {
    el.addEventListener("click", function (e) {

      anchorLinks.forEach(el => el.classList.remove('active'))

      e.preventDefault();

      e.currentTarget.classList.add('active')

      const blockID = el.getAttribute("href").substr(1);

      document.getElementById(blockID).scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  });
});
