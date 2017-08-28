import { Component, OnInit } from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'app-our-tags',
  templateUrl: './our-tags.component.html',
  styleUrls: ['./our-tags.component.css']
})
export class OurTagsComponent implements OnInit {

  constructor() { }

  ngOnInit() {



      setInterval(function(){
        var today = new Date(new Date());
        var thatday = new Date(new Date("2017-09-29T12:00:00"));
        //var today = new Date(new Date());
        //$("#days").text(day);
        console.log();




      }, 1000);

  }

}
