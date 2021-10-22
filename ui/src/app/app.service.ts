import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/index';

import { Horse } from './models/horse';
import { User } from './models/user';

/**
 * Class representing application service.
 *
 * @class AppService.
 */
@Injectable()
export class AppService {

  horses: Horse[];
  users: User[];

  constructor(private http: HttpClient) {
  }

  /**
   * Makes a http get request to retrieve all the horses from the backend service.
  */
  public getHorses(): void{
    this.http.get("/api/horses").subscribe((data: any) => {
      this.horses = data;
    })
    
  }

  /**
   * Makes a http post request to create a horse to backend.
   */
  public sendDataHorse(data: any,): Observable<any> {
    const headers = { 'Content-Type': 'application/json'}
    return this.http.post("/api/horses", data, {'headers':headers});
  }

  public getUsers(): void{
    this.http.get("/api/users").subscribe((data: any) => {
      this.users = data;
    })
  }
}
