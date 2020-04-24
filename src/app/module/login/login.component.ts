import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { BaseComponent } from '../base.component';
import {AuthService} from '../../../app/service/auth.service';
import {AppLoaderService} from '../../../app/service/app-loader.service';
import {AppComponent} from '../../../app/app.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends BaseComponent implements OnInit 
{
  input = { mobile_number: '', password: ''} ;
  // userID: string;
  // password: string;

  public authService: AuthService;
  constructor(private router: Router,
    authService: AuthService, public apploaderService: AppLoaderService) 
    { 
      super();
    this.authService = authService;
    }

  ngOnInit()
  {
    this.router.navigate(['']);
  }

  protected checkAuthentication() 
  {
    return;
  }

  login() 
  {
    try {
      this.authService.authenticate(this.input).subscribe(
        data => {
          console.log(data);

          if (data['token'] != '') {
            // redirect to home page
            // this.apploaderService.getMasterWithAuth();
            // console.log(data['token']) ;
            AppComponent.user_id = this.input.mobile_number ;
            this.router.navigate(['pddashboard']);
          } else {
            alert('Invalid Credentials!');
          }
        }
      );
    } catch (e) {
      this.handleExcception(e);
    }
  }

}
