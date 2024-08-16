import { HttpClient } from '@angular/common/http';
import { Injectable,inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
apiUrl="http://localhost:8000";
httpClient=inject(HttpClient);
  constructor() { }


// getUsers(){
//   return this.httpClient.get(this.apiUrl+'/users')
// }
postUser(userData: any): Observable<any> {
  return this.httpClient.post(`${this.apiUrl}/api/v1/users/register`, userData);
}


// upload(userData: any): Observable<any> {
//   return this.httpClient.post(`${this.apiUrl}/upload`, userData);
// }

}
