(() => {
  "use strict";
  // INIT
  let testScroll = document.createElement("div");
  testScroll.style.height = "200vh";
  document.body.append(testScroll);

  // SCROLL OBJ
  let windowScroll = {
    lastScroll: 0,
    scroll: false,
    setScroll() {
      let currentScroll = window.pageYOffset;
      this.scroll = currentScroll < this.lastScroll ? false : true;
      this.lastScroll = currentScroll <= 0 ? 0 : currentScroll;
    }
  };

  // WINDOW EVENT
  window.addEventListener("scroll", () => {
    window.requestAnimationFrame(() => {
      windowScroll.setScroll();
      if (windowScroll.scroll) {
        console.log("scroll down");
      } else {
        console.log("scroll up");
      }
    });
  });
})();
