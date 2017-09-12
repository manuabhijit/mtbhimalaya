import { Component, OnInit } from '@angular/core';
import { FormsModule} from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  myFirstName = "Abhijit";
  count=0
  details=[{'firstname':''},{'firstname':''}];
  msg='';
  breadcrum="Contact Us";

  onSubmit(value: any){
      console.log(value.f_name);
      this.details[this.count]['firstname']=value.f_name;
      this.msg= this.msg+this.count+": "+value.f_name;
      this.count++;
  }

}
