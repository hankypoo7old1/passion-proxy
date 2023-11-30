importScripts("/bscripts/mathematics.js");
importScripts("/bscripts/geography.js");
importScripts("/bscripts/english.js");

const sw = new UVServiceWorker();
let userKey = new URL(location).searchParams.get('userkey');

self.addEventListener("fetch", (event) => event.respondWith(sw.fetch(event)));
