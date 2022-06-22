import { AuthService } from "./auth.service";

export const UserService = {
    isAuthorized:false,
    
  addUser(user) {
    return fetch("https://fakes.herokuapp.com/users", {
      method: "post",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      return response.json();
    });
  },

  auth(credentials) {
    return fetch("https://fakes.herokuapp.com/users")
      .then((response) => {
        return response.json();
      })
      .then((users) => {
        const authenticateUser = users.find((user) => {
          return (
            user.login === credentials.login &&
            user.__DO_NOT_USE__password === credentials.password
          );
        });
       
        //kotlog 
        const status = authenticateUser !== undefined;
        if (status){
            AuthService.login();
        }
        return status;
        // StorageService.create('auth', false)
        // UserService.isAuthorized = status;
      });
  },
};


