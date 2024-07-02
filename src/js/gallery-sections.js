import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

import { openContactsModal } from './modal-contact-me';

const galleryOpenModalBtn = document.getElementById('gallery-contacts-modal');

galleryOpenModalBtn.addEventListener('click', openContactsModal);

function toggleSwipersBasedOnWidth(maxWidth) {
  const screenWidth = window.innerWidth;
  const swiperContainers = document.querySelectorAll(
    '.gallery-swiper-container'
  );

  swiperContainers.forEach((container, index) => {
    const swiperInstance = container.swiper;

    if (screenWidth <= maxWidth) {
      if (!swiperInstance) {
        new Swiper(container, {
          modules: [Navigation],
          direction: 'horizontal',
          loop: true,
          navigation: {
            nextEl: `.swiper-button-next-${index}`,
            prevEl: `.swiper-button-prev-${index}`,
          },
          slidesPerView: 1,
          centeredSlidesBounds: true,
          breakpoints: {
            834: {
              slidesPerView: 1.8,
              spaceBetween: 44,
            },
          },
        });
      }
    } else {
      if (swiperInstance) {
        swiperInstance.destroy(true, true);
        container.swiper = null;
      }
    }
  });
}

window.addEventListener('resize', function () {
  toggleSwipersBasedOnWidth(1439);
});

toggleSwipersBasedOnWidth(1439);
