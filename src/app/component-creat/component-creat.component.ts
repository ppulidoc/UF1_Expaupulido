import { Component } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
@Component({
  selector: 'app-component-creat',
  templateUrl: './component-creat.component.html',
  styleUrls: ['./component-creat.component.css']
})
export class ComponentCreatComponent {
constructor(private http: HttpClient) {
  // this.ex1_post(); //Funciona
  // this.ex2_post(); //Funciona
  // this.ex3_post();
  // this.ex4_post(); //Funciona

}
ex1_post(){
  this.http.post("http://localhost:3080/api/ex1", {}).subscribe();
}

ex2_post(){
  this.http.post("http://localhost:3080/api/ex2", {}).subscribe();
}

ex3_post(){
  this.http.post("http://localhost:3080/api/ex3", {}).subscribe();
}

ex4_post(){
  this.http.post("http://localhost:3080/api/ex4", {}).subscribe();
}
}
