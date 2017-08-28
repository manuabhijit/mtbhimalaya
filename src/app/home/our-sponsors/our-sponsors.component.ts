import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-sponsors',
  templateUrl: './our-sponsors.component.html',
  styleUrls: ['./our-sponsors.component.css']
})
export class OurSponsorsComponent implements OnInit {

    sponsor_list = [{
                        index : "1",
                        name: "Hero Cycles",
                        website: "http://herocycles.com",
                        type: "Title Sponsor",
                        logo: "hero_cycles.png"
                    },
                    {
                        index : "2",
                        name: "UT Bikes",
                        website: "http://utbikes.com/",
                        type: "Powered By",
                        logo: "ut_bikes.png"
                    },
                    {
                        index : "3",
                        name: "HP Tourism",
                        website: "http://himachaltourism.gov.in",
                        type: "Associate Partner",
                        logo: "hp_tourism.png"
                    },
                    {
                        index : "4",
                        name: "AS Outdoors",
                        website: "http://asoutdoors.com",
                        type: "Associate Partner",
                        logo: "as_outdoors.png"
                    },
                    {
                        index : "5",
                        name: "Times of India",
                        website: "http://timesofindia.indiatimes.com",
                        type: "Media Partner",
                        logo: "times_of_india.png"
                    },
                    {
                        index : "6",
                        name: "Garmin",
                        website: "http://garmin.com",
                        type: "Timing Partner",
                        logo: "garmin.png"
                    },
                    {
                        index : "7",
                        name: "The Outdoor Journal",
                        website: "http://generaloutdoor.com/",
                        type: "Magazine Partner",
                        logo: "outdoor_journal.png"
                    },
                    {
                        index : "8",
                        name: "King fisher",
                        website: "http://www.kingfisherworld.com",
                        type: "Good Times Partner",
                        logo: "kingfisher.png"
                    },
                    {
                        index : "9",
                        name: "Big FM",
                        website: "https://m.facebook.com/95bigfm/",
                        type: "Radio Partner",
                        logo: "big_fm.png"
                    },

                    {
                        index : "10",
                        name: "Sportskeeda",
                        website: "http://sportskeeda.com",
                        type: "Media Partner",
                        logo: "sportskeeda.png"
                    },
                    {
                        index : "11",
                        name: "Crank Magazine",
                        website: "http://crankwithprocycle.in/",
                        type: "",
                        logo: "crank_magazine.png"
                    }];
  constructor() { }

  ngOnInit() {
  }

}
