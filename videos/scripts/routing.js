import { Homepage } from "./components/homepage.component";
import { LoginPage } from "./components/login.component";
import { RegistrationCompletePage } from "./components/registration.complete.component";
import { RegistrationPage } from "./components/registration.component";
import { AuthService } from "./services/auth.service";

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
    handler: Homepage,
  },
  {
    url: "#/registration",
    // handler: () => renderPage("#registration"),
    handler: RegistrationPage,
  },
  {
    url: "#/login",
    // handler: () => renderPage("#login"),
    handler: LoginPage,
  },
  {
    url: "#/registration-complete",
    // handler: () => renderPage("#login"),
    handler: RegistrationCompletePage,
  },
  {
    url: "#/logout",
    // handler: () => renderPage("#login"),
    handler: class {
      constructor() {
        // UserService.isAuthorized = false;
        AuthService.logout();
        location.hash = "/";
      }
    },
  },
];

export function renderApp() {
  console.log("location.hash", location.hash);
  if (location.hash === "") {
    //renderPage("#homepage");
    //window.videos.Homepage; //?
    return;
  }

  const activatedRoute = routes.find((route) => {
   // console.log("route.url", location.hash + " location.hash:", location.hash);
    return route.url === location.hash;
  });

  if (activatedRoute) {
    /* eslint-disable-next-line no-new, new-cap */
    // @ts-ignore
    new activatedRoute.handler();
  } else {
    //renderPage("#not-found");
  }
}
