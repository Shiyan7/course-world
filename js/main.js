(()=>{var e={595:()=>{document.addEventListener("click",(function(e){if(e.target.classList.contains("accordion__control")){var t=e.target.closest(".accordion"),n=t.querySelector(".accordion__control"),o=t.querySelector(".accordion__content");t.classList.toggle("open"),t.classList.contains("open")?(n.setAttribute("aria-expanded",!0),o.setAttribute("aria-hidden",!1)):(n.setAttribute("aria-expanded",!1),o.setAttribute("aria-hidden",!0))}}))},598:()=>{function e(e){var t=!0,n=!1,o=null,i={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function d(e){return!!(e&&e!==document&&"HTML"!==e.nodeName&&"BODY"!==e.nodeName&&"classList"in e&&"contains"in e.classList)}function s(e){e.classList.contains("focus-visible")||(e.classList.add("focus-visible"),e.setAttribute("data-focus-visible-added",""))}function r(e){t=!1}function a(){document.addEventListener("mousemove",c),document.addEventListener("mousedown",c),document.addEventListener("mouseup",c),document.addEventListener("pointermove",c),document.addEventListener("pointerdown",c),document.addEventListener("pointerup",c),document.addEventListener("touchmove",c),document.addEventListener("touchstart",c),document.addEventListener("touchend",c)}function c(e){e.target.nodeName&&"html"===e.target.nodeName.toLowerCase()||(t=!1,document.removeEventListener("mousemove",c),document.removeEventListener("mousedown",c),document.removeEventListener("mouseup",c),document.removeEventListener("pointermove",c),document.removeEventListener("pointerdown",c),document.removeEventListener("pointerup",c),document.removeEventListener("touchmove",c),document.removeEventListener("touchstart",c),document.removeEventListener("touchend",c))}document.addEventListener("keydown",(function(n){n.metaKey||n.altKey||n.ctrlKey||(d(e.activeElement)&&s(e.activeElement),t=!0)}),!0),document.addEventListener("mousedown",r,!0),document.addEventListener("pointerdown",r,!0),document.addEventListener("touchstart",r,!0),document.addEventListener("visibilitychange",(function(e){"hidden"===document.visibilityState&&(n&&(t=!0),a())}),!0),a(),e.addEventListener("focus",(function(e){var n,o,r;d(e.target)&&(t||(o=(n=e.target).type,"INPUT"===(r=n.tagName)&&i[o]&&!n.readOnly||"TEXTAREA"===r&&!n.readOnly||n.isContentEditable))&&s(e.target)}),!0),e.addEventListener("blur",(function(e){var t;d(e.target)&&(e.target.classList.contains("focus-visible")||e.target.hasAttribute("data-focus-visible-added"))&&(n=!0,window.clearTimeout(o),o=window.setTimeout((function(){n=!1}),100),(t=e.target).hasAttribute("data-focus-visible-added")&&(t.classList.remove("focus-visible"),t.removeAttribute("data-focus-visible-added")))}),!0),e.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&e.host?e.host.setAttribute("data-js-focus-visible",""):e.nodeType===Node.DOCUMENT_NODE&&(document.documentElement.classList.add("js-focus-visible"),document.documentElement.setAttribute("data-js-focus-visible",""))}if("undefined"!=typeof window&&"undefined"!=typeof document){var t;window.applyFocusVisiblePolyfill=e;try{t=new CustomEvent("focus-visible-polyfill-ready")}catch(e){(t=document.createEvent("CustomEvent")).initCustomEvent("focus-visible-polyfill-ready",!1,!1,{})}window.dispatchEvent(t)}"undefined"!=typeof document&&e(document)}},t={};function n(o){var i=t[o];if(void 0!==i)return i.exports;var d=t[o]={exports:{}};return e[o](d,d.exports,n),d.exports}(()=>{"use strict";n(598);const e={windowEl:window,documentEl:document,htmlEl:document.documentElement,bodyEl:document.body};var t,o,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:250,n=!1,o=null,i=null;return function d(){for(var s=arguments.length,r=new Array(s),a=0;a<s;a++)r[a]=arguments[a];if(n)return o=r,void(i=this);e.apply(this,r),n=!0,setTimeout((function(){n=!1,i&&(d.apply(i,o),i=null,o=null)}),t)}}((function(){var e=window.innerHeight;document.documentElement.style.setProperty("--vh","".concat(e,"px"))}));i(),window.addEventListener("resize",i),t=document.querySelector("[data-burger]"),o=document.querySelector("[data-menu]"),null==t||t.addEventListener("click",(function(n){var i,d,s,r;t.classList.toggle("burger--active"),null==o||o.classList.toggle("menu--active"),null!=o&&o.classList.contains("menu--active")?(t.setAttribute("aria-expanded","true"),t.setAttribute("aria-label","Закрыть меню"),d=null===(i=document)||void 0===i?void 0:i.querySelectorAll(".fixed-block"),s=window.scrollY,r="".concat(window.innerWidth-e.bodyEl.offsetWidth,"px"),e.htmlEl.style.scrollBehavior="none",d.forEach((function(e){e.style.paddingRight=r})),e.bodyEl.style.paddingRight=r,e.bodyEl.classList.add("dis-scroll"),e.bodyEl.dataset.position=s,e.bodyEl.style.top="-".concat(s,"px")):(t.setAttribute("aria-expanded","false"),t.setAttribute("aria-label","Открыть меню"),function(){var t,n=null===(t=document)||void 0===t?void 0:t.querySelectorAll(".fixed-block"),o=(document.body,parseInt(e.bodyEl.dataset.position,10));n.forEach((function(e){e.style.paddingRight="0px"})),e.bodyEl.style.paddingRight="0px",e.bodyEl.style.top="auto",e.bodyEl.classList.remove("dis-scroll"),window.scroll({top:o,left:0}),e.bodyEl.removeAttribute("data-position"),e.htmlEl.style.scrollBehavior="smooth"}())}));var d=function(){var e,t=null===(e=document)||void 0===e?void 0:e.querySelector(".header").offsetHeight;document.querySelector(":root").style.setProperty("--header-height","".concat(t,"px"))};d(),window.addEventListener("resize",d),n(595)})()})();