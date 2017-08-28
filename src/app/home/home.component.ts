import { Component, OnInit } from '@angular/core';
import $ from 'jquery';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
      $(document).ready(function() {
          $('#animate_this').addClass('onload_anime');
      });


  }

}
