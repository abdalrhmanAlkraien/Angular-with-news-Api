import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiNewServiceService {

  constructor(private http:HttpClient) {

  }
  key="7e90a475096e47e1b7dc57ef337090e9";
  getSource(){
    return this.http.get('https://newsapi.org/v2/sources?language=en&country=us&apiKey='+this.key);
   // return this.http.get('https://newsapi.org/v2/top-headlines?country=us&apiKey'+this.key);
  }

  getArtical(){
    return this.http.get('http://newsapi.org/v2/top-headlines?' +
    'sources=bbc&' +
    'country=sa'+
    'apiKey='+this.key);
  }
  getArticalById(source:string){
    return this.http.get('http://newsapi.org/v2/top-headlines?' +
    'sources='+source+'&' +
    'apiKey='+this.key);
  }
}
