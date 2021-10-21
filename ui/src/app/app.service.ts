import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { Horse } from './models/horse';
import { Observable } from 'rxjs/index';

/**
 * Class representing application service.
 *
 * @class AppService.
 */
@Injectable()
export class AppService {

  constructor(private http: HttpClient) {
  }

  /**
   * Makes a http get request to retrieve the welcome message from the backend service.
  */
  public getData(url:string): Observable<any> {
    return this.http.get(url).pipe(
      map(response => response)
    );
  }

  /**
   * Makes a http post request to send some data to backend & get response.
   */
  public sendData(data: any, url:string): Observable<any> {
    const headers = { 'Content-Type': 'application/json'}
    return this.http.post(url, data, {'headers':headers});
  }
}
