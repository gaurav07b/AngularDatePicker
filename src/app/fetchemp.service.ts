import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FetchempService {

  constructor(private httpclient: HttpClient) { }

  getEmployee() {
    return this.httpclient.get('/assets/Dummy.json');
  }
}
