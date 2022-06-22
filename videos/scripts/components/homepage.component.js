class Homepage extends window.videos.Component {
    constructor() {
        super();
        console.log("Homepage constructor");
        this.renderPage('#homepage');
    }
}

window.videos.Homepage = Homepage;