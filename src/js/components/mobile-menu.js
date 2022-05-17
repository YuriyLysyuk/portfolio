'use strict';

function updateMobileMenuHeight() {
  const mainNode = document.querySelector('.js-main');

  document.documentElement.style.setProperty(
    '--main-node-height',
    `${mainNode.clientHeight}px`
  );
}

document.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('resize', updateMobileMenuHeight);

  // Deferred initial run for get right main node client height
  setTimeout(() => {
    updateMobileMenuHeight();
  }, 200);
});
