function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},t.parcelRequired7c6=o);var i=o("7Y9D8");function u(t,r){const n=Math.random()>.3;return new Promise(((e,o)=>{setTimeout((()=>{n?e({position:t,delay:r}):o({position:t,delay:r})}),r)})).then((({position:t,delay:r})=>{e(i).Notify.success(`✅ Fulfilled promise ${t} in ${r}ms`)})).catch((({position:t,delay:r})=>{e(i).Notify.failure(`❌ Rejected promise ${t} in ${r}ms`)}))}document.querySelector(".form").addEventListener("submit",(function(e){e.preventDefault();let t=Number(e.currentTarget.delay.value);const r=Number(e.currentTarget.step.value),n=Number(e.currentTarget.amount.value);for(let e=1;e<=n;e+=1)t+=r,u(e,t)}));
//# sourceMappingURL=03-promises.417d8219.js.map
