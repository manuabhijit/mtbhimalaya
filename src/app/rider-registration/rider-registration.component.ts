import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MyServiceClass } from '../app.services';
import { Router, RouterModule } from '@angular/router';
import $ from 'jquery';

@Component({
  selector: 'app-rider-registration',
  templateUrl: './rider-registration.component.html',
  styleUrls: ['./rider-registration.component.css']
})
export class RiderRegistrationComponent implements OnInit {

    public email;
    public database: any;
    year_range = [];

  constructor(private route: ActivatedRoute, private _exampleService: MyServiceClass,  private router: Router) {
        this.database=[];
        for(let i=2017; i>1960;i--){
            this.year_range.push(i)
        }


  }

    get_data(){
        let url = 'http://hastpa.org/testing/hastpa_api/get_profile.php?r=2';
        let formData = new FormData();
        formData.append('email',this.email);

        this._exampleService.someMethod(url,formData).subscribe(result =>{
           if(result[1]==undefined){
               console.log(result[1]);
               this.router.navigate(['chat/']);
           }
           else{
               console.log(result[1]);
               this.database=result[1];
               if(this.database.jersey_size!=this.database.riding_catagory){
                    $("input, select, textarea").prop('disabled', true);
                    $('#submit_button').remove();
               }
           }});

    }

    pay_now(){
      let url = 'http://hastpa.org/testing/hastpa_api/make_payment.php?email='+this.email+'&name='+this.database.full_name;
      let formData = new FormData();
      formData.append('email',this.email);

      this._exampleService.someMethod(url,formData).subscribe(result =>{
          console.log("mail sent");
      });
    }

    auto_nation(){
        this.database.nationality=this.database.address_country;
    }

    put_data_primary(){
        let url = 'http://hastpa.org/testing/hastpa_api/full_registration.php';
        let formData = new FormData();

        formData.append('email',this.email);
        formData.append('uid',this.database.uid);
        formData.append('riding_catagory',this.database.riding_catagory);

        formData.append('full_name',this.database.full_name);
        formData.append('date_of_birth',this.database.date_of_birth);

        formData.append('address_initials',this.database.address_initials);
        formData.append('occupation',this.database.occupation);
        formData.append('address_landmak',this.database.address_landmak);
        formData.append('address_state',this.database.address_state);
        formData.append('address_zipcode',this.database.address_zipcode);
        formData.append('address_country',this.database.address_country);
        formData.append('nationality',this.database.nationality);
        formData.append('contact_number',this.database.contact_number);
        formData.append('alt_contact_number',this.database.alt_contact_number);
        formData.append('gender',this.database.gender);
        formData.append('jersey_size',this.database.jersey_size);

        formData.append('emg_contact_name',this.database.emg_contact_name);
        formData.append('emg_contact_number',this.database.emg_contact_number);
        formData.append('emg_contact_relation',this.database.emg_contact_relation);
        formData.append('medical_condition',this.database.medical_condition);
        formData.append('blood_group',this.database.blood_group);

        formData.append('display_name',this.database.display_name);
        formData.append('team_name',this.database.team_name);
        formData.append('riding_experience',this.database.riding_experience);
        formData.append('story',this.database.story);
        formData.append('bike',this.database.bike);
        formData.append('previous_mtb_participation',this.database.previous_mtb_participation);
        formData.append('personal_best_1',this.database.personal_best_1);
        formData.append('personal_best_2',this.database.personal_best_2);
        formData.append('personal_favourite',this.database.personal_favourite);
        formData.append('biking_style',this.database.biking_style);
        formData.append('major_sponsor',this.database.major_sponsor);
        formData.append('social_media_link',this.database.social_media_link);

        this._exampleService.someMethod(url,formData).subscribe(result =>{

            console.log(result);

       });
    }

    ngOnInit() {

        let that=this;
        that.email=that.route.snapshot.params['email'];
        that.get_data();

        $('#emg_contact_name, #emg_contact_relation, #full_name, #address_state, #address_country, #nationality').bind('keyup blur',function(){
              var node = $(this);
                  node.val(node.val().replace(/[^a-zA-Z ]/g,'') );
          });
    }

    onSubmit(data,isValid: boolean) {
        if(isValid){
            this.put_data_primary();
            console.log(data);
            this.pay_now();
            //alert("Please Complete your form.");
            this.router.navigate(['home/']);
        }
        else{
          alert("Make sure the form has no RED marks");
        }

    };








    all_countries=["Afghanistan","Albania","Algeria","American Samoa","Andorra","Angola","Anguilla","Antigua and Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Central African Republic","Chad","Chile","China","Christmas Island","Colombia","Comoros","Cook Islands","Costa Rica","Croatia","Cuba","Cyprus","Czech Republic","Democratic Republic of the Congo","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Israel","Italy","Ivory Coast","Jamaica","Japan","Jordan","Kazakhstan","Kenya","Kiribati","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macao","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Martinique","Mauritania","Mauritius","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauru","Nepal","Netherlands","Netherlands Antilles","New Zealand","Nicaragua","Niger","Nigeria","Niue","Norfolk Island","North Korea","Norway","Oman","Pakistan","Palau","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Pitcairn Islands","Poland","Portugal","Puerto Rico","Qatar","Republic of the Congo","Romania","Russian Federation","Rwanda","Saint Kitts and Nevis","Saint Lucia","Saint Pierre","Saint Vicent and the Grenadines","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia and Montenegro","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Soloman Islands","Somalia","South Africa","South Georgia","South Korea","Soviet Union","Spain","Sri Lanka","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Tibet","Timor-Leste","Togo","Tonga","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Turks and Caicos Islands","Tuvalu","UAE","Uganda","Ukraine","United Kingdom","United States of America","Uruguay","US Virgin Islands","Uzbekistan","Vanuatu","Vatican City","Venezuela","Vietnam","Wallis and Futuna","Yemen","Zambia","Zimbabwe"];
}
