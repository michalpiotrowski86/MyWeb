$(function() {
  let burger = $(".burger-menu");
  let opacityMenu = $(".opacity-nav");

  $(function() {
    burger.on("click", function() {
      opacityMenu.css("display", "block")
    })
  })

  // $(function() {
  //   burger.on("click", function() {
  //     this.classList.toggle("change");
  //   })
  // });

});
