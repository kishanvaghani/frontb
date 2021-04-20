import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-properity-card',
  templateUrl: './properity-card.component.html',
  styleUrls: ['./properity-card.component.scss']
})
export class ProperityCardComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {}
  @Input() Properity:any;
}