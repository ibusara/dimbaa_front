import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/core/services/authentication.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginFormComponent implements OnInit {

  error: string | null = null

  loginForm = new FormGroup({
    email: new FormControl('superadmin@dimbaa.com', [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('123456', [
      Validators.required,
      Validators.minLength(6)
    ]),
  })

  constructor(
    public loginService: AuthenticationService) { }

  ngOnInit(): void { }

  login() {
    console.log('login');
    let model: any = {};
    (model['email'] =  this.loginForm.get('email')?.value  ),
    (model['password'] = this.loginForm.get('password')?.value );
    this.loginService.login(model);
    
  };

  get email() { return this.loginForm.get('email') }
  get password() { return this.loginForm.get('password') }
}
