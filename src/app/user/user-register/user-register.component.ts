import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

export interface register{
 
  name:string;
  email:string;
  mobile:number;
  password:string;
}

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})

export class UserRegisterComponent implements OnInit {

  constructor(private auth:AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(form){
    console.warn(form.value);
    this.auth.postProperity(form).subscribe((data)=>{
      console.warn(data);
      
    })
    
  }
}
