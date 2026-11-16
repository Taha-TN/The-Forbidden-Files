// THE FORBIDDEN FILES — single maintenance switch.
// Set to true to send visitors to maintenance.html; false to reopen the archive.
const MAINTENANCE_MODE = false;
if (MAINTENANCE_MODE && !location.pathname.endsWith("/maintenance.html")) {
  location.replace("maintenance.html");
}
