import { openContactsModal } from './modal-contact-me';

const heroHomeOpenBtn = document.getElementById('hero-btn-modal');

heroHomeOpenBtn.addEventListener('click', openContactsModal);

function loadImages() {
  const images = document.querySelectorAll('.image img');
  images.forEach(img => {
    if (window.innerWidth >= 1440) {
      const src = img.getAttribute('data-src');
      if (src) {
        img.setAttribute('src', src);
        img.removeAttribute('data-src');
      }
    }
  });
}

window.onload = function () {
  if (window.innerWidth >= 1440) {
    let currentIndex = 0;
    const images = document.querySelectorAll('.image');
    function changeImage() {
      images[currentIndex].classList.remove('active');
      currentIndex = (currentIndex + 1) % images.length;
      images[currentIndex].classList.add('active');
    }
    changeImage();
    setInterval(changeImage, 4000);
  }

  loadImages();
};

window.onresize = loadImages;
