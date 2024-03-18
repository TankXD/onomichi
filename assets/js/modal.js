const modalOpenBtn = document.querySelectorAll(".js-prizes-open-modal");
const modal = document.querySelectorAll(".js-prizes-modal");
const modalCloseBtn = document.querySelectorAll(".js-prizes-close-modal");

modalOpenBtn.forEach((openBtn, index) => {
  openBtn.addEventListener("click", () => {
    // modal[index].setAttribute("open", "open");
    modal[index].showModal();
  });
});
modalCloseBtn.forEach((closeBtn, index) => {
  closeBtn.addEventListener("click", () => {
    // modal[index].removeAttribute("open");
    modal[index].close();
  });
});
