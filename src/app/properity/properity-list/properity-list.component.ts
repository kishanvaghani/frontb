import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from 'src/app/services/housing.service';

export interface IProperity{
  Id:number;
  Name:string;
  Type:string;
  price:number;
}

@Component({
  selector: 'app-properity-list',
  templateUrl: './properity-list.component.html',
  styleUrls: ['./properity-list.component.scss']
})
export class ProperityListComponent implements OnInit {

  constructor(private http:HousingService, private route:ActivatedRoute) { }
  Properities:Array<IProperity>;
  sellRent=1;
  
  ngOnInit(): void {
    if (this.route.snapshot.url.toString()) {
      this.sellRent=2;
    }
    this.http.getAllProperity(this.sellRent).subscribe(data=>{
      this.Properities=data;
      console.log(data)
    }, error=>  {
      console.log('httperror:');
      console.log(error);
      
      
    }
    )

  }

}
