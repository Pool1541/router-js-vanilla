export default class Router {
  constructor(paths) {
    this.paths = paths;
    this.initRouter();
  }

  // Método para inicializar el router
  initRouter() {
    const {
      location: { hash = "#/" },
    } = window;
    const URI = hash === "#/" ? "home" : hash.replace("#/", "");
    console.log("URI:", URI);
    this.load(URI);
  }

  // Método para cargar las vistas
  load(page = "home") {
    const { paths } = this;
    const { path, template } = paths[page] || paths.error;
    const $container = document.querySelector("#content");
    $container.innerHTML = template;
    window.history.pushState({}, "done", path);
  }
}
