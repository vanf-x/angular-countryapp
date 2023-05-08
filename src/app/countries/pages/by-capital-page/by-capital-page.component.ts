import { Component, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [],
})
export class ByCapitalPageComponent {

  //@Output() search = new EventEmitter<string>();

  searchByCapital(term: string):void {
    console.log('Desde ByCapitalPage');
    console.log({ term });
  }
}
//desde bycapitalpage cuando se apriete enter en el buscador
//se va a disparar un evento (onValue)="searchByCapital($event)" output

//ensearchBoxComponent referencia #txtInput 
//soltar enter, ejecutar todo y ver en consola el mensaje escrito