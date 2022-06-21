
function copyTemplate(selector) {
  /**
   * @type {HTMLTemplateElement|null}
   */
  const template = document.querySelector(selector);
  return template?.content.cloneNode(true);
}

function render(page) {
  if (!page) {
    throw new Error("Page is not defined");
  }
  console.log("render page", page);
  const outlet = document.querySelector("#outlet");
  if (!outlet) {
    throw new Error("outlet is not defined");
  }

  while (outlet.firstElementChild) {
    outlet.firstElementChild.remove();
  }
  outlet.append(page);
}

function renderPage(selector) {
  render(copyTemplate(selector));
}

function renderApp() {
  switch (location.hash) {
    case "":
    case "#/":
      renderPage("#homepage");
      break;

    case "#/registration":
      renderPage("#registration");
      break;

    case "#/login":
      renderPage("#login");
      break;
    default:
      console.log("ups... 404");
      break;
  }
}

function main() {
  window.addEventListener("hashchange", renderApp);
  renderApp;
}

window.addEventListener("DOMContentLoaded", main);
