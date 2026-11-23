// Retired service worker.
//
// The site used to ship mkdocs-pyscript, which registered /mini-coi.js as a
// service worker. Browsers of returning visitors keep checking this URL for
// updates; serving this file makes that old worker remove itself.
// Safe to delete this file once a few months have passed (e.g. mid 2027).
if (typeof window === "undefined") {
  self.addEventListener("install", () => self.skipWaiting());
  self.addEventListener("activate", (event) => {
    event.waitUntil(self.registration.unregister());
  });
}
