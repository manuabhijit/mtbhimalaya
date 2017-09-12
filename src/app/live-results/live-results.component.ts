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

    breadcrum="Live";
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
          "name":"Open Masters Solo"
      },
      {
          "value":"4",
          "name":"Grand Masters Solo"
      },
      {
          "value":"5",
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
      var i=1;
      $("tr.table_row").remove();
      let url = 'http://www.hastpa.org/testing/hastpa_api/timing_api/get_rank.php?stage='+stage+'&category='+category;
      let formData = new FormData();
      formData.append('no_data','');
      this._exampleService.someMethod(url,formData).subscribe(result =>{
         //console.log("data",result);
         if(result=="Stage not yet started") {
           $('#stage_message_1').fadeIn('slow');
           return false;
        }

         if(category!="Team Of Two"){
           for(i=1;i<100;i++){
               if(result[i]==undefined) break;
               $('.table_day tbody').append('<tr class="table_row"> <td>'+i+'</td> <td>'+result[i].jersey_number+'</td><td> <img src="'+result[i].app_flag+'" alt="flag" height="20px" style="width: 42px;padding-right: 10px;">'+result[i].full_name+'</td><td>'+result[i].category+'</td><td>'+result[i].start_time+'</td> <td>'+result[i].end_time+'</td><td>'+result[i].penalty+'</td> <td>'+result[i].difference+'</td><td>'+result[i].final_time+'</td> </tr>');
           }
         }
         else{
           $('#rank').text('Serial No.');
           $('.team_final').fadeIn("slow");
           for(i=1;i<100;i++){
               if(result[i]==undefined) break;
               $('.table_day tbody').append('<tr class="table_row"> <td> <img src="'+result[i].app_flag+'" alt="flag" height="20px" style="width: 42px;padding-right: 10px;">'+i+'</td> <td>'+result[i].jersey_number+'</td><td>'+result[i].full_name+'</td><td>'+result[i].category+'</td><td>'+result[i].start_time+'</td> <td>'+result[i].end_time+'</td><td>'+result[i].penalty+'</td> <td>'+result[i].difference+'</td><td>'+result[i].final_time+'</td><td>'+result[i].team_time+'</td> </tr>');
           }
         }

         //console.log(i);
        if(i==1){
          $('#stage_message_2').fadeIn('slow');
        }

      });
    }

    get_rank_data_cumulative(){
      $('#stage_message_1_cumulative').fadeOut('fast');
      var that = this;
      var stage = $('#stage_cumulative').val();
      var category = $('#category_cumulative').val();
      $("tr.table_row_cumulative").remove();
      var i=1;
      let url = 'http://www.hastpa.org/testing/hastpa_api/timing_api/get_cumulative_ranks.php?stage='+stage+'&category='+category;
      let formData = new FormData();
      formData.append('no_data','');

      this._exampleService.someMethod(url,formData).subscribe(result =>{
        console.log(result);
        if(result=="Stage not yet started") {
          $('#stage_message_1_cumulative').fadeIn('slow');
          for (i = 1; i <= 8; i++) {
            if(i>stage) $('.cum_'+i).fadeOut('fast');
            else $('.cum_'+i).fadeIn('fast');
          }
          return false;
        }
        if(category!="Team Of Two"){
          for(i=1;i<100;i++){
              if(result[i]==undefined) break;
              var j=i.toString();
              if(result[i].cum_1==null){
                result[i].cum_1='DNF';
                 if(stage==1)j='';
              }
              if(result[i].cum_2==null){
                result[i].cum_2='DNF';
                 if(stage==2)j='';
              }
              if(result[i].cum_3==null){
                result[i].cum_3='DNF';
                 if(stage==3)j='';
              }
              if(result[i].cum_4==null){
                result[i].cum_4='DNF';
                 if(stage==4)j='';
              }
              if(result[i].cum_5==null){
                result[i].cum_5='DNF';
                 if(stage==5)j='';
              }
              if(result[i].cum_6==null){
                result[i].cum_6='DNF';
                 if(stage==6)j='';
              }
              if(result[i].cum_7==null){
                result[i].cum_7='DNF';
                 if(stage==7)j='';
              }
              if(result[i].cum_8==null){
                result[i].cum_8='DNF';
                 if(stage==8)j='';
              }

              $('.table_cumulative tbody').append('<tr class="table_row_cumulative"> <td>'+j+'</td> <td>'+result[i].jersey_number+'</td><td> <img src="'+result[i].app_flag+'" alt="flag" height="20px" style="width: 42px;padding-right: 10px;">'+result[i].full_name+'</td><td>'+result[i].category+'</td><td class="cum_1">'+result[i].cum_1+'</td> <td class="cum_2">'+result[i].cum_2+'</td><td class="cum_3">'+result[i].cum_3+'</td> <td class="cum_4">'+result[i].cum_4+'</td><td class="cum_5">'+result[i].cum_5+'</td><td class="cum_6">'+result[i].cum_6+'</td><td class="cum_7">'+result[i].cum_7+'</td><td class="cum_8">'+result[i].cum_8+'</td> </tr>');
          }
        }
        else{
          for(i=1;i<100;i++){
              if(result[i]==undefined) break;
              var j=i.toString();
              if(result[i].cum_1==null){
                result[i].cum_1='DNF';
                 if(stage==1)j='';
              }
              if(result[i].cum_2==null){
                result[i].cum_2='DNF';
                 if(stage==2)j='';
              }
              if(result[i].cum_3==null){
                result[i].cum_3='DNF';
                 if(stage==3)j='';
              }
              if(result[i].cum_4==null){
                result[i].cum_4='DNF';
                 if(stage==4)j='';
              }
              if(result[i].cum_5==null){
                result[i].cum_5='DNF';
                 if(stage==5)j='';
              }
              if(result[i].cum_6==null){
                result[i].cum_6='DNF';
                 if(stage==6)j='';
              }
              if(result[i].cum_7==null){
                result[i].cum_7='DNF';
                 if(stage==7)j='';
              }
              if(result[i].cum_8==null){
                result[i].cum_8='DNF';
                 if(stage==8)j='';
              }

              $('.table_cumulative tbody').append('<tr class="table_row_cumulative"> <td>'+j+'</td> <td>'+result[i].team_number+'</td><td>'+result[i].team_name+'</td><td>Team Of Two</td><td class="cum_1">'+result[i].cum_1+'</td> <td class="cum_2">'+result[i].cum_2+'</td><td class="cum_3">'+result[i].cum_3+'</td> <td class="cum_4">'+result[i].cum_4+'</td><td class="cum_5">'+result[i].cum_5+'</td><td class="cum_6">'+result[i].cum_6+'</td><td class="cum_7">'+result[i].cum_7+'</td><td class="cum_8">'+result[i].cum_8+'</td> </tr>');
          }
        }
        for (i = 1; i <= 8; i++) {
          if(i>stage) $('.cum_'+i).fadeOut('fast');
          else $('.cum_'+i).fadeIn('fast');
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


    $('#stage_cumulative, #category_cumulative').on('change', function() {
      that.get_rank_data_cumulative();
    })
    $( document ).ready(function() {
        that.get_rank_data_cumulative();
    });
    $('#refresh_cumulative').click(function(){
      that.get_rank_data_cumulative();
    })


  }

}
