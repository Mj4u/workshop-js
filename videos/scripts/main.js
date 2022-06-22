
// function 

//function 
import {renderApp} from "./routing";


export function main() {
  window.addEventListener("hashchange", renderApp);
  renderApp();
}

window.addEventListener("DOMContentLoaded", main);
