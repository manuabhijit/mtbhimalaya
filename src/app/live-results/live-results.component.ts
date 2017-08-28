import { Component, OnInit } from '@angular/core';
import { MyServiceClass } from '../app.services';
import { Router, RouterModule } from '@angular/router';
import $ from 'jquery';

@Component({
  selector: 'app-live-results',
  templateUrl: './live-results.component.html',
  styleUrls: ['./live-results.component.css']
})
export class LiveResultsComponent implements OnInit {

  constructor(private _exampleService: MyServiceClass) { }
    stages = [
        {
            "STAGE": "1",
            "Name": "Balkhus Epiphany"
        },
        {
            "STAGE": "2",
            "Name": "Sutlej Symphony"
        },
        {
            "STAGE": "3",
            "Name": "Conquest of Garh (Queens Stage)"
        },
        {
            "STAGE": "4",
            "Name": "Mystical Passes"
        },
        {
            "STAGE": "5",
            "Name": "The Kings Mutiny"
        },
        {
            "STAGE": "6",
            "Name": "Heaven's Ridge"
        },
        {
            "STAGE": "7",
            "Name": "Into the Wild"
        },
        {
            "STAGE": "8",
            "Name": "Land of the Lambs"
          }
      ];

    category = [
      {
          "value":"5",
          "name":"Overall"
      },
      {
          "value":"1",
          "name":"Open Women Solo"
      },
      {
          "value":"2",
          "name":"Open Men Solo"
      },
      {
          "value":"3",
          "name":"Grand Masters Solo"
      },
      {
          "value":"4",
          "name":"Team Of Two"
      }
    ]

    get_rank_data(){
      $('.team_final').fadeOut("fast");
      $('#rank').text('Rank');
      $('#stage_message_1, #stage_message_2').fadeOut('fast');
      var that = this;
      var stage = $('#stage').val();
      var category = $('#category').val();
      var that = this;
      var i=1;
      $("tr.table_row").remove();
      let url = 'http://www.hastpa.org/testing/hastpa_api/timing_api/get_rank.php?stage='+stage+'&category='+category;
      let formData = new FormData();
      formData.append('no_data','');
      this._exampleService.someMethod(url,formData).subscribe(result =>{
         console.log("data",result);
         if(result=="Stage not yet started") {
           $('#stage_message_1').fadeIn('slow');
           return false;
        }

         if(category!="Team Of Two"){
           for(i=1;i<100;i++){
               if(result[i]==undefined) break;
               $('table tbody').append('<tr class="table_row"> <td> <img src="'+result[i].app_flag+'" alt="flag" height="20px" style="width: 42px;padding-right: 10px;">'+i+'</td> <td>'+result[i].jersey_number+'</td><td>'+result[i].full_name+'</td><td>'+result[i].category+'</td><td>'+result[i].start_time+'</td> <td>'+result[i].end_time+'</td><td>'+result[i].penalty+'</td> <td>'+result[i].difference+'</td><td>'+result[i].final_time+'</td> </tr>');
           }
         }
         else{
           $('#rank').text('Serial No.');
           $('.team_final').fadeIn("slow");
           for(i=1;i<100;i++){
               if(result[i]==undefined) break;
               $('table tbody').append('<tr class="table_row"> <td> <img src="'+result[i].app_flag+'" alt="flag" height="20px" style="width: 42px;padding-right: 10px;">'+i+'</td> <td>'+result[i].jersey_number+'</td><td>'+result[i].full_name+'</td><td>'+result[i].category+'</td><td>'+result[i].start_time+'</td> <td>'+result[i].end_time+'</td><td>'+result[i].penalty+'</td> <td>'+result[i].difference+'</td><td>'+result[i].final_time+'</td><td>'+result[i].team_time+'</td> </tr>');
           }
         }

         console.log(i);
        if(i==1){
          $('#stage_message_2').fadeIn('slow');
        }

      });
    }


  ngOnInit() {
    var that = this;
    $('#stage, #category').on('change', function() {
      that.get_rank_data();
    })
    $( document ).ready(function() {
        that.get_rank_data();
    });
    $('#refresh').click(function(){
      that.get_rank_data();
    })
  }

}
