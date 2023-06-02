let swiperCards = new Swiper(".gallery-cards", {
    loop: true,
    loopedSlides: 5
  });

  var swiper2 = new Swiper(".gallery-thumbs", {
    loop: true,
    loopedSlides: 5,
    slidersPerView:3,
    centeredSlides:true,
    slideToClickedSlide:true,
  });