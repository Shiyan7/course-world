document.addEventListener("DOMContentLoaded", () => {

  const likeBtns = document.querySelectorAll('.g-like-btn');

  likeBtns.forEach(el => {
    const parrent = el.closest('.like-btns');

    el.addEventListener('click', e => {
      parrent.querySelectorAll('.g-like-btn').forEach(el => el.classList.remove('active'))
      e.currentTarget.classList.toggle('active')
    })
  })

})
