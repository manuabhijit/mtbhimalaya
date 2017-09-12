import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stages',
  templateUrl: './stages.component.html',
  styleUrls: ['./stages.component.css']
})
export class StagesComponent implements OnInit {
  breadcrum ="STAGES";
    stages = [
        {
            "STAGE": "1",
            "Name": "Balkhus Epiphany",
            "TotalDistance": "67.5",
            "CompetitiveDistance": "55.2",
            "source": "Bhekhalti",
            "destination" : "Gadakufar",
            "ElevationGain": "1680",
            "ElevationLoss": "1500",
            "MaximumElevation": "2305",
            "MinimumElevation": "1500",
            "AverageTemperature": "24",
            "No_of_Feedstations": "2",
            "No_of_Service_Points": "1",
            "level_icon": "level_medium",
            "level_text": "Medium"
        },
        {
            "STAGE": "2",
            "Name": "Sutlej Symphony",
            "source": "Gadakufar",
            "destination" : "Shwad",
            "TotalDistance": "90",
            "CompetitiveDistance": "89",
            "ElevationGain": "2061",
            "ElevationLoss": "2969",
            "MaximumElevation": "2666",
            "MinimumElevation": "857",
            "AverageTemperature": "28",
            "No_of_Feedstations": "3",
            "No_of_Service_Points": "2",
            "level_icon": "level_hard",
            "level_text": "Hard"
        },
        {
            "STAGE": "3",
            "Name": "Conquest of Garh (Queens Stage)",
            "source": "Shwad",
            "destination" : "Gada Gushani",
            "TotalDistance": "76.5",
            "CompetitiveDistance": "76.5",
            "ElevationGain": "3000",
            "ElevationLoss": "1940",
            "MaximumElevation": "3100",
            "MinimumElevation": "1250",
            "AverageTemperature": "23",
            "No_of_Feedstations": "3",
            "No_of_Service_Points": "1",
            "level_icon": "level_hard",
            "level_text": "Hard"
        },
        {
            "STAGE": "4",
            "Name": "Mystical Passes",
            "source": "Gada Gushani",
            "destination" : "Bagshed",
            "TotalDistance": "78.5",
            "CompetitiveDistance": "77",
            "ElevationGain": "2100",
            "ElevationLoss": "2550",
            "MaximumElevation": "2720",
            "MinimumElevation": "1730",
            "AverageTemperature": "22",
            "No_of_Feedstations": "3",
            "No_of_Service_Points": "1",
            "level_icon": "level_medium",
            "level_text": "Medium"
        },
        {
            "STAGE": "5",
            "Name": "The Kings Mutiny",
            "source": "Bagshed",
            "destination" : "Kamand",
            "TotalDistance": "79.5",
            "CompetitiveDistance": "79.5",
            "ElevationGain": "1570",
            "ElevationLoss": "2400",
            "MaximumElevation": "2035",
            "MinimumElevation": "841",
            "AverageTemperature": "26",
            "No_of_Feedstations": "3",
            "No_of_Service_Points": "1",
            "level_icon": "level_medium",
            "level_text": "Medium"
        },
        {
            "STAGE": "6",
            "Name": "Heaven's Ridge",
            "source": "Kamand",
            "destination" : "Jatingri",
            "TotalDistance": "56.3",
            "CompetitiveDistance": "56.2",
            "ElevationGain": "1590",
            "ElevationLoss": "824",
            "MaximumElevation": "2040",
            "MinimumElevation": "977",
            "AverageTemperature": "28",
            "No_of_Feedstations": "2",
            "No_of_Service_Points": "1",
            "level_icon": "level_easy",
            "level_text": "Easy"
        },
        {
            "STAGE": "7",
            "Name": "Into the Wild",
            "source": "Jatingri",
            "destination" : "Palampur",
            "TotalDistance": "80",
            "CompetitiveDistance": "79",
            "ElevationGain": "2075",
            "ElevationLoss": "2593",
            "MaximumElevation": "2587",
            "MinimumElevation": "1165",
            "AverageTemperature": "27",
            "No_of_Feedstations": "3",
            "No_of_Service_Points": "1",
            "level_icon": "level_hard",
            "level_text": "Hard"
        },
        {
            "STAGE": "8",
            "Name": "Land of the Lambs",
            "source": "Palampur",
            "destination" : "Dharamshala",
            "TotalDistance": "45.91",
            "CompetitiveDistance": "44.5",
            "ElevationGain": "1350",
            "ElevationLoss": "1350",
            "MaximumElevation": "1664",
            "MinimumElevation": "1245",
            "AverageTemperature": "27",
            "No_of_Feedstations": "2",
            "No_of_Service_Points": "1",
            "level_icon": "level_medium",
            "level_text": "Medium"
          }
      ];
  constructor() { }

  ngOnInit() {
  }

}
