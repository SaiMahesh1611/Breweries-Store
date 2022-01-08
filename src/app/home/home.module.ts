import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AngularMaterialModule } from '../Angular-material/angular-material.module';
import { DataTableComponent } from './data-table/data-table.component';



@NgModule({
  declarations: [
    HomeComponent,
    DataTableComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [AngularMaterialModule],
})
export class HomeModule { }
