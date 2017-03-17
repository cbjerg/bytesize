import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';
declare var $;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit{
  title = 'welcome to bytesize!';
  item: FirebaseObjectObservable<any>;

  constructor(private af: AngularFire) {
    this.item = af.database.object('/items/test');
    console.log(this.item);
  }

  ngOnInit() {
    $('.button-collapse').sideNav();
  }
}
