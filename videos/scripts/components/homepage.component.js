class Homepage extends globalThis.videos.Component {
    constructor() {
        super();
        console.log("Homepage constructor");
        this.renderPage('#homepage');
    }
}

globalThis.videos.Homepage = Homepage;