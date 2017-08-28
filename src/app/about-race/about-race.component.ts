import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-race',
  templateUrl: './about-race.component.html',
  styleUrls: ['./about-race.component.css']
})
export class AboutRaceComponent implements OnInit {

    hero_team  = [
        {
           name : "Devender Thakur",
            image : "devender.jpg",
            description : "Tribal boy from Himalayas, obsessed with cycling. High on confidence and enthusiasm.",
            fb: "devender.thakur"
        },
        {
            name : "Sarah Appelt",
            image : "sarah.jpg",
            description : "26 year old German living in Manali, Adventure seeker and peddling since the age of 3.",
            fb: "sarah.appelt"
        },
        {
             name : "Akshit Gaur",
            image : "akshit.jpg",
            description : "Himalayan Goat, Youngest member of the team and smiles away through climbs.",
            fb: "akshit.gaur.31"

        },
        {
            name : "Gurman Reen",
            image : "gurman.jpg",
            description : "Sikh from Shimla, Oldest member of Hero Action Team, symbol of unparalleled devotion and determination. ",
            fb: "gurmandevil"
        },
        {
            name : "Ankush Arya",
            image : "ankush.jpg",
            description : "Captain, peace keeper and a bullish rider.",
            fb: "arya.anku"
        },
        {
            name : "Akash",
            image : "akash.jpg",
            description : "Will fly past you on single tracks with his undeterred passion for the sport.",
            fb: "100004368077337"
        },
        {
            name : "Shiven",
            image : "shiven.jpg",
            description : "",
            fb: "shiven.shiv"
        }
    ];

  constructor() { }

  ngOnInit() {
  }

}
