!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/build",n(n.s=1)}([function(e,t,n){},function(e,t,n){"use strict";n.r(t);n(0);function o(e){switch(document.querySelector(".do-step-container.active")&&document.querySelector(".do-step-container.active").classList.remove("active"),document.querySelector(".do-step-container.in-progress")&&document.querySelector(".do-step-container.in-progress").classList.remove("in-progress"),e){case"1":document.querySelector("#step-card-activation").classList.contains("done")?document.querySelector("#step-card-activation").classList.add("active"):(document.querySelector("#step-card-activation").classList.add("in-progress","active"),document.querySelector("#step-card-activation").classList.remove("done"));break;case"2":document.querySelector("#step-generate-pin").classList.contains("done")?document.querySelector("#step-generate-pin").classList.add("active"):(document.querySelector("#step-card-activation").classList.add("done"),document.querySelector("#step-card-activation").classList.remove("in-progress","active"),document.querySelector("#step-card-activation .do-step-heading-text").classList.add("clickable"),document.querySelector("#step-generate-pin").classList.add("in-progress","active"));break;case"3":document.querySelector("#step-estate-sub").classList.contains("done")?document.querySelector("#step-estate-sub").classList.add("active"):(document.querySelector("#step-generate-pin").classList.add("done"),document.querySelector("#step-generate-pin").classList.remove("in-progress"),document.querySelector("#step-generate-pin .do-step-heading-text").classList.add("clickable"),document.querySelector("#step-estate-sub").classList.add("in-progress","active"));break;case"4":document.querySelector("#step-estate-sub").classList.add("done"),document.querySelector("#step-estate-sub").classList.remove("in-progress"),document.querySelector("#step-estate-sub .do-step-heading-text").classList.add("clickable"),document.querySelector("#step-international-usage").classList.add("in-progress")}}console.log("Modal has been loaded"),window.generatePin=function(){document.querySelector("#body-after-otp").classList.add("hidden"),document.querySelector("#body-pin-generated").classList.remove("hidden"),document.querySelector("#generate-pin-text").innerHTML="PIN Generated",o("3")},window.validatePin=function(){document.querySelector("#confirm-pin-input > input").value.length>1&&(document.querySelector("#new-pin-input > input").value!=document.querySelector("#confirm-pin-input > input").value?document.querySelector("#step2-pin-button").disabled=!0:document.querySelector("#step2-pin-button").disabled=!1)},window.validateOtp=function(e){6==e.value.length&&(e.blur(),window.location.hash="#",document.querySelector("#body-before-otp").classList.add("hidden"),document.querySelector("#body-after-otp").classList.remove("hidden"))},window.generateOtp=function(){window.location.hash="generateOtp"},window.changeStep=o,window.toggleButton=function(e){document.querySelector(e).disabled=!document.querySelector(e).disabled},window.activateCard=function(){document.querySelector("#body-not-activated").classList.add("hidden"),document.querySelector("#body-activated").classList.remove("hidden"),document.querySelector("#card-activation-text").innerHTML="Card Activated",o("2")},window.addEventListener("keyup",function(e){27==e.keyCode&&(window.location.href="#")})}]);