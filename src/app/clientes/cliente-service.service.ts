import { Injectable } from '@angular/core';
import { Clientes } from './clientes';

@Injectable()
export class ClienteServiceService {

  clientesList:Array<Clientes>;
  constructor() { 

    this.clientesList=[
    {name: "Mauro",
    address: "Chipre",
    stratum:1,
    gender: "Male"},
    {name: "Andres",
    address: "Estrella",
    stratum:3,
    gender: "Male"},
    {name: "Jaime",
    address: "Aguacate",
    stratum:3,
    gender: "Indefinido"}]
  
  }

}
