import { Component, OnInit,ViewChild} from '@angular/core';
import { AngularFire,FirebaseListObservable } from 'angularfire2';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import {Validators, FormGroup, FormBuilder} from '@angular/forms';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  @ViewChild('modal')
  modal: ModalComponent;
  users$: FirebaseListObservable<any[]>;
  users= [];
  addStudent: FormGroup;
  constructor(private af: AngularFire, private fb: FormBuilder) { 
    this.users$ = this.af.database.list('users'); 
    this.addStudent = this.fb.group({
          nume: ['', Validators.required],
          prenume: ['', Validators.required],
          email: ['', Validators.required],
          telefon: ['', Validators.required],
          medie:['', Validators.required],
          tip_invatamant:['', Validators.required],
          an:['', Validators.required],
          grupa:['', Validators.required]
      });
  }


  open() {
        this.modal.open();
  }

  ngOnInit() {
   this.users$.subscribe(x => {
    this.users = x;
   });
  }
  addSt(){
    console.log(this.addStudent.value);
    const data = {
      "tip_cont":'student',
      'nume':this.addStudent.value['nume'],
      'prenume':this.addStudent.value['prenume'],
      'telefon':this.addStudent.value['telefon'],
      'medie':this.addStudent.value['medie'],
      'tip_invatamant':this.addStudent.value['tip_invatamant'],
      'grupa':this.addStudent.value['grupa']
    };


    this.af.auth.createUser({
          email: this.addStudent.value['email'],
          password: "1234567"
    })
    .then(
        (success) => {
        console.log(success);
        this.af.database.object('users/'+success['uid']).set(data);
        this.modal.close();
       });
 
    //this.users$.push(this.addStudent.value);
  }

}
