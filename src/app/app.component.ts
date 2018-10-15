import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TP2-Garage';
  isEnable : boolean;
  names : string[];

  constructor()
  {
    this.isEnable = false;
    this.names = ["Lenny", "Mehdi"];
  }

  toggle()
  {
    this.isEnable = !this.isEnable;
  }
}
