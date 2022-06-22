class Component {
    copyTemplate(selector) {
        /**
         * @type {HTMLTemplateElement|null}
         */
        const template = document.querySelector(selector);
        return template?.content.cloneNode(true);
      }
      
      render(page) {
        if (!page) {
          throw new Error("Page is not defined");
        }
        const outlet = document.querySelector("#outlet");
        if (!outlet) {
          throw new Error("outlet is not defined");
        }
      
        while (outlet.firstElementChild) {
          outlet.firstElementChild.remove();
        }
        outlet.append(page);
      }
      
      renderPage(selector) {
        this.render(this.copyTemplate(selector));
      }
}

window.videos.Component = Component;