'use strict';

// UI
const mainNode = document.querySelector('.js-main');

});

// Listeners
window.addEventListener('resize', onWindowResize);

// Deferred initial run for get right main node client height
setTimeout(() => {
  setMainNodeHeightCssVar();
}, 200);

// Helpers

function onWindowResize() {
  setMainNodeHeightCssVar();
}


function setMainNodeHeightCssVar() {
  document.documentElement.style.setProperty(
    '--main-node-height',
    `${mainNode.clientHeight}px`
  );
}

