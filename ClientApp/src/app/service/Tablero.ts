import { Tablero } from "../Models/Tablero";


export class TableroService {

    public tablero: string[][] = [
        [" ", " ", " "],
        [" ", " ", " "],
        [" ", " ", " "]
    ];
    generarTablero(){
        this.tablero = [
            [" ", " ", " "],
            [" ", " ", " "],
            [" ", " ", " "]
        ];


        return this.tablero;

    }
    mostrarTablero(): void {
        console.log("Tablero:");
        for (const fila of this.tablero) {
            console.log(fila.join(" | "));
        }
    }   
    
     realizarMovimiento(fila: number, columna: number, turno: boolean) {
        if (turno && this.tablero[fila][columna] != "x" && this.tablero[fila][columna] !="o"){
            this.tablero[fila][columna] = 'x'
        }
        else if (!turno && this.tablero[fila][columna] != "x" && this.tablero[fila][columna] !="o"){
            this.tablero[fila][columna] = 'o' }
           

    }
    

}
