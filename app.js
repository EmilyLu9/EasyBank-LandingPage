/* Hamburger Menu */
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("nav ul");
const lists = document.querySelectorAll(".nav-item");
const container = document.querySelector("body");
const introImage2 = document.querySelector(".intro-img2");

hamburger.addEventListener("click", openMenu);

/* Create a function openMenu: Hamburger clicks - Shows X & ul - add active class*/
function openMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  container.classList.toggle("menu-open");
  introImage2.classList.toggle("hide");
}
/* Create a function closeMenu: Each list clicks - Close navMenu   */
function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
  container.classList.remove("menu-open");
  introImage2.classList.remove("hide");
}
/* Add closeMenu when click each list */
for (i = 0; i < lists.length; i++) {
  lists[i].addEventListener("click", closeMenu);
}
