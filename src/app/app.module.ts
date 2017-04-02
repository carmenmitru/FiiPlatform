

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {ReactiveFormsModule} from '@angular/forms';
import {CustomFormsModule } from 'ng2-validation';
// Firebase
import { AngularFireModule } from 'angularfire2';

// Components
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

// Config AngularFire
import { firebaseConfig, authConfig} from './../environments/firebase.config';
import { AuthGuard } from './security/auth.service';

// Routing
import {RouterModule} from '@angular/router';
import {routerConfig} from './router.config';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { UsersComponent } from './admin/dashboard/users/users.component';

// Angular 2 NgModule
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { NewsfeedComponent } from './student/newsfeed/newsfeed.component';
// import { NavigationStudentComponent } from './student/navigation/navigation.component';
import { Ng2FilterPipeModule } from 'ng2-filter-pipe';

import {CalendarModule} from "ap-angular2-fullcalendar";
import { HelpComponent } from './student/help/help.component';
import { SituatieComponent } from './student/situatie/situatie.component';
import { CalendarComponent } from './student/calendar/calendar.component';
import { NewsComponent } from './admin/dashboard/news/news.component';
import { PaymentComponent } from './student/payment/payment.component';
import { MateriiComponent } from './student/materii/materii.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    UsersComponent,
    NewsfeedComponent,
    HelpComponent,
    SituatieComponent,
    CalendarComponent,
    NewsComponent,
    PaymentComponent,
    MateriiComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    CustomFormsModule,
    Ng2Bs3ModalModule,
    Ng2FilterPipeModule,
    CalendarModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig,authConfig),
    RouterModule.forRoot(routerConfig)
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
