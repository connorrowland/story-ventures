"use strict";var precacheConfig=[["/index.html","2ca99b69600ffd6320cf315ec8c94a7e"],["/static/css/main.efb649c9.css","acac90d8c36574e1a26d4cfd32688588"],["/static/js/main.fb6c5873.js","809a14ca1a4a83f23d1835feb7305082"],["/static/media/ExplorerLogo.21990aea.png","21990aea7794a4b5683a571be47766e7"],["/static/media/InspirenLogo.17b0f387.png","17b0f387f9cca881aa6f788fc7113945"],["/static/media/MotorqLogo.a0f46d4a.png","a0f46d4ad398ecadc93e374ea13e8a2f"],["/static/media/MuseLogo.4aa6447f.png","4aa6447f3723f1c3d5043a19ab474df4"],["/static/media/NemedioLogo.233bf1bd.png","233bf1bd4ac3f2779a579ff07b8823c3"],["/static/media/NewtonLogo.dac269a9.png","dac269a9cdf97347bffd711674fdc23e"],["/static/media/PostGrotesk-Medium.42993872.woff2","42993872498ed6f7da1c44bf965ce41d"],["/static/media/PostGrotesk-Medium.5be029f7.svg","5be029f70e448dcd605a0804e5d67314"],["/static/media/PostGrotesk-Medium.6c71f773.eot","6c71f77312a9a89f118215228eba135c"],["/static/media/PostGrotesk-Medium.8259a9ad.ttf","8259a9ad5174e164acdbb8e01bcfdde3"],["/static/media/PostGrotesk-Medium.c9c26dde.woff","c9c26dde82df5f54437d691130ea3e72"],["/static/media/SensorySystemsIllo.5d4c8afd.png","5d4c8afddd233877f7e533ef3bbb49a7"],["/static/media/SmileLogo.97a47b41.png","97a47b4125acf31aa5e42bf1117bf53a"],["/static/media/SoftwareIllo.18c72b2a.png","18c72b2abe959f4c36fa8bec0348a98a"],["/static/media/Story_Logo.4e0d9fb4.png","4e0d9fb427b9689ae42ef9ba7cbfae06"],["/static/media/WTC_Logo.aef7d2b9.png","aef7d2b9bc9b6dae74fc53c34831417c"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var r="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});