import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  loadedFeature = 'recipe';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyADQ9gbqfeGHEXjRNAeFKzCd2m9PqWx4ao",
      authDomain: "jf-ng-recipe-book.firebaseapp.com"
    });

  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
