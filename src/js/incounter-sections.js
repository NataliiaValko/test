import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import { openContactsModal } from './modal-contact-me';

const contactBtn = document.getElementById('connect-btn');

contactBtn.addEventListener('click', openContactsModal);

// Swiper start

let swiper = null;

function initializeSwiper() {
  swiper = new Swiper('.incounter-swiper-container', {
    modules: [Navigation],
    direction: 'horizontal',
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
}

function destroySwiper() {
  if (swiper !== null) {
    swiper.destroy(true, true);
    swiper = null;
  }
}

function toggleSwiperBasedOnWidth(maxWidth) {
  const screenWidth = window.innerWidth;
  if (screenWidth <= maxWidth) {
    if (swiper === null) {
      initializeSwiper();
    }
  } else {
    if (swiper !== null) {
      destroySwiper();
    }
  }
}

window.addEventListener('resize', function () {
  toggleSwiperBasedOnWidth(833);
});

toggleSwiperBasedOnWidth(833);

// Swiper end
