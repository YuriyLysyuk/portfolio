'use strict';

// UI
const mainNode = document.querySelector('.js-main');
const menuToggleNode = document.querySelector('.js-menu-toggle');
const headerNavNode = document.querySelector('.js-header-nav');

});

// Listeners
window.addEventListener('resize', onWindowResize);
headerNavNode.addEventListener('click', onHeaderNavClick);

// Deferred initial run for get right main node client height
setTimeout(() => {
  setMainNodeHeightCssVar();
}, 200);

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

