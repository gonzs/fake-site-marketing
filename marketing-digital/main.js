"use strict";

window.addEventListener("load", function () {
  console.log("DOM loaded");

  /* Open when someone clicks on the span element */
  function openNav() {
    document.getElementById("aside-nav").style.width = "100%";
  }

  /* Close when someone clicks on the "x" symbol inside the nav item */
  function closeNav() {
    document.getElementById("aside-nav").style.width = "0%";
  }

  const openMenuButton = document.getElementById("open-button");
  const closeMenuButton = document.getElementById("close-button");
  const itemMenuButtons = document.querySelectorAll(".nav-item");

  openMenuButton.addEventListener("click", openNav);
  closeMenuButton.addEventListener("click", closeNav);

  for (let itemMenu of itemMenuButtons) {
    itemMenu.addEventListener("click", closeNav);
  }
});
