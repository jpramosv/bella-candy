(() => {
  const menuItens = document.querySelectorAll('.navigation__nav a[href^="#"]');

  menuItens.forEach((item) => {
    item.addEventListener("click", scrollToIdOnClick);
  });
  let chkbox = document.getElementById("navi-toggle");

  function scrollToIdOnClick() {
    chkbox.checked = false;
  }
})();
