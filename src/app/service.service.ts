import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

let headers: HttpHeaders = new HttpHeaders();
headers = headers.append('enctype', 'multipart/form-data');
headers = headers.append('Content-Type', 'application/json');
headers = headers.append('X-Requested-With', 'XMLHttpRequest');﻿

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  server: string = 'http://localhost:8000/';

  constructor(private http: HttpClient) { }
}
