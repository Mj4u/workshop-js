class NotFoundPage extends globalThis.videos.Component {
    constructor() {
        super();
        console.log("NotFoundPage constructor");
        this.renderPage('#not-found');
    }
}

globalThis.videos.NotFoundPage = NotFoundPage;