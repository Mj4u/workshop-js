class RegistrationPage extends globalThis.videos.Component {
  constructor() {
    super();
    console.log("RegistrationPage constructor");
    this.renderPage("#registration");
    this.setupForm();
  }

  setupForm() {
    /**
     * @type {HTMLFormElement|null}
     */
    const $form = document.querySelector("#registrationForm");
    $form?.addEventListener("submit", (evt) => {
      evt.preventDefault();
      console.log("registration component log evt: ", { evt });
      const formData = new FormData($form);
      console.log("formData: ", { formData });

      const fields = new Map(formData);

      console.log("fields: ", fields);
      window.videos.UserService.addUser({
        id: String(Date.now()),
        name: `${fields.get("name")} ${fields.get("surname")}`,
        avatarUrl: "",
        login: fields.get("email"),
        password: "9e27a9ab5a41fe2425657023160d46c854c75126",
        __DO_NOT_USE__password: fields.get("password"),
      }).then((response) => {
        console.log("status", { response });
        location.hash ='#/registration-complete';
        renderApp();
      });
    });
  }
  createSuccessRegistrationMessage(){
    const $message = document.createElement('p');
    $message.textContent = "Rejestracja zakończyła się sukcesem";
    return $message;
    }
};

globalThis.videos.RegistrationPage = RegistrationPage;
