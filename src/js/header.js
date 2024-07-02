function setActiveMenuItem() {
  const currentPageUrl = new URL(window.location.href);
  const currentPagePath =
    currentPageUrl.pathname + currentPageUrl.search + currentPageUrl.hash;
  const menuLinks = document.querySelectorAll('.header-link');
  const isHomePage =
    currentPagePath === '/' ||
    currentPagePath === '/index.html' ||
    currentPagePath === '/index.html#';

  menuLinks.forEach(link => {
    const linkUrl = new URL(link.href, window.location.origin);
    const linkPath = linkUrl.pathname + linkUrl.search + linkUrl.hash;

    if (isHomePage) {
      link.classList.remove('active');
    } else if (link.getAttribute('href').includes('#contacts')) {
      link.classList.remove('active');
    } else {
      link.classList.toggle('active', linkPath === currentPagePath);
    }
  });
}

window.onload = setActiveMenuItem;
window.onpopstate = setActiveMenuItem;
