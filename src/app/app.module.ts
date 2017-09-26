import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { routes } from './app.router'
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SmallGalleryComponent } from './home/small-gallery/small-gallery.component';
import { OurTeamComponent } from './home/our-team/our-team.component';
import { OurSponsorsComponent } from './home/our-sponsors/our-sponsors.component';
import { OurTagsComponent } from './home/our-tags/our-tags.component';
import { OurSubscribeComponent } from './home/our-subscribe/our-subscribe.component';
import { MajorBlogComponent } from './home/major-blog/major-blog.component';
import { SmallAboutComponent } from './home/small-about/small-about.component';
import { StagesComponent } from './stages/stages.component';
import { RiderRegistrationComponent } from './rider-registration/rider-registration.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FormsModule} from '@angular/forms';
import { RulesAndRegulationsComponent } from './rules-and-regulations/rules-and-regulations.component';
import { AboutRaceComponent } from './about-race/about-race.component';
import { ProfileCardsComponent } from './profile-cards/profile-cards.component';
import { MyServiceClass } from './app.services';
import { HttpModule } from '@angular/http';
import { GalleryComponent } from './gallery/gallery.component';
import { ChatToRegisterComponent } from './chat-to-register/chat-to-register.component';
import { VolunteerProgramComponent } from './volunteer-program/volunteer-program.component';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import { TeamHastpaComponent } from './contact-us/team-hastpa/team-hastpa.component';
import { TravelGuideComponent } from './travel-guide/travel-guide.component';
import { CalendarModule } from 'primeng/primeng';
import { PhysioComponent } from './physio/physio.component';
import { PreviousResultsComponent } from './previous-results/previous-results.component';
import { Results2016Component } from './previous-results/results2016/results2016.component';
import { Results2015Component } from './previous-results/results2015/results2015.component';
import { HospitalityComponent } from './hospitality/hospitality.component';
import { LiveResultsComponent } from './live-results/live-results.component';
import { ProfileListingComponent } from './profile-listing/profile-listing.component';
import { PicToGoComponent } from './pic-to-go/pic-to-go.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    SmallGalleryComponent,
    OurTeamComponent,
    OurSponsorsComponent,
    OurTagsComponent,
    OurSubscribeComponent,
    MajorBlogComponent,
    SmallAboutComponent,
    StagesComponent,
    RiderRegistrationComponent,
    ContactUsComponent,
    RulesAndRegulationsComponent,
    AboutRaceComponent,
    ProfileCardsComponent,
    GalleryComponent,
    ChatToRegisterComponent,
    VolunteerProgramComponent,
    TermsAndConditionsComponent,
    TeamHastpaComponent,
    TravelGuideComponent,
    PhysioComponent,
    PreviousResultsComponent,
    Results2016Component,
    Results2015Component,
    HospitalityComponent,
    LiveResultsComponent,
    ProfileListingComponent,
    PicToGoComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    routes,
    FormsModule,
    HttpModule,
    CalendarModule,
  ],
  providers : [MyServiceClass],
  bootstrap: [AppComponent]
})
export class AppModule { }
