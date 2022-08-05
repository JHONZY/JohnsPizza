if($(".swiper-container").hasclass(".team-member-slider")) {
  var swiper = new Swiper('.swiper-container', {
    slidesPerview: 3,
    allowtouchMove: true,
    loop: true,
    centeredSlides: true,
    slideToClickedSlide: true,
    effect: "overflow",
    grabCursor: true,
    autoplay: false,
    navigation: {
      nextEL: '.swiper-button-next',
      prevEL: '.swiper-button-prev',

    },
    overflow: {
      rotate: 0,
      stretch: 100,
      depth: 200,
      modifier: 1,
      slideshadows: false
    },
    breakpoints:{
      767: {
        slidesPerview: 1,
        centeredSlides: false,
        effect: "slide",

      }
    }
  });
}