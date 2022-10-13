const menuItens = document.querySelectorAll('.navigation__nav a[href^="#"]');

let chkbox = document.getElementById("navi-toggle");

menuItens.forEach((item) => {
  item.addEventListener("click", scrollToIdOnClick);
});

function scrollToIdOnClick() {
  chkbox.checked = false;
}
