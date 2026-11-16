(() => {
  const menuButton = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".topbar nav");
  if (menuButton && nav) {
    menuButton.addEventListener("click", () => {
      const open = nav.classList.toggle("nav-open");
      menuButton.setAttribute("aria-expanded", String(open));
    });
    nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
      nav.classList.remove("nav-open");
      menuButton.setAttribute("aria-expanded", "false");
    }));
  }
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(link => link.addEventListener("click", event => {
    const target = document.querySelector(link.getAttribute("href"));
    if (target) { event.preventDefault(); target.scrollIntoView({behavior:"smooth",block:"start"}); }
  }));
})();