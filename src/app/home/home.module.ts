import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import {HttpClientModule} from '@angular/common/http';
import {ProjectService} from '../service/project.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ]),
      HttpClientModule
  ],
  declarations: [HomePage],
    providers: [
        {
            provide: ProjectService,
            useClass: ProjectService
        }
    ]
})
export class HomePageModule {}
