

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders ,HttpParams} from '@angular/common/http';
import {
  InsertedSuccess,
  Read,
    UniqueConstraintError,
    UserDetails,
    UserLogin
} from './user-detais';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class CRUDService {
  constructor(private http: HttpClient) {}
  headers = new HttpHeaders({
    'content-type': 'application/json',
    Authentication: 'Bearer' + localStorage.getItem('token'),
  });


  FoodHeaders = new HttpHeaders({
    'X-RapidAPI-Key': '9d95c08d75mshae57f7f480c131ap1443f3jsn5525ed1bd303',
    'X-RapidAPI-Host': 'pizza-and-desserts.p.rapidapi.com',
  });


  
  private url = 'http://localhost:4000/';
  User: UserLogin = {
    u_name: '',
    pass: '',
  };

  Insert(
    Details: UserDetails
  ): Observable<InsertedSuccess | UniqueConstraintError> {
    return this.http.post<InsertedSuccess | UniqueConstraintError>(
      this.url + 'Students/Insert',
      Details,
      { headers: this.headers }
    );
  }
  Read(u_name:string): Observable<Read> {
    
    
    return this.http.get<Read>(`${this.url}Students/Read${u_name}`
  
    );
  }
  Delete(RollNumber: String): Observable<InsertedSuccess> {
    console.log(`${this.url}Students/Delete${RollNumber}`);
    return this.http.delete<InsertedSuccess>(
      `${this.url}Students/Delete${RollNumber}`
    );
  }
  Update(RollNumber: String, Details: UserDetails) {
    return this.http.put(`${this.url}Students/Update${RollNumber}`, Details, {
      headers: this.headers,
    });
  }



 
}

