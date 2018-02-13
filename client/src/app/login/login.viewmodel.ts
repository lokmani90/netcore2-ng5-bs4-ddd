import { LoginDTO } from './loginDTO.model';

export class LoginViewModel {
  public loginDTO: LoginDTO;

  public UsernameError: string;
  public PasswordError: string;
  public AuthError: string;

  constructor() {
    this.loginDTO = new LoginDTO('', '');
    this.UsernameError = '';
    this.PasswordError = '';
    this.AuthError = '';
  }
}
