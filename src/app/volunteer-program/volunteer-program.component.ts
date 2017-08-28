import { Component, OnInit } from '@angular/core';
import { MyServiceClass } from '../app.services';
import $ from 'jquery';

@Component({
  selector: 'app-volunteer-program',
  templateUrl: './volunteer-program.component.html',
  styleUrls: ['./volunteer-program.component.css']
})
export class VolunteerProgramComponent implements OnInit {

  constructor(private _exampleService: MyServiceClass) { }

  ngOnInit() {
      let that=this;
      $("#sub_volunteer").click(function(){
          let url = 'http://hastpa.org/testing/hastpa_api/email_kshitiz.php';
          var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
          let formData = new FormData();

            if(   $('#full_name').val()=='' || $('#email').val()=='' ||
                    $('#city').val()=='' || $('#state').val()=='' || $('#country').val()=='' ||
                    $('#contact').val()=='' ||  $('#age').val()=='' ||
                    $('#task').val()=='' ||
                    $('#operation_reason').val()=='' || $('#experiance').val()=='' ||
                    $('#inspiration').val()=='' || $('#why').val()==''
                ){
                    alert('Please fill up the complete form');
                    return false;
             }
            else if(!regex.test(($('#email').val()))){
                alert("Invalid Email format")
                return false;
            }

          formData.append('full_name',$('#full_name').val()); $('#full_name').val("")
          formData.append('email',$('#email').val()); $('#email').val("")

          formData.append('city',$('#city').val()); $('#city').val("");
          formData.append('state',$('#state').val()); $('#state').val("");
          formData.append('country',$('#country').val()); $('#country').val("");

          formData.append('contact',$('#contact').val()); $('#contact').val("");
          formData.append('WhatsApp',$('#WhatsApp').val()); $('#WhatsApp').val("");

          formData.append('age',$('#age').val()); $('#age').val("");
          formData.append('friend',$('#friend').val()); $('#friend').val("");

          formData.append('resume',$('#resume').val()); $('#resume').val("");
          formData.append('task',$('#task').val()); $('#task').val("");

          formData.append('operation_reason',$('#operation_reason').val()); $('#operation_reason').val("");
          formData.append('experiance',$('#experiance').val()); $('#experiance').val("");
          formData.append('inspiration',$('#inspiration').val()); $('#inspiration').val("");
          formData.append('why',$('#why').val()); $('#why').val("");
          formData.append('otherinfo',$('#otherinfo').val()); $('#otherinfo').val("");

          that._exampleService.someMethod(url,formData).subscribe(result =>{
             console.log(result);
             alert(" Your form has been successfully submitted");
          });


      });

        $('#full_name, #city, #state, #country, #friend').bind('keyup blur',function(){
                var node = $(this);
                node.val(node.val().replace(/[^a-zA-Z ]/g,'') );
        });
        $('#contact, #WhatsApp, #age').bind('keyup blur',function(){
                var node = $(this);
                node.val(node.val().replace(/\D/g, '') );
        });
  }

}
