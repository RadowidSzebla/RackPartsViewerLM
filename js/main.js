!function(n){var e={};function c(r){if(e[r])return e[r].exports;var t=e[r]={i:r,l:!1,exports:{}};return n[r].call(t.exports,t,t.exports,c),t.l=!0,t.exports}c.m=n,c.c=e,c.d=function(n,e,r){c.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:r})},c.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},c.t=function(n,e){if(1&e&&(n=c(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var t in n)c.d(r,t,function(e){return n[e]}.bind(null,t));return r},c.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return c.d(e,"a",e),e},c.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},c.p="",c(c.s=0)}([function(module,exports,__webpack_require__){"use strict";eval("\r\n\r\n// service worker registration - remove if you're not going to use it\r\n\r\nif ('serviceWorker' in navigator) {\r\n  window.addEventListener('load', function() {\r\n    navigator.serviceWorker.register('serviceworker.js').then(function(registration) {\r\n      // Registration was successful\r\n      console.log('ServiceWorker registration successful with scope: ', registration.scope);\r\n    }, function(err) {\r\n      // registration failed :(\r\n      console.log('ServiceWorker registration failed: ', err);\r\n    });\r\n  });\r\n}\r\n\r\n// place your code below\r\n\r\nconst input = document.querySelector('.input--js');\r\nconst image = document.querySelector('.image--js')\r\n\r\nconst buttonLoad = document.querySelector('.buttonLoad--js');\r\nfunction handleClickLoad(){\r\n  //console.log(input.value)\r\n  //console.log(image.src)\r\n  if (input.value == \"lm\") {\r\n    image.src=\"assets/img/logoLM.jpg\"\r\n  }\r\n  else if (input.value == \"piws\") {\r\n    image.src=\"assets/img/logoPiws.jpg\"\r\n  }\r\n  else {image.src=\"assets/img/no-pictures.svg\"}\r\n}\r\nbuttonLoad.addEventListener('click',handleClickLoad);\r\n\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi5qcz85MjkxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbi8vIHNlcnZpY2Ugd29ya2VyIHJlZ2lzdHJhdGlvbiAtIHJlbW92ZSBpZiB5b3UncmUgbm90IGdvaW5nIHRvIHVzZSBpdFxyXG5cclxuaWYgKCdzZXJ2aWNlV29ya2VyJyBpbiBuYXZpZ2F0b3IpIHtcclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIucmVnaXN0ZXIoJ3NlcnZpY2V3b3JrZXIuanMnKS50aGVuKGZ1bmN0aW9uKHJlZ2lzdHJhdGlvbikge1xyXG4gICAgICAvLyBSZWdpc3RyYXRpb24gd2FzIHN1Y2Nlc3NmdWxcclxuICAgICAgY29uc29sZS5sb2coJ1NlcnZpY2VXb3JrZXIgcmVnaXN0cmF0aW9uIHN1Y2Nlc3NmdWwgd2l0aCBzY29wZTogJywgcmVnaXN0cmF0aW9uLnNjb3BlKTtcclxuICAgIH0sIGZ1bmN0aW9uKGVycikge1xyXG4gICAgICAvLyByZWdpc3RyYXRpb24gZmFpbGVkIDooXHJcbiAgICAgIGNvbnNvbGUubG9nKCdTZXJ2aWNlV29ya2VyIHJlZ2lzdHJhdGlvbiBmYWlsZWQ6ICcsIGVycik7XHJcbiAgICB9KTtcclxuICB9KTtcclxufVxyXG5cclxuLy8gcGxhY2UgeW91ciBjb2RlIGJlbG93XHJcblxyXG5jb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dC0tanMnKTtcclxuY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW1hZ2UtLWpzJylcclxuXHJcbmNvbnN0IGJ1dHRvbkxvYWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uTG9hZC0tanMnKTtcclxuZnVuY3Rpb24gaGFuZGxlQ2xpY2tMb2FkKCl7XHJcbiAgLy9jb25zb2xlLmxvZyhpbnB1dC52YWx1ZSlcclxuICAvL2NvbnNvbGUubG9nKGltYWdlLnNyYylcclxuICBpZiAoaW5wdXQudmFsdWUgPT0gXCJsbVwiKSB7XHJcbiAgICBpbWFnZS5zcmM9XCJhc3NldHMvaW1nL2xvZ29MTS5qcGdcIlxyXG4gIH1cclxuICBlbHNlIGlmIChpbnB1dC52YWx1ZSA9PSBcInBpd3NcIikge1xyXG4gICAgaW1hZ2Uuc3JjPVwiYXNzZXRzL2ltZy9sb2dvUGl3cy5qcGdcIlxyXG4gIH1cclxuICBlbHNlIHtpbWFnZS5zcmM9XCJhc3NldHMvaW1nL25vLXBpY3R1cmVzLnN2Z1wifVxyXG59XHJcbmJ1dHRvbkxvYWQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGhhbmRsZUNsaWNrTG9hZCk7XHJcblxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n")}]);