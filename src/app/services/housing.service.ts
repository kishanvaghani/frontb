import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { IProperity } from '../properity/properity-list/properity-list.component';
@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http:HttpClient) { }
  getAllProperity(sellRent:number):Observable<IProperity[]>{
    return this.http.get('data/properities.json').pipe(
      map(data=>{
        const properitiesArray:Array<IProperity>=[];
        for(const id in data){
          if(data.hasOwnProperty(id) && data[id].sellRent === sellRent){
          properitiesArray.push(data[id])
          }
        }
        return properitiesArray;
      })
    );
  }
}
