import { StorageService } from "./storage.service";

export const AuthService = {
  login() {
    StorageService.create("auth", true);
  },
  logout() {
    StorageService.delete("auth");
  },
};
