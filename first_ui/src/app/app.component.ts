import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'first_ui';
  constructor(private httpClient: HttpClient) { }

  getResponseFromServer() {
    this.httpClient.get<any>('/api-service/api/resources').subscribe(data => {
      console.log('here is the response data ', data);
    })
  }

  postDataToServer() {
    const reqBody = {
      name: 'Durgesh',
      'address': 'India'
    };
    this.httpClient.post('/api-service/api/resources', reqBody).subscribe(data => {
      console.log('here is the response data ', data);
    })
  }

}
