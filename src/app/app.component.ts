import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component(
{
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Myfirst';

  static user_id : string = '' ;

  static objects = {}; // dictionary for storing the object key and list

  constructor(public router: Router) {
    // console.log('app component') ;
  }

  ngOnInit() 
  {

  }
}
