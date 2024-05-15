import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';


const routes: Routes = [
 {path:'',redirectTo:'/home',pathMatch:'full'},
 {path:'home',component:HomeComponent},
 {path:'details/:id',component:UserDetailsComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
