if(!self.define){let e,s={};const n=(n,a)=>(n=new URL(n+".js",a).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(a,t)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let c={};const r=e=>n(e,i),o={module:{uri:i},exports:c,require:r};s[i]=Promise.all(a.map((e=>o[e]||r(e)))).then((e=>(t(...e),c)))}}define(["./workbox-f1770938"],(function(e){"use strict";importScripts("/fallback-ce627215c0e4a9af.js"),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/1qnRCPIx1I7H_XSeqz5jZ/_buildManifest.js",revision:"a1b7599199e2e8c82f2c6bcf8d8aca61"},{url:"/_next/static/1qnRCPIx1I7H_XSeqz5jZ/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/0e5ce63c-59b814961b2338af.js",revision:"1qnRCPIx1I7H_XSeqz5jZ"},{url:"/_next/static/chunks/215-6c8914326621a5ee.js",revision:"1qnRCPIx1I7H_XSeqz5jZ"},{url:"/_next/static/chunks/229-2235c4e2be80547b.js",revision:"1qnRCPIx1I7H_XSeqz5jZ"},{url:"/_next/static/chunks/250-6ba8841953bc103f.js",revision:"1qnRCPIx1I7H_XSeqz5jZ"},{url:"/_next/static/chunks/275-8141b53084211e80.js",revision:"1qnRCPIx1I7H_XSeqz5jZ"},{url:"/_next/static/chunks/363642f4-8d19a73201670944.js",revision:"1qnRCPIx1I7H_XSeqz5jZ"},{url:"/_next/static/chunks/370-cd3b3db4a0eae598.js",revision:"1qnRCPIx1I7H_XSeqz5jZ"},{url:"/_next/static/chunks/424-e28f928bf0eadbfb.js",revision:"1qnRCPIx1I7H_XSeqz5jZ"},{url:"/_next/static/chunks/556-dddc782f4d72053f.js",revision:"1qnRCPIx1I7H_XSeqz5jZ"},{url:"/_next/static/chunks/562-0d6ea616015d8ff3.js",revision:"1qnRCPIx1I7H_XSeqz5jZ"},{url:"/_next/static/chunks/640-407fd71e0b50eb4f.js",revision:"1qnRCPIx1I7H_XSeqz5jZ"},{url:"/_next/static/chunks/643-455d3b7f98219f15.js",revision:"1qnRCPIx1I7H_XSeqz5jZ"},{url:"/_next/static/chunks/772-68c6b4e2b198ae87.js",revision:"1qnRCPIx1I7H_XSeqz5jZ"},{url:"/_next/static/chunks/794-b178d4deef156c48.js",revision:"1qnRCPIx1I7H_XSeqz5jZ"},{url:"/_next/static/chunks/795-917ed6cd8f818007.js",revision:"1qnRCPIx1I7H_XSeqz5jZ"},{url:"/_next/static/chunks/849-8532c34fc0cb2286.js",revision:"1qnRCPIx1I7H_XSeqz5jZ"},{url:"/_next/static/chunks/882-d67d0aef2ef45f1c.js",revision:"1qnRCPIx1I7H_XSeqz5jZ"},{url:"/_next/static/chunks/883-2be2cbb21e312829.js",revision:"1qnRCPIx1I7H_XSeqz5jZ"},{url:"/_next/static/chunks/9198aa63-e09478700f369070.js",revision:"1qnRCPIx1I7H_XSeqz5jZ"},{url:"/_next/static/chunks/939-8da2cd05bc1aa474.js",revision:"1qnRCPIx1I7H_XSeqz5jZ"},{url:"/_next/static/chunks/app/%5Btenant%5D/loading-f4db48d8b07178e0.js",revision:"1qnRCPIx1I7H_XSeqz5jZ"},{url:"/_next/static/chunks/app/%5Btenant%5D/page-61bd7732a7653cf6.js",revision:"1qnRCPIx1I7H_XSeqz5jZ"},{url:"/_next/static/chunks/app/%5Btenant%5D/schedules/%5Bslug%5D/page-ab016cad88109533.js",revision:"1qnRCPIx1I7H_XSeqz5jZ"},{url:"/_next/static/chunks/app/%5Btenant%5D/schedules/add/page-4d9949dbdc64e17e.js",revision:"1qnRCPIx1I7H_XSeqz5jZ"},{url:"/_next/static/chunks/app/%5Btenant%5D/schedules/edit/%5Bslug%5D/page-3e7a05c446bce515.js",revision:"1qnRCPIx1I7H_XSeqz5jZ"},{url:"/_next/static/chunks/app/%5Btenant%5D/schedules/layout-9afd16ca57889fc3.js",revision:"1qnRCPIx1I7H_XSeqz5jZ"},{url:"/_next/static/chunks/app/%5Btenant%5D/schedules/page-565ab6b2e943f2cf.js",revision:"1qnRCPIx1I7H_XSeqz5jZ"},{url:"/_next/static/chunks/app/%5Btenant%5D/song-leads/page-566783b4600790ea.js",revision:"1qnRCPIx1I7H_XSeqz5jZ"},{url:"/_next/static/chunks/app/(selection)/schedules/page-10dcd1f9445c8de9.js",revision:"1qnRCPIx1I7H_XSeqz5jZ"},{url:"/_next/static/chunks/app/_not-found-6900752a9491df0b.js",revision:"1qnRCPIx1I7H_XSeqz5jZ"},{url:"/_next/static/chunks/app/layout-cdb08079d5e0aad4.js",revision:"1qnRCPIx1I7H_XSeqz5jZ"},{url:"/_next/static/chunks/app/offline/page-a1d4d0586893220c.js",revision:"1qnRCPIx1I7H_XSeqz5jZ"},{url:"/_next/static/chunks/app/page-9fd2dadce20b0519.js",revision:"1qnRCPIx1I7H_XSeqz5jZ"},{url:"/_next/static/chunks/app/song-leads/page-d8e62b79ad645121.js",revision:"1qnRCPIx1I7H_XSeqz5jZ"},{url:"/_next/static/chunks/app/songs/%5Bslug%5D/edit/page-2316593ebb962655.js",revision:"1qnRCPIx1I7H_XSeqz5jZ"},{url:"/_next/static/chunks/app/songs/%5Bslug%5D/page-2589f9b4a4f2c36b.js",revision:"1qnRCPIx1I7H_XSeqz5jZ"},{url:"/_next/static/chunks/app/songs/add/page-c42f287b12d113ad.js",revision:"1qnRCPIx1I7H_XSeqz5jZ"},{url:"/_next/static/chunks/app/songs/layout-609fd5af25ce88ae.js",revision:"1qnRCPIx1I7H_XSeqz5jZ"},{url:"/_next/static/chunks/app/songs/loading-ac4e862f686d97a1.js",revision:"1qnRCPIx1I7H_XSeqz5jZ"},{url:"/_next/static/chunks/app/songs/page-eb8d3395bbf58a55.js",revision:"1qnRCPIx1I7H_XSeqz5jZ"},{url:"/_next/static/chunks/eeac573e-1991654c6ef2f01f.js",revision:"1qnRCPIx1I7H_XSeqz5jZ"},{url:"/_next/static/chunks/fd9d1056-c809be1148fac6b8.js",revision:"1qnRCPIx1I7H_XSeqz5jZ"},{url:"/_next/static/chunks/framework-c5181c9431ddc45b.js",revision:"1qnRCPIx1I7H_XSeqz5jZ"},{url:"/_next/static/chunks/main-0aabed88778b6cad.js",revision:"1qnRCPIx1I7H_XSeqz5jZ"},{url:"/_next/static/chunks/main-app-3b56655a76b7d3dc.js",revision:"1qnRCPIx1I7H_XSeqz5jZ"},{url:"/_next/static/chunks/pages/_app-98cb51ec6f9f135f.js",revision:"1qnRCPIx1I7H_XSeqz5jZ"},{url:"/_next/static/chunks/pages/_error-e87e5963ec1b8011.js",revision:"1qnRCPIx1I7H_XSeqz5jZ"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-234ed7f6513058e8.js",revision:"1qnRCPIx1I7H_XSeqz5jZ"},{url:"/_next/static/css/6d60c6d493864808.css",revision:"6d60c6d493864808"},{url:"/_next/static/media/66f30814ff6d7cdf.p.woff2",revision:"addf0d443087aa4b985f763c80182017"},{url:"/_next/static/media/e11418ac562b8ac1-s.p.woff2",revision:"0e46e732cced180e3a2c7285100f27d4"},{url:"/aao-logo.png",revision:"02bdab59ae58e023ba4fe9f96587ea89"},{url:"/cross.svg",revision:"54bf7c8905a00850cd23d5879bb5f403"},{url:"/fallback-ce627215c0e4a9af.js",revision:"a5281aa1504c5d6bcd7ba1097870376a"},{url:"/icons-192.png",revision:"f9153bea2c3bbf4ad4bb2ce23932d3c8"},{url:"/icons-256.png",revision:"9fb404daa18403fa06192e0c7501de30"},{url:"/icons-512.png",revision:"b464a389a4871a04db4dce612960d316"},{url:"/images/team-taytay.jpg",revision:"889281f64957db2b57f892ba5d6583e7"},{url:"/manifest.json",revision:"8081e74be87bd82e869e4d39406d94c8"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/offline",revision:"1qnRCPIx1I7H_XSeqz5jZ"},{url:"/swe-worker-5c72df51bb1f6ee0.js",revision:"5a47d90db13bb1309b25bdf7b363570e"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e},{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/\.(?:mp4|webm)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute((({sameOrigin:e,url:{pathname:s}})=>!(!e||s.startsWith("/api/auth/callback")||!s.startsWith("/api/"))),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:n})=>"1"===e.headers.get("RSC")&&"1"===e.headers.get("Next-Router-Prefetch")&&n&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:n})=>"1"===e.headers.get("RSC")&&n&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute((({url:{pathname:e},sameOrigin:s})=>s&&!e.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),self.__WB_DISABLE_DEV_LOGS=!0}));
