const AuthService = {
    
    login() {
        StorageService.create('auth', true);
    },
    logout() {
        StorageService.delete('auth');
    },

  };
  
  globalThis.videos.AuthService = AuthService;
  