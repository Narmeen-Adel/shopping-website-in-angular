import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ProductsComponent } from './components/products/products.component';
import { NavComponent } from './components/nav/nav.component';
import { SingleProductComponent } from './components/single-product/single-product.component';
import { RegisterComponent } from './components/register/register.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { CardPageComponent } from './components/card-page/card-page.component';

const routes: Routes = [
{path:'',component:RegisterComponent},
{path: 'login',component:LoginComponent },
{path:'home',component:HomeComponent},
{path:'nav',component:NavComponent},
{path:'card',component:CardPageComponent},
{path:'product/:id',component:SingleProductComponent},
{path:'**',component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
