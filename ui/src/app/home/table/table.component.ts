import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Horse } from 'src/app/models/horse';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() horses : '';
  constructor() { }

  ngOnInit() {
    console.log()
  }

}
