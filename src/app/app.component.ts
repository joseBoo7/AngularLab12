import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lab_12';
  paises: any;

  constructor(private http: HttpClient) {

  }
  ngOnInit() {
    this.http.get("https://api.covid19api.com/summary")
      .subscribe(
        resultado => {
          this.paises = resultado;
        }
      );
  }
}

