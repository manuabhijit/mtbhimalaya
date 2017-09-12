import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-travel-guide',
  templateUrl: './travel-guide.component.html',
  styleUrls: ['./travel-guide.component.css']
})
export class TravelGuideComponent implements OnInit {

  breadcrum="Travel Guide";
  constructor() { }

  ngOnInit() {
  }

}
