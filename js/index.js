import Router from "./router.js";
import PATHS from "./routes.js";

const ROUTER = new Router(PATHS);
const links = document.querySelectorAll("button");

window.addEventListener("DOMContentLoaded", function () {
  links.forEach((link) => {
    const linkPath = link.innerText.toLowerCase();
    link.addEventListener("click", () => ROUTER.load(linkPath));
  });
});

window.addEventListener("hashchange", () => {
  const location = window.location.hash.replace("#/", "") || "home";
  ROUTER.load(location);
});

console.log(ROUTER);
