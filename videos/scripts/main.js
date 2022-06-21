function copyHomepageTemplate() {
  /**
   * @type {HTMLTemplateElement|null}
   */
  const homepageTemplate = document.querySelector("#homepage");
  return homepageTemplate?.content.cloneNode(true);
}

function main() {
  const outlet = document.querySelector("#outlet");
  const homepage = copyHomepageTemplate();
  if (homepage) {
    outlet?.append(homepage);
  }

  console.log("homepage: ");
}

//main();

window.addEventListener("DOMContentLoaded", main);
// homepage.content
