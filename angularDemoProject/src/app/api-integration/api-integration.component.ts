import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-api-integration',
  templateUrl: './api-integration.component.html',
  styleUrls: ['./api-integration.component.scss']
})
export class ApiIntegrationComponent implements OnInit {

  constructor( private http:HttpClient){}

  getJsonValue:any;
  postJsonValue:any
  deleteJsonValue:any


ngOnInit(): void {
  this.getMethod();
  this.postMethod();
  this.deleteMethod();
  
}

public getMethod(){
  this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe((data)=>{
    console.log('data',data)
    this.getJsonValue = data
  })
}

public postMethod(){

  const header = new HttpHeaders({
    contentType: 'application/json'
  })

  let body = {
    title: 'jagan',
    body: 'code',
    userId: 1,
  }
  this.http.post('https://jsonplaceholder.typicode.com/posts',body, {headers:header}).subscribe((data)=>{
    console.log('post', data)
    this.postJsonValue = data
  })
}

public deleteMethod(){
  this.http.delete('https://jsonplaceholder.typicode.com/posts/17').subscribe((data)=>{
    console.log('delete', data)
    this.deleteJsonValue = data
  })
}



}


