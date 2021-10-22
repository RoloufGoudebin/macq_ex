import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/index';

import { Horse } from './models/horse';

/**
 * Class representing application service.
 *
 * @class AppService.
 */
@Injectable()
export class AppService {

  horses: Horse[];

  constructor(private http: HttpClient) {
  }

  /**
   * Makes a http get request to retrieve the welcome message from the backend service.
  */
  public getHorses(): void{
    this.http.get("/api/horses").subscribe((data: any) => {
      this.horses = data;
    })
    
  }

  /**
   * Makes a http post request to send some data to backend & get response.
   */
  public sendDataHorse(data: any,): Observable<any> {
    const headers = { 'Content-Type': 'application/json'}
    return this.http.post("/api/horses", data, {'headers':headers});
  }
}
