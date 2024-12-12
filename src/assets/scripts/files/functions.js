import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';


const reviewsPhotoSwiper = new Swiper('.reviews__photo-swiper', {
  slidesPerView: 1,
  effect: "fade",
  on: {
    slideChange: function () {
      reviewsInfoSwiper.slideTo(this.realIndex);
    },
  },

});

const reviewsInfoSwiper = new Swiper('.reviews__info-swiper', {
  slidesPerView: 1,
  navigation: {
    nextEl: ".reviews__arrow-right",
    prevEl: ".reviews__arrow-left",
  },

  on: {
    slideChange: function () {
      reviewsPhotoSwiper.slideTo(this.realIndex);
    },
  },
});


