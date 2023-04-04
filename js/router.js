export default class Router {
  constructor(paths) {
    this.paths = paths;
    this.initRouter();
  }

  // Método para inicializar el router
  initRouter() {
    // En la primera carga de la página, la url no tiene hash, por lo tanto hasHash es string vacío.
    const hasHash = location.hash;

    // Si hasHash es string vacío, se establece el hash en la url y se direcciona a la página raiz (home);
    !hasHash && window.history.replaceState({}, "done", "#/");

    const {
      location: { hash },
    } = window;
    const URL = hash === "#/" ? "home" : hash.replace("#/", "");

    this.load(URL);
  }

  // Método para cargar las vistas
  load(page = "home", pushState = false) {
    const { paths } = this;
    const { path, template } = paths[page] || paths.error;
    const $container = document.querySelector("#content");
    $container.innerHTML = template;
    pushState && window.history.pushState({}, "done", path);
  }
}
