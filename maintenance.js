/* THE FORBIDDEN FILES — single maintenance switch
   false = public site is open
   true  = visitors are sent to maintenance.html
   Commit and push after changing this value. */
const MAINTENANCE_MODE = false;
(function(){const p=location.pathname.toLowerCase();const isPage=p.endsWith("maintenance.html");if(MAINTENANCE_MODE&&!isPage){location.replace(new URL("maintenance.html",location.href).href);}})();