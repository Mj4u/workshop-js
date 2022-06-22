class NotFoundPage extends window.videos.Component {
    constructor() {
        super();
        console.log("NotFoundPage constructor");
        this.renderPage('#not-found');
    }
}

window.videos.NotFoundPage = NotFoundPage;