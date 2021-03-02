import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';


const sampleData = [{
  transactionType: 'Home Loan',
  transactionDate: '12-03-2021',
  transactionAmount: '10,0000',
  transactionDescription: 'Banglore',
}, {
  transactionType: 'Home Loan',
  transactionDate: '12-03-2021',
  transactionAmount: '10,0000',
  transactionDescription: 'Banglore',
}, {
  transactionType: 'Home Loan',
  transactionDate: '12-03-2021',
  transactionAmount: '10,0000',
  transactionDescription: 'Banglore',
}];

@Injectable({
  providedIn: 'root'
})

export class CommunicationServiceService {
  itemListEnvName: any;
  constructor(private http: HttpClient) {

  }
  postObjects(path, body) {
    interface UserResponse {
      success: boolean;
      message: any;
    }
    const headers = new HttpHeaders(environment.headerKey);
    /*  const body = JSON.stringify({
        'loginName': form.userId,
        'password': form.password
      });*/

    console.log(body);
    return new Promise(resolve => {
      this.http.post(environment.apibaseUrl + path, body, {headers, observe: 'response'})
        .subscribe((response: HttpResponse<UserResponse>) => {
            if (response.status === 201) {
              resolve(response.body);
            } else if(response.status === 404){
              resolve(response.body);
            }else{
              resolve(false)
            }
          }, error => {
            resolve(false);
          }
        );
    });
  }

  putObjects(path, body) {
    interface UserResponse {
      success: boolean;
      message: any;
    }
    const headers = new HttpHeaders(environment.headerKey);
    /*  const body = JSON.stringify({
        'loginName': form.userId,
        'password': form.password
      });*/

    console.log(body);
    return new Promise(resolve => {
      this.http.put(environment.apibaseUrl + path, body, {headers, observe: 'response'})
        .subscribe((response: HttpResponse<UserResponse>) => {
            if (response.status === 201) {
              resolve(response.body);
            } else if(response.status === 404){
              resolve(response.body);
            }else{
              resolve(false)
            }
          }, error => {
            resolve(false);
          }
        );
    });
  }


  // Get Method
  getObjects(path, parameter) {
    const headers = new HttpHeaders(environment.headerKey);
    return new Promise(resolve => {
      this.http.get(environment.apibaseUrl + path + parameter, {headers, observe: 'response'})
        .subscribe(response => {
            if (response.status === 200) {
              resolve(response.body);
            } else {
              resolve(false);
            }
          }, error => {
            resolve(false);
          }
        );
    });
  }
  // sample method
  getMethod() {
   return new Promise (resolve => {
     setTimeout(() => { resolve(sampleData); }, 3000);
   });
  }
}
