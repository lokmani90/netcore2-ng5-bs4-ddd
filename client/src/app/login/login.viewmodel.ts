import { LoginDTO } from './loginDTO.model';

export class LoginViewModel {
  public loginDTO: LoginDTO;

  public UsernameError: string;
  public PasswordError: string;
}
