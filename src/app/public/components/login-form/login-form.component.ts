import { Component, OnInit } from '@angular/core';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Router } from '@angular/router';
import { iAuthRequest } from 'src/app/core/interfaces/auth';
import { AuthService } from 'src/app/core/services/auth.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})

export class LoginFormComponent {

  constructor(private auth:AuthService, private router:Router) { }

  //Hecho usando NgModel
  authData:iAuthRequest = {
    userName : "",
    password : ""
  };

  async login(form:NgForm){
    //Valor del formulario para no usar NgModel
    console.log(form.value);
    const token = await this.auth.login(form.value);
    if(token) this.router.navigate(['']);
  }




  ngOnInit(): void {
  }

  iconoFacebook = faFacebook
  iconoTwitter = faTwitter
  iconoGoogle = faGoogle
  iconoLinkedin = faLinkedin
}
