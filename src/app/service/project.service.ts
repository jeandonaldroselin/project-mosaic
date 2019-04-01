import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private httpClient: HttpClient) { }

  find() {
    return this.httpClient.get('assets/json/projects.json', { observe : 'body' });
  }
}
