import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private appService: AppService, private authService: AuthService, private router: Router) { }

  form = new FormGroup({
    mail: new FormControl('', [Validators.required]),
    pwd: new FormControl('', [Validators.required]),

  })

  ngOnInit() {
    this.appService.getUsers();
  }

  onSubmit(){
    this.authService.signIn(this.form.value.mail, this.form.value.pwd);
    this.router.navigate(['/']);
  }

}
