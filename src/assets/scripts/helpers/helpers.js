'use strict';

(function convertTitleToFilename() {
  // UI
  const convertTitleNodes = document.querySelectorAll('.js-convert-title');

  convertTitleNodes.forEach((node) => {
    node.innerText = node.innerText.toLowerCase().split(' ').join('-');
  });
})();
