import { Component, OnInit } from '@angular/core';
import { Clientes } from '../clientes';


@Component({
  selector: 'clientes-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  cliente:Clientes;

  constructor() { }

  ngOnInit() {
    this.cliente = new Clientes();
    
  }

}
