import {Component, Inject} from '@angular/core';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {ProjectService} from '../service/project.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  projects: Array<{
      title: string,
      image: string,
      description: string,
      ports: any[],
      links: [{
          url: string,
          text: string
      }]
  }>;

  constructor(@Inject(ProjectService) private projectService: ProjectService) {
      this.initialize();
  }

  async initialize() {
    this.projectService.find().subscribe((projects: Array<any>) => {
        this.projects = projects;
    });
  }
}
