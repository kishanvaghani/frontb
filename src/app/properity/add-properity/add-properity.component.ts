import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-properity',
  templateUrl: './add-properity.component.html',
  styleUrls: ['./add-properity.component.scss']
})
export class AddProperityComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(Form:NgForm){
    console.log(Form);
  }
}
