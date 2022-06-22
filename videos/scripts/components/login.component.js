import { Component } from "./component";
import { UserService } from "../services/user.service";
import { AuthService } from "../services/auth.service";

export class LoginPage extends Component {
  constructor() {
    super();
    console.log("LoginPage constructor");
    this.renderPage("#login");
    this.setupForm();
  }
  setupForm() {
    /**
     * @type {HTMLFormElement|null}
     */
    const $form = document.querySelector("#loginForm");
    $form?.addEventListener("submit", (evt) => {
      evt.preventDefault();
      console.log("login component log evt: ", { evt });
      const formData = new FormData($form);
      console.log("login formData: ", { formData });

      const fields = new Map(formData);

      console.log("fields: ", fields);
      //$form.append(this.createSuccessRegistrationMessage());
      //   createSuccessRegistrationMessage();
      //   window.videos.UserService.addUser({
      //     id: String(Date.now()),
      //     name: `${fields.get("name")} ${fields.get("surname")}`,
      //     avatarUrl: "",
      //     login: fields.get("email"),
      //     password: "9e27a9ab5a41fe2425657023160d46c854c75126",
      //     __DO_NOT_USE__password: fields.get("password"),
      //   }).then((response) => {
      //     console.log("status", { response });
      //     location.hash ='#/registration-complete';
      //     renderApp();
      //   });

      UserService.auth({
        login: fields.get("email"),
        password: fields.get("password"),
      }).then((status) => {
        console.log("login status:", status);
        AuthService.login();
        if (status) {
          location.hash = "/";
        } else {
          $form.append(this.createLoginErrorMessage());
        }
      });
    });
  }

  createLoginErrorMessage() {
    const $message = document.createElement("p");
    $message.textContent = "Logowanie zakończyło się sukcesem";
    return $message;
  }
}
