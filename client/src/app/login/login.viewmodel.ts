import { LoginDTO } from './loginDTO.model';

export class LoginViewModel {
  public loginDTO: LoginDTO;

  public UsernameError: string;
  public PasswordError: string;
  public AuthError: string;
  public LoginButtonClicked: boolean;

  constructor() {
    this.loginDTO = new LoginDTO( null, null);
    this.UsernameError = null;
    this.PasswordError = null;
    this.AuthError = null;
    this.LoginButtonClicked = false;
  }
}
