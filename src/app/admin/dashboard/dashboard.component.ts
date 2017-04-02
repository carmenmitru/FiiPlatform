import { AngularFire } from 'angularfire2';
import { Component, OnInit ,ViewEncapsulation} from '@angular/core';
import { UsersComponent } from './users/users.component';
@Component({
  selector: 'app-dashboard',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  users;
  notifications:number;
  constructor(private af:AngularFire) { }

  ngOnInit() {
     this.users = this.af.database.list('requests').subscribe(x=>{
           this.notifications = x.length;
        });
  }

}
