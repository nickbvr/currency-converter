if(!self.define){let e,i={};const n=(n,o)=>(n=new URL(n+".js",o).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(o,r)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let t={};const c=e=>n(e,s),d={module:{uri:s},exports:t,require:c};i[s]=Promise.all(o.map((e=>d[e]||c(e)))).then((e=>(r(...e),t)))}}define(["./workbox-fa446783"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-275bc756.js",revision:null},{url:"assets/workbox-window.prod.es5-a7b12eab.js",revision:null},{url:"index.html",revision:"de002c60eb5bccd7efaff0efbb6767a4"},{url:"icon-192x192.png",revision:"665d98b219a35db8614412f48e025ecd"},{url:"icon-256x256.png",revision:"a26deb78be7e97aa3ed43bd74c204220"},{url:"icon-384x384.png",revision:"7a138642cfe8cd3444002e282590221a"},{url:"icon-512x512.png",revision:"0b51db46aca681d8753fc72717b0d23c"},{url:"manifest.webmanifest",revision:"78ae60f78ae5c3a6c60407b96203443f"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
