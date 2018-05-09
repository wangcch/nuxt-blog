import Vue from 'vue'
import Hljs from 'highlight.js'

Vue.directive('highlightjs', (el) => {
  let blocks = el.querySelectorAll('pre code');
  Array.prototype.forEach.call(blocks, Hljs.highlightBlock);
})