import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { register } from '../user/user-register/user-register.component';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  
  url=environment.baseUrl;
  constructor(private http:HttpClient) { }

  postProperity(postProperity:any):Observable<register>{
    return this.http.post<register>(this.url, postProperity);
  } 
}
