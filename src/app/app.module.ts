import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatCardModule} from '@angular/material/card';
import { AngularMaterialModule } from './Angular-material/angular-material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
// import { MatError } from '@angular/material/form-field';
import "@angular/compiler";
import {MatFormFieldModule} from '@angular/material/form-field';
import { LoginComponent } from './Pages/login/login.component';
import {MatNativeDateModule} from '@angular/material/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    AngularMaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatToolbarModule,
    HttpClientModule
    // MatError
  ],
  exports: [ MatFormFieldModule, MatToolbarModule,AngularMaterialModule, MatButtonModule,
    MatIconModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
