import { Component } from '@angular/core';
import { Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Food Api';
  private apiUrl = 'https://api.fuud.ituk.ee/daily';
  data: any = {};

  constructor(private http: Http){
    console.log('Hello');
    this.getFoods();
    this.getData();

  }

  getData(){
    return this.http.get(this.apiUrl)
      .map((res: Response) => res.json())
  }


  getFoods(){
    this.getData().subscribe(data =>{
      console.log(data);
      this.data = data.data
    })

  }
}
