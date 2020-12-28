import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { TokenStorageService } from '../services/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: any = {}
  isLoggedIn = false
  isLoginFailed = false
  errorMessage = ''
  roles: string[] = []

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService, private router: Router) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
    }
  }

  onSubmit(): void {
    this.authService.login(this.form).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken)
        this.tokenStorage.saveUser(data)

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.rerouteToPage();
      },
      err => {
        this.errorMessage = err.error.message
        this.isLoginFailed = true;
      }
    )

  }

  rerouteToPage(): void {
    this.router.navigate(['/movies']);
  }

}
