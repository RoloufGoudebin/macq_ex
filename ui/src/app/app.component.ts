import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  postRequestResponse: string | undefined;
  urlHorses = "/api/horses"

  constructor(private titleService: Title) {

  }

  ngOnInit(){
    this.titleService.setTitle("Macq Chevaux");
  }
}
