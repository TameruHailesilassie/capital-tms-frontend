import { FormBuilder } from "@angular/forms";
import { LoginComponent } from "./login.component";

describe("LoginComponent", () => {
  let fixure: LoginComponent;
  let formBuilderMock: FormBuilder;
  let authFackserviceMock: any;
  let roleBasedRoutingServiceMock: any;

  beforeEach(() => {
    authFackserviceMock = {
      login: jest.fn(),
    };
    roleBasedRoutingServiceMock = {
      routeToLanding: jest.fn(),
    };

    formBuilderMock = new FormBuilder();
    fixure = new LoginComponent(
      formBuilderMock,
      authFackserviceMock,
      roleBasedRoutingServiceMock
    );
    fixure.ngOnInit();
  });

  it("initialize the form", () => {
    const loginForm = {
      email: "",
      password: "",
    };
    expect(fixure.loginForm.value).toEqual(loginForm);
  });

  it("set submitted flag", () => {
    fixure.onSubmit();
    expect(fixure.submitted).toBeTruthy();
  });

  it("invalidate form", () => {
    fixure.loginForm.controls.email.setValue("tameruh.s@gmail.com");
    fixure.loginForm.controls.password.setValue("");
    expect(fixure.loginForm.valid).toBeFalsy();
  });

  it("shouldn't call service if form invalid", () => {
    fixure.loginForm.controls.email.setValue("");
    fixure.loginForm.controls.password.setValue("453456");
    fixure.onSubmit();
    expect(authFackserviceMock.login).not.toHaveBeenCalled();
  });

  it("should call login service", () => {
    fixure.loginForm.controls.email.setValue("tata@gmail.com");
    fixure.loginForm.controls.password.setValue("453456");
    const spyLogin = jest
      .spyOn(authFackserviceMock, "login")
      .mockReturnValue(true);
    expect(
      authFackserviceMock.login(
        fixure.loginForm.controls.email.value,
        fixure.loginForm.controls.password.value
      )
    ).toBe(true);
  });

  it("should toggle password visibility", () => {
    fixure.visiblePassword = false;
    fixure.togglePasswordField();
    expect(fixure.visiblePassword).toBeTruthy();
  });
});
