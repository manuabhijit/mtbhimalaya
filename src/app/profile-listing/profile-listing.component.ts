import { Component, OnInit } from '@angular/core';
import { MyServiceClass } from '../app.services';
import { Router, RouterModule } from '@angular/router';
import $ from 'jquery';


@Component({
  selector: 'app-profile-listing',
  templateUrl: './profile-listing.component.html',
  styleUrls: ['./profile-listing.component.css']
})
export class ProfileListingComponent implements OnInit {

  riders = [];

  constructor(private _exampleService: MyServiceClass) { }

  get_data(){
    let url = 'http://www.hastpa.org/testing/hastpa_api/get_profile_listing.php';
    let formData = new FormData();

    this._exampleService.someMethod(url,formData).subscribe(result =>{
      console.log(result);
      this.riders=result;
    });
  }

  ngOnInit() {
    this.get_data();
  }

}
