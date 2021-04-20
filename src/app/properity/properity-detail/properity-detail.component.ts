import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-properity-detail',
  templateUrl: './properity-detail.component.html',
  styleUrls: ['./properity-detail.component.scss']
})
export class ProperityDetailComponent implements OnInit {
properityId:number;
  constructor(private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.properityId= Number(this.route.snapshot.params['id']);
    this.route.params.subscribe(
      params=>{
        this.properityId=+params['id'];
      }
    )
  }
  onSelectNext(){
    this.properityId +=1;
    this.router.navigate(['properity-detail',this.properityId]);
  }

}
