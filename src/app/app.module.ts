import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
// import { TooltipModule } from 'ngx-bootstrap/tooltip';
// import { ModalModule } from 'ngx-bootstrap/modal';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { LoginComponent } from './components/login/login.component';
import { InputComponent } from './components/shared/input/input.component';
import { SubmitComponent } from './components/shared/submit/submit.component';
import { HomeComponent } from './components/home/home.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { ProductsComponent } from './components/products/products.component';
import { HttpService } from   './services/http.service';
import { NavComponent } from './components/nav/nav.component';
import { SingleProductComponent } from './components/single-product/single-product.component';
import {StreamService} from './services/stream.service';
import { CardPageComponent } from './components/card-page/card-page.component';
import { RegisterComponent } from './components/register/register.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InputComponent,
    SubmitComponent,
    HomeComponent,
    ProductItemComponent,
    ProductsComponent,
    NavComponent,
    SingleProductComponent,
    CardPageComponent,
    RegisterComponent,
    NotFoundComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [HttpService,StreamService],
  bootstrap: [AppComponent]
})
export class AppModule { }
