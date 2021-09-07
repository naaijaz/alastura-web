import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { PushspliceComponent } from './pushsplice/pushsplice.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ProductsComponent } from './products/products.component';
import { ContactusComponent } from './contactus/contactus.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { VegetableComponent } from './products/vegetable/vegetable.component';
import { FruitComponent } from './products/fruit/fruit.component';
import { PoultryComponent } from './products/poultry/poultry.component';
import { MeatComponent } from './products/meat/meat.component';
import { FooterComponent } from './footer/footer.component';
import {FormsModule}  from "@angular/forms";

const appRoutes:Routes=[
{path:'', redirectTo:'home', pathMatch:'full'},
{path:'login', component:LoginComponent},
{path:'home', redirectTo:'home/products?category=Vegetable'},
{path:'home', component:HomeComponent,children:[
  {path:'products', component:ProductsComponent},
  {path:'Vegetable', component:VegetableComponent},
  {path:'Fruit', component:FruitComponent},
  {path:'Poultry', component:PoultryComponent},
  {path:'Meat', component:MeatComponent}
]},

{path:'aboutus', component:AboutusComponent},
{path:'products', redirectTo:'products/Vegetable'},
{path:'products',component:ProductsComponent,children:[

  {path:'Vegetable', component:VegetableComponent},
  {path:'Fruit', component:FruitComponent},
  {path:'Poultry', component:PoultryComponent},
  {path:'Meat', component:MeatComponent}
]},
{path:'contactus', component:ContactusComponent},
{path:"* *", component:PagenotfoundComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    NgIfComponent,
    NgForComponent,
    PushspliceComponent,
    HomeComponent,
    AboutusComponent,
    ProductsComponent,
    ContactusComponent,
    LoginComponent,
    PagenotfoundComponent,
    VegetableComponent,
    FruitComponent,
    PoultryComponent,

    MeatComponent,
     FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule, 
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
