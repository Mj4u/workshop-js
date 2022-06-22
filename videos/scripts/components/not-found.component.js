import { Component } from "./component";

export class NotFoundPage extends Component {
    constructor() {
        super();
        console.log("NotFoundPage constructor");
        this.renderPage("#not-found");
    }
}
