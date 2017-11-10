import { Component, OnInit } from '@angular/core';
import { MyServiceClass } from '../../app.services';
@Component({
  selector: 'app-results2017',
  templateUrl: './results2017.component.html',
  styleUrls: ['./results2017.component.css']
})
export class Results2017Component implements OnInit {

  constructor() { }

  ngOnInit(private _exampleService: MyServiceClass) {
  }


  getranks(stage,category,year){
    let formData = new FormData();
    let url = "http://www.hastpa.org/testing/hastpa_api/timing_api/archive/2017.php"
    formData.append('stage',stage);
    formData.append('category',category);
    formData.append('year',year);

    this._exampleService.someMethod(url,formData).subscribe(result =>{
      console.log(result);
    }

  }





}
