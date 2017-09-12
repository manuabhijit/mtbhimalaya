import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StagesComponent } from './stages/stages.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { RulesAndRegulationsComponent } from './rules-and-regulations/rules-and-regulations.component';
import { RiderRegistrationComponent } from './rider-registration/rider-registration.component';
import { AboutRaceComponent } from './about-race/about-race.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ChatToRegisterComponent } from './chat-to-register/chat-to-register.component';
import { VolunteerProgramComponent } from './volunteer-program/volunteer-program.component'
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component'
import { TravelGuideComponent } from './travel-guide/travel-guide.component'
import { PhysioComponent } from './physio/physio.component'
import { PreviousResultsComponent } from './previous-results/previous-results.component'
import { HospitalityComponent } from './hospitality/hospitality.component'
import { LiveResultsComponent } from './live-results/live-results.component'
import { ProfileCardsComponent } from './profile-cards/profile-cards.component'
import { ProfileListingComponent } from './profile-listing/profile-listing.component'


export const router: Routes= [
    {path: '', component: HomeComponent, pathMatch: 'full', data: {
        title: 'Home | Hero MTB Himalaya : The 13th Edition',
        metaDescription: "13th edition of India's premier mountain biking competition, challenge your own limits at Asia's premier mountain bike race - Hero MTB Himalaya!"
      }},
    {path: 'home', component: HomeComponent, data: {
        title: 'Home | Hero MTB Himalaya : The 13th Edition',
        metaDescription: "13th edition of India's premier mountain biking competition, challenge your own limits at Asia's premier mountain bike race - Hero MTB Himalaya!"
      }
    },
    {path: 'stages', component: StagesComponent, data: {
        title: 'Race Stage | Hero MTB Himalaya : The 13th Edition',
        metaDescription: "The stages at 13th Hero MTB Himalaya 2016 are beyond imagination. Check them all on our website for route profile."
      }
    },
    {path: 'contact', component: ContactUsComponent, data: {
        title: 'Contact Us | Hero MTB Himalaya : The 13th Edition',
        metaDescription: "Your feedback can help improve our product and service. Feel free to give us suggestions."
      }
    },
    {path: 'rules', component: RulesAndRegulationsComponent, data: {
        title: 'Rule and Regulatons | Hero MTB Himalaya : The 13th Edition',
        metaDescription: "Rules and regulations will give an riders or HASTPA guidelines to follow when entering into a MTB premium contest."
      }
    },
    {path: 'tnc', component: TermsAndConditionsComponent, data: {
        title: 'Terms and Condition | Hero MTB Himalaya : The 13th Edition',
        metaDescription: ""
      }
    },
    {path: 'register/:email', component:RiderRegistrationComponent, data: {
        title: 'Rider Registrations | Hero MTB Himalaya : The 13th Edition',
        metaDescription: "Register for the Hero MTB Himalaya, the 13th edition."
      }
    },
    {path: 'volunteer', component:VolunteerProgramComponent, data: {
        title: 'Volunteer Program | Hero MTB Himalaya : The 13th Edition',
        metaDescription: "Travel, learn and experience all the action behind Asia's biggest stage race from the heart of it."
      }
    },
    {path: 'race', component:AboutRaceComponent, data: {
        title: 'About Race | Hero MTB Himalaya : The 13th Edition',
        metaDescription: "Considered to be one of the toughest races in the world, Hero MTB Himalaya is not for the faint hearted. Stay ready with your helmets on."
      }
    },
    {path: 'gallery', component:GalleryComponent, data: {
        title: 'Gallery | Hero MTB Himalaya : The 13th Edition',
        metaDescription: "Looking back, we have a lot of great memories."
      }
    },
    {path: 'chat', component:ChatToRegisterComponent, data: {
        title: 'Rider Registrations | Hero MTB Himalaya : The 13th Edition',
        metaDescription: "Register for the Hero MTB Himalaya, the 13th edition."
      }
    },
    {path: 'travel', component:TravelGuideComponent, data: {
        title: 'Travel Guide | Hero MTB Himalaya : The 13th Edition',
        metaDescription: "Need help traveling to India? Confused about which airport to go? Download the travel guide to Hero MTB Himalaya."
      }
    },
    {path: 'physiotherapy', component:PhysioComponent, data: {
        title: 'Physiotherapy | Hero MTB Himalaya : The 13th Edition',
        metaDescription: "Physiotherapy Services offered at 13th Hero MTB Himalaya 2017- By Sanja Steyn and Corinne Smith."
      }
    },
    {path: 'hospitality', component:HospitalityComponent, data: {
        title: 'Race Hospitality | Hero MTB Himalaya : The 13th Edition',
        metaDescription: "Our campsites are located in some of the most serene places and you will feel right in the lap of mother nature."
      }
    },
    {path: 'previousresults', component:PreviousResultsComponent, data: {
        title: 'Previous Year Results | Hero MTB Himalaya : The 13th Edition',
        metaDescription: "Know the standings at Hero MTB Himalaya. Click here to see the results."
      }
    },
    {path: 'live', component:LiveResultsComponent, data: {
        title: 'Live Results | Hero MTB Himalaya : The 13th Edition',
        metaDescription: ""
      }
    },
    {path: 'register', redirectTo: 'chat'},
    {path: 'profile/:id', component:ProfileCardsComponent, data: {
        title: 'Rider Profile | Hero MTB Himalaya : The 13th Edition',
        metaDescription: ""
      }
    },
    {path: 'profile', component:ProfileListingComponent, data: {
        title: 'Rider Profile | Hero MTB Himalaya : The 13th Edition',
        metaDescription: "Register for the Hero MTB Himalaya, the 13th edition."
      }
    },
    {path: '**', redirectTo: 'home', pathMatch: 'full'}

]

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
