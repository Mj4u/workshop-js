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
    handler: window.videos.Homepage,
  },
  {
    url: "#/registration",
    // handler: () => renderPage("#registration"),
    handler: window.videos.RegistrationPage,
  },
  {
    url: "#/login",
    // handler: () => renderPage("#login"),
    handler: window.videos.LoginPage,
  },
  {
    url: "#/registration-complete",
    // handler: () => renderPage("#login"),
    handler: window.videos.RegistrationCompletePage,
  },
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
