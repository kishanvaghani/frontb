import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AddProperityComponent } from './properity/add-properity/add-properity.component';
import { ProperityCardComponent } from './properity/properity-card/properity-card.component';
import { ProperityDetailComponent } from './properity/properity-detail/properity-detail.component';
import { ProperityListComponent } from './properity/properity-list/properity-list.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';

const routes: Routes = [
  {
    path:'',
    component:ProperityListComponent
  },
  {
    path:'rent-properity',
    component:ProperityListComponent,
  },
  {
    path:'add-properity',
    component:AddProperityComponent,
  },
  {
    path:"properity-detail/:id",
    component:ProperityDetailComponent
    
  },
  {
    path:'login',
    component:UserLoginComponent,
  },
  {
    path:'register',
    component:UserRegisterComponent,
  },
  {
    path:"**",
    component:PageNotFoundComponent
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
