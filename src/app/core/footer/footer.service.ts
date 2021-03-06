import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class FooterService {
  url = environment.apiUrl + "/api/v1/mailing-list'/";

  constructor(private http: HttpClient) {}

  mailingList(email: FormGroup): Observable<any> {
    return this.http.post<any>(this.url, email);
  }
}
