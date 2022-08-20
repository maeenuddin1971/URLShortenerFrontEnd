import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EnteredURL } from './EnteredURL';
import { environment } from 'src/environments/environment'

@Injectable({providedIn: 'root'})
export class TinyUrlService {

  constructor(private http: HttpClient){}

  public addUrl(enteredurl: EnteredURL): Observable<EnteredURL> {
    return this.http.post<EnteredURL>(`${environment.baseServer}/ur/createurl`, enteredurl);
  }
}
