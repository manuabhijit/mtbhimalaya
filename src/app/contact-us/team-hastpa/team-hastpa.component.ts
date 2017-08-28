import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team-hastpa',
  templateUrl: './team-hastpa.component.html',
  styleUrls: ['./team-hastpa.component.css']
})
export class TeamHastpaComponent implements OnInit {

    hastpa_team = [
        {
            name : "Mohit Sood",
            designation: "Founding President & Member",
            image: "mohit_sood.jpg",
            fb : "mohit.sood.7982"
        },
        {
            name : "Akhil Puri",
            designation: "General Secretary",
            image: "akhil_puri.jpg",
            fb : ""
        },
        {
            name : "Ashish Sood",
            designation: "Marketing Head",
            image: "ashish_sood.jpg",
            fb : "ashish.sood.79"
        },
        {
            name : "Anil Saunkhla",
            designation : "HR management",
            image : "anil_saunkhla.jpg",
            fb : ""
        },
        {
            name : "Kapil Bhardwaj",
            designation: "Govt. Liaisoning",
            image: "kapil_bhardwaj.jpg",
            fb : "kapil.bhardwaj.353"
        },
        {
            name : "Vishal Himalvi",
            designation: "Recce Team Head",
            image: "vishal_himalvi.jpg",
            fb : ""
        },
        {
            name : "Amresh Mehta",
            designation: "Logistics Head",
            image: "amresh_mehta.jpg",
            fb : "amresh.mehta.77"
        },
        {
            name : "Kamal Sharma",
            designation : "Rescue Operations Head",
            image : "kamal_sharma.jpg",
            fb : ""
        },
        {
            name : "Aditya Thakur",
            designation : "Race Operations Head",
            image : "aditya_thakur.jpg",
            fb : "aditya.thakur.568"
        }
    ];
  constructor() { }

  ngOnInit() {
  }

}
