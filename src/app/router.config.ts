import { MateriiComponent } from './student/materii/materii.component';

import { CalendarComponent } from './student/calendar/calendar.component';
import { Route } from '@angular/router';
import { LoginComponent } from './login/login.component';

// Admin
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { UsersComponent } from './admin/dashboard/users/users.component';
import { NewsComponent } from './admin/dashboard/news/news.component';

// Student
import { NewsfeedComponent } from './student/newsfeed/newsfeed.component';
import { HelpComponent } from './student/help/help.component';
import { SituatieComponent } from './student/situatie/situatie.component';
import { PaymentComponent } from './student/payment/payment.component';

// AuthGuard
import { AuthGuard } from './security/auth.service';

export const routerConfig: Route[] = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'admin',
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent,
                children: [
                    {
                        path: 'users',
                        component: UsersComponent
                    }
                ]
            },
            {
                path:'news',
                component:NewsComponent
            }
        ]
    },
     {
        path: 'student',
        children: [
            {
                path: 'newsfeed',
                component: NewsfeedComponent
            },
            {
                path: 'help',
                component: HelpComponent
            },
            {
                path: 'situatie',
                component: SituatieComponent
            },
            {
                path: 'calendar',
                component: CalendarComponent
            },
            {
                path: 'payment',
                component: PaymentComponent
            },
            {
                path: 'materii',
                component: MateriiComponent
            }
        ]
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: 'login'
    }
];



