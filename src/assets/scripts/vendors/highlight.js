import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';

hljs.registerLanguage('javascript', javascript);

const codeNodes = document.querySelectorAll('.js-code');

codeNodes.forEach((codeNode) => {
  hljs.highlightElement(codeNode);

  codeNode.innerHTML = replaceToActiveLink(codeNode.innerHTML);
});

// Helpers
function replaceToActiveLink(innerHTML) {
  return innerHTML.replace(
    /(https?:\/\/[\w-_./]+)/gi,
    '<a href="$1" target="_blank">$1</a>'
  );
}
