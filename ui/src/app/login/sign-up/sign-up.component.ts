import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private appService: AppService, private modalService: NgbModal) { }

  closeResult ='';

  form = new FormGroup({
    mail: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    pwd: new FormControl('', [Validators.required]),

  })

  ngOnInit() {
    this.appService.getUsers();
  }

  onSubmit() {
    this.sendDataUser()
  }

  sendDataUser() {
    let user = {
      mail: this.form.value.mail,
      name: this.form.value.name,
      pwd: this.form.value.pwd
    }
    this.appService.sendDataUser(user).subscribe((data: any) => {
      this.appService.getUsers();
    });
    this.form.reset();

  }

  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'})
  }

}