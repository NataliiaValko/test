import { openContactsModal } from './modal-contact-me';

const heroGalleryOpenBtn = document.getElementById('gallery-btn-modal');

heroGalleryOpenBtn.addEventListener('click', openContactsModal);

document.addEventListener('DOMContentLoaded', function () {
  const video = document.getElementById('bg-video');
  const bgImage = document.querySelector('.bg-image');

  function loadBgImage() {
    if (window.innerWidth >= 1440) {
      const srcset = bgImage.getAttribute('data-srcset');
      const src = bgImage.getAttribute('data-src');
      bgImage.setAttribute('srcset', srcset);
      bgImage.setAttribute('src', src);
      bgImage.style.display = 'block';
    }
  }

  function checkVideo() {
    if (window.innerWidth >= 1440 && video.readyState >= 3) {
      bgImage.remove();
    }
  }

  video.addEventListener('canplaythrough', function () {
    checkVideo();
  });

  window.addEventListener('resize', function () {
    if (window.innerWidth >= 1440) {
      loadBgImage();
      checkVideo();
    } else {
      bgImage.style.display = 'none';
      bgImage.removeAttribute('srcset');
      bgImage.removeAttribute('src');
    }
  });

  loadBgImage();
});