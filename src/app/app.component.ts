import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MyInterceptor } from './interceptor/interceptor.service';
import { conferences } from './interface/conferences.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  searchText = '';
  conferences: conferences[] = [];
  filterConferences: conferences[] = [];
  titles: string[] = [
    '#',
    'Conferencia',
    'Nombre corto',
    'Abreviacion',
    'Clasificacion',
  ];

  constructor(private http: HttpClient) {}

  searchConference() {
    this.filterConferences = this.conferences.filter(
      (conference) =>
        conference.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
        conference.short_name
          .toLowerCase()
          .includes(this.searchText.toLowerCase())
    );
  }

  //Apenas carga el componente esto se ejecuta
  ngOnInit() {
    this.http.get<conferences[]>('/conferences').subscribe(
      (res) => {
        this.conferences = res;
        this.filterConferences = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
