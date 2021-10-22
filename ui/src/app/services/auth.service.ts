import { Injectable } from '@angular/core';
import { AppService } from '../app.service';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn= false;

  constructor(private appService: AppService) { }


  //check if user is in DB and if it's the same pwd
  signIn(mail:string, pwd: string){
    for(let user of this.appService.users){
      if(mail===user.mail){
        if(pwd===user.pwd){
          this.isLoggedIn = true;
        }
      }
    }
  }
}
