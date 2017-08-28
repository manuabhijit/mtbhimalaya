import { Component, OnInit } from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    var i= 1;

    $("#drawer-toggle-label, #drawer li").click(function() {
        $( "#drawer li" ).each(function( index ) {
            if(i%2==0){
                $(this).fadeOut("slow");
            }
            else{
                $(this).fadeIn("slow");
            }

            console.log( index + ": " + $( this ).text() );
        });

        i++;
    });

    $(document).ready(function(){
        $('#nav-icon3, #drawer li').click(function(){
        		$('#nav-icon3').toggleClass('open');
        });
    });


    $('.clickable').click(function(){
        $('#bar').addClass('animating');
        setTimeout(function() {
            $('#bar').removeClass('animating');
        }, 2000);
    });
  }

}
