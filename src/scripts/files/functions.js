import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';


document.addEventListener('DOMContentLoaded', function () {

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

  const heroPhotoSwiper = new Swiper('.hero__photo-swiper', {
    slidesPerView: 1,
    effect: "fade",
    navigation: {
      nextEl: ".hero__icon-right",
      prevEl: ".hero__icon-left",
    },
    pagination: {
      el: '.swiper-pagination',
    },

    on: {
      slideChange: function () {
        heroInfoSwiper.slideTo(this.realIndex);
      },
    },

  });

  const heroInfoSwiper = new Swiper('.hero__info-swiper', {
    slidesPerView: 1,
    on: {
      slideChange: function () {
        heroPhotoSwiper.slideTo(this.realIndex);
      },
    },
  });



  document.querySelectorAll('.counting').forEach(function (element) {
    const countTo = parseFloat(element.getAttribute('data-count'));
    const startValue = parseFloat(element.textContent) || 0;
    const duration = 3000;
    const allowDecimal = element.getAttribute('data-decimal') === 'true';

    function animate(startTime) {
      function step(currentTime) {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        const easedProgress = progress < 0.5
          ? 4 * progress * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 3) / 2;
        const currentCount = startValue + (countTo - startValue) * easedProgress;

        element.textContent = allowDecimal
          ? currentCount.toFixed(1).toLocaleString()
          : Math.round(currentCount).toLocaleString();

        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          element.textContent = allowDecimal
            ? countTo.toFixed(1).toLocaleString()
            : Math.round(countTo).toLocaleString();
        }
      }
      requestAnimationFrame(step);
    }

    function isElementInViewport(el) {
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }

    function handleScroll() {
      if (isElementInViewport(element)) {
        window.removeEventListener('scroll', handleScroll);
        animate(performance.now());
      }
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll();
  });

});