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
    /*this.appService.getWelcomeMessage().subscribe((data: any) => {
      this.title = data.content;
    });*/
  }

  /**
   * This method is used to test the post request
   */
  public postHorse(): void {
    let newHorse: Horse;
    newHorse = {
      name: "proutttt",
      colour: "bleue",
      speed: "200",
      breed: "moche",
      img: "prout.be"
    }
    console.log(newHorse);
    this.appService.sendData(newHorse, this.urlHorses).subscribe((data: any) => {
      this.postRequestResponse = data.content;
    });
  }
}
