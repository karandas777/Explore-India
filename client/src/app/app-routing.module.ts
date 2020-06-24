import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { InsertComponent } from './insert/insert.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth.guard';
import { InsertpostComponent } from './insertpost/insertpost.component';
import { PostComponent } from './post/post.component';


const routes: Routes = [
  {path:'' , component:LoginComponent},
  {path:'login' , component:LoginComponent},
  {path:'signup', component:SignupComponent},
  {path:'home', component:HomeComponent, canActivate:[AuthGuard] ,children:[
    {path:'insert-category',component:InsertComponent, canActivate:[AuthGuard]},
    {path:'view-category' , component:CategoryComponent, canActivate:[AuthGuard]},
    {path:'insert-post' , component:InsertpostComponent, canActivate:[AuthGuard]},
    {path:'view-post' , component:PostComponent, canActivate:[AuthGuard]}
  ]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
