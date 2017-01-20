(function (window, document) {

  var menu = document.getElementById('menu'),
    WINDOW_CHANGE_EVENT = ('onorientationchange' in window) ? 'orientationchange' : 'resize';
  
  function toggleHorizontal() {
    [].forEach.call(
      document.getElementById('menu').querySelectorAll('.nav-can-transform'),
      function (el) {
        el.classList.toggle('pure-menu-horizontal');
      }
    );
  };
  
  function toggleMenu() {
    // set timeout so that the panel has a chance to roll up
    // before the menu switches states
    if (menu.classList.contains('open')) {
      setTimeout(toggleHorizontal, 500);
    }
    else {
      toggleHorizontal();
    }
    menu.classList.toggle('open');
    document.getElementById('toggle').classList.toggle('x');
  };
  
  function closeMenu() {
    if (menu.classList.contains('open')) {
      toggleMenu();
    }
  }
  
  document.getElementById('toggle').addEventListener('click', function (e) {
    toggleMenu();
    e.preventDefault();
  });
  
  window.addEventListener(WINDOW_CHANGE_EVENT, closeMenu);

})(this, this.document);

jQuery(document).ready(function () {
  // Rs-Slider
  jQuery('.fullscreenbanner').revolution({
    delay: 5000,
    startwidth: 1170,
    startheight: 745,
    fullWidth: "on",
    fullScreen: "off",
    hideCaptionAtLimit: "",
    dottedOverlay: "twoxtwo",
    navigationStyle: "preview4",
    fullScreenOffsetContainer: "",
    hideTimerBar:"on"
  });

  // Change header on mouse scroll
  var header = $(".navbar-fixed-top");
  $(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 1) {
      header.addClass("light-header");
    } else {
      header.removeClass("light-header");
    };
  });
});

