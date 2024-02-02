import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CakelistComponent } from './cakelist/cakelist.component';
import { CakedetailComponent } from './cakedetail/cakedetail.component';
import { CartlistComponent } from './cartlist/cartlist.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { IndexpageComponent } from './indexpage/indexpage.component';

const routes: Routes = [
  {path:"",component:IndexpageComponent},
  {path:"register",component:RegisterComponent},
  {path:"login",component:LoginComponent},
  {path:"cakelist",component:CakelistComponent},
  {path:"cakes/:id",component:CakedetailComponent},
  {path:"cartlist",component:CartlistComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
