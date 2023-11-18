function OpenMenu() {
  const menu = document.querySelector(".menu");
  const overlay = document.querySelector(".overlay");
  menu.classList.toggle("open-menu");
  overlay.classList.toggle("open-menu");
}

export default OpenMenu;
