import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

    constructor(private router: Router,
        private titleService: Title,
        private activatedRoute: ActivatedRoute,
        private metaService: Meta) {
    }

    ngOnInit(){

        this.router.events
          .filter((event) => event instanceof NavigationEnd)
          .map(() => this.activatedRoute)
          .map((route) => {
            while (route.firstChild) route = route.firstChild;
            return route;
          })
          .filter((route) => route.outlet === 'primary')
          .mergeMap((route) => route.data)
          .subscribe((event) =>{
              this.titleService.setTitle(event['title']);
              //Changing meta with name="description"
                var tag = { name: 'description', content: event['metaDescription'] };
                let attributeSelector : string = 'name="description"';
                this.metaService.removeTag(attributeSelector);
                this.metaService.addTag(tag, false);
          });

    }

}
