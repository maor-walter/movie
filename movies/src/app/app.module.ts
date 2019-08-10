import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef  } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule} from '@angular/material/button';
import { MatCheckboxModule} from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material';
import { HomeComponent } from './components/home/home.component';
import { MovieComponent } from './components/movie/movie.component';
import { ManagmentComponent } from './components/managment/managment.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { CommonModule } from '@angular/common';

import { AgmCoreModule } from '@agm/core';
import { MapModalComponent } from './map-modal/map-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    MovieComponent,
    ManagmentComponent,
    StatisticsComponent,
    MapModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatFormFieldModule,
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC6Oo3L2h-hkBHymAhprLoXQX9tnDwbsNs'
    })
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
