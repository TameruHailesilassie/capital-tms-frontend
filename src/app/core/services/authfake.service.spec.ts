import { AuthfakeauthenticationService } from "./authfake.service";

describe("Auth Service Test", () => {
  let authService: AuthfakeauthenticationService;
  const http = jest.fn();
  beforeEach(() => {
    authService = new AuthfakeauthenticationService(http as any);
    window.localStorage.clear();
  });

  describe("test: currentuserValue", () => {
    it("should be null", () => {
      expect(authService.currentUserValue).toBeNull();
    });
  });

  describe("test:logout", () => {
    it("clear localstorage", () => {
      window.localStorage.removeItem("currentUser");
      expect(authService.currentUserValue).toBeNull();
    });
  });

  
});
