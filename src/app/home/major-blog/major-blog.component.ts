import { Component, OnInit } from '@angular/core';
import { MyServiceClass } from '../../app.services';
import $ from 'jquery';

@Component({
  selector: 'app-major-blog',
  templateUrl: './major-blog.component.html',
  styleUrls: ['./major-blog.component.css']
})
export class MajorBlogComponent implements OnInit {

  constructor(private _exampleService: MyServiceClass) { }

  riders = [];
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
