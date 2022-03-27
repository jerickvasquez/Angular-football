import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MyInterceptor } from './interceptor/interceptor.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient) {}

  //Apenas carga el componente esto se ejecuta
  ngOnInit() {
    this.http.get('/conferences').subscribe(
      (res) => {
        console.log('Entro a la respuesta');
        console.log(res);
      },
      (err) => {
        console.log('Entro al error');
        console.log(err);
      }
    );
  }
}
