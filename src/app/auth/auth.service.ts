import { AuthData } from './auth-data.model';
import { User } from './user.model';
import { Subject } from 'rxjs';
export class AuthService {
  private user!: User | null;
  authChange = new Subject<boolean>();
  registerUser(authData: AuthData) {
    this.user = {
      email: authData.email,
      userId: Math.round(Math.random() * 10000).toString(),
    };
    this.authChange.next(true);
  }
  Login(authData: AuthData) {
    this.user = {
      email: authData.email,
      userId: Math.round(Math.random() * 10000).toString(),
    };
    this.authChange.next(true);
    console.log(this.user);
  }
  logout() {
    this.user = null;
    this.authChange.next(false);
  }
  getUser() {
    return { ...this.user };
  }
  isAuth() {
    return this.user != null;
  }
}
