/*
  THE FORBIDDEN FILES — SINGLE SWITCH MAINTENANCE SYSTEM

  This is the ONLY setting you need to change:
  false = website is open
  true  = visitors are redirected to maintenance.html

  After changing it, commit/push the change to GitHub Pages.
*/
const MAINTENANCE_MODE = false;

(function () {
  const path = window.location.pathname.toLowerCase();
  const isMaintenancePage = path.endsWith("/maintenance.html") || path === "maintenance.html";
  if (MAINTENANCE_MODE && !isMaintenancePage) {
    const target = new URL("maintenance.html", window.location.href);
    if (window.location.href !== target.href) window.location.replace(target.href);
  }
})();