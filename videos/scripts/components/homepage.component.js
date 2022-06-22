
import { Component } from "./component";

export class Homepage extends Component {
    constructor() {
        super();
        console.log("Homepage constructor");
        this.renderPage("#homepage");
    }
}
