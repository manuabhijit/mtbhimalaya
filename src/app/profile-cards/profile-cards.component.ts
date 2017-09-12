import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MyServiceClass } from '../app.services';
import { Router, RouterModule } from '@angular/router';
import $ from 'jquery';

@Component({
  selector: 'app-profile-cards',
  templateUrl: './profile-cards.component.html',
  styleUrls: ['./profile-cards.component.css']
})
export class ProfileCardsComponent implements OnInit {
  public id;
  public database: any;
  constructor(private route: ActivatedRoute, private _exampleService: MyServiceClass,  private router: Router) {
      this.database=[];
  }

  ngOnInit() {
    let that=this;
    that.id=that.route.snapshot.params['id'];
    that.get_data2();

  }
  get_data2(){
      let url = 'http://hastpa.org/testing/hastpa_api/get_profile.php?uid='+this.id;
      let formData = new FormData();

      this._exampleService.someMethod(url,formData).subscribe(result =>{
         if(result[1]==undefined){
             console.log(result[1]);
             this.router.navigate(['profile/']);
         }
         else{
             console.log(result[1]);
             if(result[1].display_status=='0')
              this.router.navigate(['profile/']);
            else{
              this.database=result[1];
              if(this.database.gender=='') $('#gender').fadeOut('fast');
              if(this.database.date_of_birth=='') $('#date_of_birth').fadeOut('fast');
              if(this.database.occupation=='') $('#occupation').fadeOut('fast');
              if(this.database.previous_mtb_participation=='') $('#previous_mtb_participation').fadeOut('fast');
              if(this.database.bike=='') $('#bike').fadeOut('fast');
              if(this.database.biking_style=='') $('#biking_style').fadeOut('fast');
              if(this.database.riding_experience=='') $('#riding_experience, #img_riding_experience').fadeOut('fast');
              if(this.database.personal_favourite=='') $('#personal_favourite, #img_personal_favourite').fadeOut('fast');
              if(this.database.personal_best_1=='') $('#personal_best_1, #img_personal_best_1').fadeOut('fast');
              if(this.database.major_sponsor=='') $('#major_sponsor').fadeOut('fast');
            }
         }});

  }

}
