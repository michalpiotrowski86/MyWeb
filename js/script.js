$(function() {
  let burger = $(".burger-menu");
  let opacityMenu = $(".opacity-nav");

  burger.on("click", function() {
    if (opacityMenu.css("display") == "none") {
      opacityMenu.css("display", "block")
    } else {
      opacityMenu.css("display", "none")
    }
    this.classList.toggle("change");
  })
});
