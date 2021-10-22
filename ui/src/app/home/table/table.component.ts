import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { Horse } from 'src/app/models/horse';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit{

  horses : Horse[];
  constructor( private appService: AppService ) { }

  ngOnInit(){
    this.appService.getHorses()
  }
}
