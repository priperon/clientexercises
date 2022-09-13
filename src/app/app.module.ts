import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// added imports
import { MatComponentsModule } from './mat-components/mat-components.module';
import { HomeComponent } from './home/home.component';
import { EmployeeModule } from './employee/employee.module';
@NgModule({
declarations: [
AppComponent,
HomeComponent
],
imports: [
BrowserModule,
AppRoutingModule,
BrowserAnimationsModule,
HttpClientModule,
MatComponentsModule,
EmployeeModule,
],
providers: [],
bootstrap: [AppComponent]
})
export class AppModule { }
// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// // added imports
// import { MatButtonModule } from '@angular/material/button';
// import { MatCardModule } from '@angular/material/card';
// import { MatMenuModule } from '@angular/material/menu';
// import { MatToolbarModule } from '@angular/material/toolbar';
// import { MatIconModule } from '@angular/material/icon';
// import { MatListModule } from '@angular/material/list';
// @NgModule({
//   declarations: [
//     AppComponent
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule,
//     BrowserAnimationsModule,
//     MatButtonModule,
//     MatMenuModule,
//     MatCardModule,
//     MatToolbarModule,
//     MatIconModule,
//     MatListModule
//     ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }
