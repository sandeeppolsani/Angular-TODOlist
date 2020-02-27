import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { AddComponent } from './views/add/add.component';
import { DataproviderService } from './dataprovider.service';
import {FormsModule} from '@angular/forms'
import { from } from 'rxjs';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [DataproviderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
