// Gaspard Danger – portfolio (English version)
// Keeps the active tab visible when the tab bar scrolls on small screens.
(function () {
  var tabs = document.querySelector(".tabs");
  var current = tabs && tabs.querySelector('[aria-current="page"]');
  if (tabs && current) {
    var t = tabs.getBoundingClientRect();
    var c = current.getBoundingClientRect();
    tabs.scrollLeft += (c.left - t.left) - (t.width - c.width) / 2;
  }
})();
