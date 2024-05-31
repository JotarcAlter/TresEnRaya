import { Component } from '@angular/core';
import { TableroService } from '../service/Tablero'; 


@Component({
    selector: 'app-tablero',
    templateUrl: 'game.component.html',
  })


export class TableroComponent {

  tab: string[][];
  contador:number = 0;
  turno: boolean = true
  juegoTerminado: boolean = false
  juegoEmpate: boolean = false

  constructor(private tableroService: TableroService) {
    this.tab = tableroService.tablero;
    
    

  }

  click_casilla(fila:number, columna: number){
    if(!this.juegoTerminado && this.contador < 9 && this.tab[fila][columna] == " " ){
      this.contador++
      this.turno = !this.turno
      this.tableroService.realizarMovimiento(fila, columna, this.turno);
      this.juegoTerminado = this.verificarGanador()
      if(this.contador == 9 && !this.juegoTerminado){
        this.juegoEmpate = true
      }
    }
  }

  verificarGanador(): boolean{
   
    for (let i = 0; i < 3; i++) {
      if (this.tab[i][0] === this.tab[i][1] && this.tab[i][1] === this.tab[i][2] && this.tab[i][0] != " " && this.tab[i][1] != " " && this.tab[i][2] != " ") {
        return true;
    }
    if (this.tab[0][i] === this.tab[1][i] && this.tab[1][i] === this.tab[2][i] && this.tab[0][i] != " " && this.tab[1][i] != " " && this.tab[2][i] != " ") {
      return true;
  }
    
    }

    if (this.tab[0][0] === this.tab[1][1] && this.tab[1][1] === this.tab[2][2] && this.tab[0][0] != " " && this.tab[1][1] != " " && this.tab[2][2] != " ") {
        return true;
    }

    if (this.tab[0][2] === this.tab[1][1] && this.tab[1][1] === this.tab[2][0] && this.tab[0][2] != " " && this.tab[1][1] != " " && this.tab[2][0] != " ") {
        return true;
    }

    return false;

}
    vaciarTablero(){

    this.turno = true
    this.juegoTerminado = false
    this.tab = this.tableroService.generarTablero();
    this.contador = 0
    this.juegoEmpate = false
    }

    empate(): boolean{

      for(let i = 0; i < 3; i++){
        for (let j=0; j < 3; j++){
          if(this.tab [i][j] != " "){
            return false;
          }
            
        }
          
      }
      return true;
    }
    
}