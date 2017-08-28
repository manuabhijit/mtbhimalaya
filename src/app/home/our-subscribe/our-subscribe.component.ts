import { Component, OnInit } from '@angular/core';
import { MyServiceClass } from '../../app.services';
import $ from 'jquery';


@Component({
  selector: 'app-our-subscribe',
  templateUrl: './our-subscribe.component.html',
  styleUrls: ['./our-subscribe.component.css']
})
export class OurSubscribeComponent implements OnInit {

  constructor(private _exampleService: MyServiceClass) { }

  ngOnInit() {

      let that = this;
      let regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

       $("#subscribe_now").click(function(){
           if(!regex.test(($('#subscriber_email').val()))){
               alert("Invalid Email format")
               return false;
           }
           $("#subscribe_now").prop('disabled', true);
           let url = 'http://hastpa.org/testing/hastpa_api/subscribe.php';
           let formData = new FormData();
           formData.append('email',$('#subscriber_email').val());
           $('#email').val("");
           that._exampleService.someMethod(url,formData).subscribe(result =>{
              alert("We have recorded your subscription request");
              $("#subscribe_now").prop('disabled', false);
           });

       });
  }

}
