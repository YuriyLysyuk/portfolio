import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import 'highlight.js/scss/base16/oceanicnext.scss';

hljs.registerLanguage('javascript', javascript);
hljs.highlightAll();

const codeNodes = document.querySelectorAll('.js-code');

codeNodes.forEach((codeNode) => {
  hljs.highlightElement(codeNode);

  codeNode.innerHTML = replaceToActiveLink(codeNode.innerHTML);
});

// Helpers

function replaceToActiveLink(innerHTML) {
  return innerHTML.replace(
    /'(https?:\/\/[\w./]+)'/gi,
    '<a href="$1" target="_blank">$1</a>'
  );
}
