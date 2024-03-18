const drawerBtn = document.querySelector(".js-drawer-btn");
const drawer = document.querySelector(".js-drawer");

drawerBtn.addEventListener("click", (e) => {
  e.preventDefault();
  drawerBtn.classList.toggle("is-open-drawer");
  drawer.classList.toggle("is-open-drawer");
});
