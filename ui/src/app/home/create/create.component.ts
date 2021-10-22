import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { FormGroup, FormControl } from '@angular/forms';
import { Horse } from 'src/app/models/horse';
import { AppService } from '../../app.service';
import { Validators } from '@angular/forms';
import { Output, EventEmitter } from '@angular/core';

import colours from 'src/app/models/colours';

import { NgbModal, NgbTypeaheadConfig } from '@ng-bootstrap/ng-bootstrap';

const listOfColours = colours;

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

  postRequestResponse: string | undefined;
  closeResult = '';
  public model: any;

  @Output() newHorseEvent = new EventEmitter<any>();

  form = new FormGroup({
    name: new FormControl('', [Validators.required]),
    colour: new FormControl('', [Validators.required]),
    speed: new FormControl('', [Validators.required]),
    breed: new FormControl('', [Validators.required]),
    img: new FormControl('')
  })

  constructor(private modalService: NgbModal, config: NgbTypeaheadConfig, private appService: AppService) {
  }


  open(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' })
  }

  onSubmit() {
    this.createHorse();
  }

  //create a horse from form and write it in DB
  createHorse() {
    var horse: Horse;
    horse = {
      name: this.form.value.name,
      colour: this.form.value.colour,
      speed: this.form.value.colour,
      breed: this.form.value.colour,
      img: this.form.value.img
    }
    this.appService.sendDataHorse(horse).subscribe((data: any) => {
      this.postRequestResponse = data.content;
      this.appService.getHorses();
    });

  }


  //typeahead for colours
  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(100),
      distinctUntilChanged(),
      map(term => term.length < 2 ? []
        : colours.filter(v => v.toLowerCase().startsWith(term.toLocaleLowerCase())).splice(0, 10))
    )


  //get form fields
  get name() { return this.form.get('name'); }

  get colour() { return this.form.get('colour'); }

  get breed() { return this.form.get('breed'); }

  get speed() { return this.form.get('speed'); }


}