import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {Validators, FormGroup, FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';
import { AngularFire,FirebaseListObservable} from 'angularfire2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  username = {
    email: ''
  };
  users;
  currentUser;
  constructor(private fb: FormBuilder, private router: Router, private af: AngularFire) {
          this.users = this.af.database.list('users').subscribe(x=>{
            console.log(x);
          });
          this.form = this.fb.group({
          email: ['', Validators.required],
          password: ['', Validators.required]
      });
   }

  ngOnInit() {
  }

  login() {
    const loginformValue = this.form.value;
    if (loginformValue.email && loginformValue.password ) {
      console.log(loginformValue);
      this.af.auth.login({
        email: loginformValue.email,
        password: loginformValue.password
      }).then(
        (success) => {
        console.log(success);
        console.log(success['uid']);
       this.currentUser =   this.af.database.object(`users/${success['uid']}`).subscribe(x=>{
          console.log(x);
          if(x['tip_cont'] == 'student'){
            console.log('student');
               this.router.navigate(['student/newsfeed']);
          }
          if(x['tip_cont'] == 'admin'){
            console.log('admin');
               this.router.navigate(['admin/dashboard/users']);
          }
       });
      }).catch(
        (err) => {
        console.log(err);
        this.router.navigate(['/login']);
      });
    }

  }
}
