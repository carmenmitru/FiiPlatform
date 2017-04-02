import { AngularFire } from 'angularfire2';
import { Component, OnInit,ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-news',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  denumire;
  data;
  descriere;
  news;
  constructor(private af:AngularFire) { }

  ngOnInit() {
    this.af.database.list('newsfeed').subscribe(x=>{
           this.news = x;
        });
  }

  addNews(){
    console.log(this.denumire,this.data,this.descriere);
    this.af.database.list('newsfeed').push({
      "data":this.data,
      "title":this.denumire,
      "descriere":this.descriere
    })
    this.denumire="";
    this.data = "";
    this.descriere="";
  }

}
