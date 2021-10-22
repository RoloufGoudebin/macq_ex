import { Component } from '@angular/core';

import { AppService } from './app.service';

import { Horse } from './models/horse';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  horses: Horse[];
  postRequestResponse: string | undefined;
  urlHorses = "/api/horses"

  constructor(private appService: AppService) {

  }
}
