import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SortarticlesComponent } from './sortarticles/sortarticles.component';
import { AllarticlesComponent } from './allarticles/allarticles.component';
import { ArticledetailComponent } from './articledetail/articledetail.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'articles/:city',component:SortarticlesComponent},
  {path:'all-articles',component:AllarticlesComponent},
  {path:'article-details/:location',component:ArticledetailComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration:"enabled"})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
