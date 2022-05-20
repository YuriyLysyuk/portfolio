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

