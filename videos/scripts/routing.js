/**
 * @typedef Route
 * @property {string} url
 * @property {Function} handler
 */

/**
 * @type {Route[]}
 */
const routes = [
  {
    url: "#/",
    // handler: () => renderPage("#homepage"),
    handler: globalThis.videos.Homepage,
  },
  {
    url: "#/registration",
    // handler: () => renderPage("#registration"),
    handler: globalThis.videos.RegistrationPage,
  },
  {
    url: "#/login",
    // handler: () => renderPage("#login"),
    handler: globalThis.videos.LoginPage,
  },
  {
    url: "#/registration-complete",
    // handler: () => renderPage("#login"),
    handler: globalThis.videos.RegistrationCompletePage,
  },
  {
    url: "#/logout",
    // handler: () => renderPage("#login"),
    handler: class {
        constructor(){
           // UserService.isAuthorized = false;
            globalThis.videos.AuthService.logout();
            location.hash = "/";
        }
    }
  }
];

function renderApp() {
    console.log("location.hash" , location.hash);
  if (location.hash === "") {
    //renderPage("#homepage");
    //window.videos.Homepage; //?
    return;
  }

  const activatedRoute = routes.find((route) => {
    console.log("route.url" , location.hash + " location.hash:" , location.hash);
    return route.url === location.hash;
  });

  if (activatedRoute) {
    new activatedRoute.handler();
  } else {
    //renderPage("#not-found");
  }
}
