import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Horse } from '../models/horse';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private urlHorses = "/api/horses";
  horses: Horse[];

  constructor(private appService: AppService) { }

  ngOnInit() {
    console.log("prout");
    this.getHorse();
  }

  public getHorse(): void {
    this.appService.getData(this.urlHorses).subscribe((data: Horse[]) => {
      this.horses = data
      console.log(this.horses[0]);
    })
  }

}
