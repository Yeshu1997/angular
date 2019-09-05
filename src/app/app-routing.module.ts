import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 import { HomeComponent } from './home/home.component';
import { VlistComponent }from './vlist/vlist.component';
import { SearchComponent } from './search/search.component';
import { FavouriteComponent } from './favourite/favourite.component';
const routes: Routes = [
  { path:'home',component:HomeComponent},
  { path:'vlist/:elements', component:VlistComponent},
  { path:'search',component:SearchComponent},
 { path:'favourite',component:FavouriteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingcomponents=[HomeComponent,VlistComponent ,SearchComponent,FavouriteComponent ]