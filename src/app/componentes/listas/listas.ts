import { Component } from '@angular/core';
import { Personajes } from "../personajes/personajes";
import { Lugares } from "../lugares/lugares";
import { Episodios } from "../episodios/episodios";

@Component({
  selector: 'app-listas',
  imports: [Personajes, Lugares, Episodios],
  templateUrl: './listas.html',
  styleUrl: './listas.scss'
})
export class Listas {

}
