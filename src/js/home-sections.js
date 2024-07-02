import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import { openContactsModal } from './modal-contact-me';

let homeGallerySwiper = null;

function initializeHomeGallerySwiper() {
  homeGallerySwiper = new Swiper('.home-gallery-swiper', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    modules: [Navigation],

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
}

function destroyHomeGallerySwiper() {
  if (homeGallerySwiper !== null) {
    homeGallerySwiper.destroy(true, true);
    homeGallerySwiper = null;
  }
}

function toggleHomeGallerySwiperBasedOnWidth(maxWidth) {
  const screenWidth = window.innerWidth;
  if (screenWidth <= maxWidth) {
    if (homeGallerySwiper === null) {
      initializeHomeGallerySwiper();
    }
  } else {
    if (homeGallerySwiper !== null) {
      destroyHomeGallerySwiper();
    }
  }
}

window.addEventListener('resize', function () {
  toggleHomeGallerySwiperBasedOnWidth(1439);
});

toggleHomeGallerySwiperBasedOnWidth(1439);

const homeOurTeamSwiper = new Swiper('.home-our-team-swiper', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  modules: [Navigation],

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    834: {
      slidesPerView: 2,
      spaceBetween: 20,
      slidesPerGroup: 1,
    },
    1440: {
      slidesPerView: 4,
    },
  },
});

const contactUsButtonElements = document.querySelectorAll(
  '.home-contact-us-btn'
);

contactUsButtonElements.forEach(button => {
  button.addEventListener('click', openContactsModal);
});
