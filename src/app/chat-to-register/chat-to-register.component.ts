import { Component, OnInit } from '@angular/core';
import { MyServiceClass } from '../app.services';
import { Router, RouterModule } from '@angular/router';
import $ from 'jquery';

@Component({
  selector: 'app-chat-to-register',
  templateUrl: './chat-to-register.component.html',
  styleUrls: ['./chat-to-register.component.css']
})
export class ChatToRegisterComponent implements OnInit {


    public applicant : string;
    email : string;
    categorie: string;

  constructor(private _exampleService: MyServiceClass, private router: Router){}

  email_confirmation(){
    var that = this;
    let url = 'http://hastpa.org/testing/hastpa_api/fill_full_form.php?email='+that.email+'&r=d1813946758';
    let formData = new FormData();
    formData.append('email',that.email);
    this._exampleService.someMethod(url,formData).subscribe(result =>{
       console.log(result);
    });
  }

  register(){
      var that = this;
      let url = 'http://hastpa.org/testing/hastpa_api/chat_to_register.php';
      let formData = new FormData();
      formData.append('email',that.email);
      formData.append('applicant',that.applicant);
      formData.append('category',that.categorie);
      this._exampleService.someMethod(url,formData).subscribe(result =>{
         console.log(result);
         $("#backend_reply").text(result) ;
         setTimeout(function() {
             $("#box_typing").fadeOut("fast");
             if(that.categorie=="International/Sponsored Rider" || that.categorie=="International/Sponsored Team of Two" ){
              //    window.location.href = 'assets/documents/InternationalRiderAdvisory.pdf'
                  $("#international_rider").fadeIn("fast");
             }
             setTimeout(function() {
                 $("#box_5_reply").fadeIn("slow");
                 $('#inp-fields').fadeOut("slow");
                 $('#btn-chat').text('Proceed');
                 $("#btn-chat").prop('disabled', false);
                 $("#box_typing").fadeIn("slow");
                 $('.body-panel').animate({scrollTop: $('.body-panel').height() + $('.body-panel').height()});
                  setTimeout(function(){
                      $("#box_typing").fadeOut("fast");
                      setTimeout(function(){
                          $("#box_6_details").fadeIn("fast");
                          $('.body-panel').animate({scrollTop: $('.body-panel').height() + $('.body-panel').height()});
                          that.email_confirmation();
                      }, 500)
                  }, 3500)
             }, 500);
         }, 3000);
      });
  }

  /**
   * [emailData Get profile using email id]
   * @method emailData
   * @return {[none]}  [nothing is returned by this function]
   */
  emailData(){
      let url = 'http://hastpa.org/testing/hastpa_api/get_profile.php';
      let formData = new FormData();
      formData.append('email',this.email);
      let r = null;
      this._exampleService.someMethod(url,formData).subscribe(result =>{
         if(result[1]==undefined){
             setTimeout(function() {
                 $("#box_typing").fadeOut("fast");
                 setTimeout(function() {
                     $("#box_4_notfound").fadeIn("slow") ;
                     $('.body-panel').animate({scrollTop: $('.body-panel').height() + $('.body-panel').height()});
                     $("#inp-chat").fadeOut("fast");
                     $("#sel-chat").fadeIn("slow") ;
                     $("#btn-chat").prop('disabled', false);

                 }, 500);
             }, 4000);
         }
         else{

             setTimeout(function() {
                 $("#box_typing").fadeOut("fast");
                 setTimeout(function() {
                     $("#box_4_found").fadeIn("slow") ;
                     $('.body-panel').animate({scrollTop: $('.body-panel').height() + $('.body-panel').height()});
                     $("#inp-chat").fadeOut("fast");
                     $("#sel-chat").fadeIn("slow") ;
                     $("#btn-chat").prop('disabled', false);

                 }, 500);
             }, 4000);
             r = result[1]['uid'];
             console.log(r);
         }
      });
  }

  ngOnInit() {
    $('#fee_scroll_initiate').click(function(event) {
      console.log("inside");
      event.preventDefault();
       $('html, body').animate({
           scrollTop: $('#fee_scroll').offset().top
       }, 1500);

   });

      var i=1;

      var that = this;

      $("#register_route").click(function(){
          that.router.navigate(['register/', that.email]);
      });

      $('#inp-chat').bind('keyup blur',function(){
            var node = $(this);
            if(i==1){
                node.val(node.val().replace(/[^a-zA-Z ]/g,'') );
            }
        });

        $("#inp-chat").keyup(function(event){
        // activate press enter
           if(event.keyCode == 13 && !$("#btn-chat").prop('disabled')){
               $("#btn-chat").click();
           }
       })

      $("#btn-chat").click(function (){
          if(i==1){
              that.applicant =  $("#inp-chat").val();
              if(that.applicant=='')return false;

              $("#btn-chat").prop('disabled', true);
              $("#inp-chat").prop('placeholder','');
              $("#inp-chat").val("");
              $("#box_1").fadeIn("slow");
              setTimeout(function() {
                  $("#box_typing").fadeIn("slow");
              }, 1000);

              setTimeout(function() {
                  $("#box_typing").fadeOut("fast");
                  setTimeout(function() {
                      $("#box_2").fadeIn("slow") ;
                      $('#inp-chat').attr('type', 'email');
                      $("#btn-chat").prop('disabled', false);
                      $("#inp-chat").prop('placeholder','Enter your Email Address');
                      i++;
                  }, 500);
              }, 5000);
          }
          else if(i==2){
              that.email =  $("#inp-chat").val();
              if( !validateEmail(that.email)) return false;
              if(that.email=='')return false;
              $("#btn-chat").prop('disabled', true);
              $("#box_3").fadeIn("slow");
              $('.body-panel').animate({scrollTop: $('.body-panel').height() + $('.body-panel').height()});
              $("#inp-chat").val("");
              $("#inp-chat").prop('placeholder','');

              setTimeout(function() {
                  $("#box_typing").fadeIn("slow");
                  $('.body-panel').animate({scrollTop: $('.body-panel').height() + $('.body-panel').height()});
              }, 1000);

              setTimeout(function() {
                  $("#box_typing").fadeOut("fast");
                  setTimeout(function() {
                      $("#box_4").fadeIn("slow") ;
                      $('.body-panel').animate({scrollTop: $('.body-panel').height() + $('.body-panel').height()});

                      $("#box_typing").fadeIn("slow");
                      $('.body-panel').animate({scrollTop: $('.body-panel').height() + $('.body-panel').height()});

                      that.emailData();

                  }, 500);
              }, 5000);

              i++;
          }
          else if(i==3){
              that.categorie=$("#sel-chat").val();
              if(that.categorie=="") return false;
              $("#btn-chat").prop('disabled', true);
              $("#box_5").fadeIn("slow");
              $('.body-panel').animate({scrollTop: $('.body-panel').height() + $('.body-panel').height()});

              setTimeout(function() {
                  $("#box_typing").fadeIn("slow");
                  $('.body-panel').animate({scrollTop: $('.body-panel').height() + $('.body-panel').height()});
                  that.register();
              }, 1000);

              i++;
          }
          else{
            let win = window.open('http://www.mtbhimalaya.com/register/'+that.email, '_blank');
              if (win) {
                  win.focus();
              } else {
                  alert('Please allow popups for this website');
              }
          }
    });

    function validateEmail($email) {
         var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
         return emailReg.test( $email );
    }
  }

}
