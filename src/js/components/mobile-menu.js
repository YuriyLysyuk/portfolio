'use strict';

// UI
const mainNode = document.querySelector('.js-main');
const sectionNodes = mainNode.querySelectorAll('.js-section');
const menuToggleNode = document.querySelector('.js-menu-toggle');
const headerNavNode = document.querySelector('.js-header-nav');

const navMap = {};
sectionNodes.forEach((sectionNode) => {
  const id = sectionNode.id;

  navMap[id] = {
    link: headerNavNode.querySelector(`[href='#${id}']`),
    section: sectionNode,
  };
});

// Listeners
window.addEventListener('resize', onWindowResize);
headerNavNode.addEventListener('click', onHeaderNavClick);

// Deferred initial run for get right main node client height
setTimeout(() => {
  setMainNodeHeightCssVar();
}, 200);

initialScroll();

observeActiveSection();

// Helpers

function onWindowResize() {
  setMainNodeHeightCssVar();
}

function onHeaderNavClick(event) {
  const target = event.target;

  if (target.tagName === 'A') {
    menuToggleNode.checked = false;
  }
}

function setMainNodeHeightCssVar() {
  document.documentElement.style.setProperty(
    '--main-node-height',
    `${mainNode.clientHeight}px`
  );
}

function initialScroll() {
  const idFromHash = location.hash.slice(1);

  if (idFromHash && navMap[idFromHash]) {
    setTimeout(() => {
      mainNode.scrollTop =
        navMap[idFromHash].section.offsetTop - mainNode.offsetTop;
    }, 500);
  }
}

function observeActiveSection() {
  const observerOptions = {
    root: mainNode,
    rootMargin: '-49.99% 0px',
    threshold: 0,
  };

  const observerCallback = function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.id;

        Object.values(navMap).forEach(({ link }) => {
          link.classList.remove('nav__link_active');
        });

        navMap[id].link.classList.add('nav__link_active');
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);

  sectionNodes.forEach((sectionNode) => {
    observer.observe(sectionNode);
  });
}
