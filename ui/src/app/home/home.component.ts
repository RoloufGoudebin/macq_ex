import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Horse } from '../models/horse';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor(private titleService: Title) { }

  ngOnInit() {

  }

}
