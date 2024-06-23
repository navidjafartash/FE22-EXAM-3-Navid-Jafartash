import { HomeComponent } from './home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopComponent } from './shop/shop.component';
import { HeroComponent } from './hero/hero.component';
import { DetailsComponent } from './details/details.component';
import { CartComponent } from './cart/cart.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {
    path: "home",
    component: HeroComponent,
  },
  {
  path:"shop", component: ShopComponent
  },
  {
    path:"details/:x", component: DetailsComponent
  },
  {
    path: "cart", component: CartComponent

  },
  {
    path: "about", component: AboutComponent

  },
  {
    path: "**", component: HeroComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
